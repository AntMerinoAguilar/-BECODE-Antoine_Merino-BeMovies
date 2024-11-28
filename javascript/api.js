let availableGenres;
let latestMovies;
let actionMovies;

let swiperWrappers=document.querySelectorAll(".swiper-wrapper");
const images = document.querySelectorAll('img');

let sectionSearchedMovies=document.querySelector(".resultMovies-container");
let fieldSearch=document.querySelector("#searchMovie");
let searchButton=document.querySelector(".searchButton");

const overlayModalMovie = document.querySelector(".overlay-modalMovie");
const modalMovie = document.querySelector(".modalMovie");
const openModalMovie = document.querySelectorAll(".imageOpenModal");
const btnCloseModalMovie = document.querySelector(".modalMovie__close")
const imgModalMovie = document.querySelector(".imageModalMovie");

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTI5MzU0YjA1ZjI5NWE0ZDNkYzY4ZWRiMzQ0MTA4ZiIsIm5iZiI6MTczMTA1ODMwMi4xNzY1NTgzLCJzdWIiOiI2NzI4YzljNWMwOTAxMDk1ODBmYTA3YTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZS23w7MurzEGreqmZ64H65SBibwuU6KembQjofKtpr4'
    }
};

const createSwiper=()=>{
    const swiper = new Swiper(".swiper-container", {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: true,
    });
    return swiper;
}

const getCreditsForMovie=async (movie)=>{
    try {
        let resCredits=await fetch(`https://api.themoviedb.org/3/movie/${movie["id"]}/credits`, options);
        let dataCreditMovie=await resCredits.json();
        return dataCreditMovie;
    } catch (error) {
    }
};

const getData = async() => { 
    try {
        let resLatestMovies=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        let dataLatestMovies=await resLatestMovies.json(); // va chercher les derniers films
    
        let resGenre=await fetch('https://api.themoviedb.org/3/genre/movie/list', options);
        let dataGenre=await resGenre.json(); // va chercher les genres des films

        let resActionMovies=await fetch('https://api.themoviedb.org/3/discover/movie', options);
        let dataActionMovies=await resActionMovies.json(); // va chercher les films pour les films d'action (1er genre)

        return {
            nowPlayingMovies: dataLatestMovies,
            genreMovies: dataGenre,
            actionMovies:dataActionMovies,
        };
    } catch (error) {
        console.log(error)
    }
}

btnCloseModalMovie.onclick = function() {
    overlayModalMovie.style.display = "none";
    modalMovie.style.display = "none";
}

const changeInfoDetailsMovie=(movie,credits)=>{
    document.querySelector(".imageModalMovie").src=`https://image.tmdb.org/t/p/w500${movie["poster_path"]}`
    document.querySelector(".titleMovie").innerText=movie["original_title"];
    document.querySelector(".yearMovie").innerText=movie["release_date"].substring(0, 4);
    document.querySelector(".noteMovie__number").innerText=movie["vote_average"].toFixed(1);
    document.querySelector(".genreMovie").innerText=getGenresForMovie(availableGenres,movie["genre_ids"]);
    document.querySelector(".synopsis").innerText=movie["overview"];
    document.querySelector(".castMovie").innerText=getCastForMovie(credits,movie["id"]);
}

const addEventHover=(hover,movie)=>{
    hover.addEventListener("click",async e=>{
            document.body.style.overflow="hidden";
            overlayModalMovie.style.display = "block";
            modalMovie.style.display = "block";
            overlayModalMovie.addEventListener("click", (event) => {
                if (event.target === overlayModalMovie) {
                    overlayModalMovie.style.display = "none";
                    modalMovie.style.display = "none";
                    document.body.style.overflow="auto";
                }
            })
        let credits= await getCreditsForMovie(movie);
        changeInfoDetailsMovie(movie,credits);
    });
}


const getGenresForMovie=(genreIdsMovie)=>{
    let strGenres=""
    for(let i=0;i<genreIdsMovie.length;i++){
        for(let j=0;j<availableGenres.length;j++){
            if(genreIdsMovie[i]==availableGenres[j]["id"]){
                strGenres+=availableGenres[j]["name"]+(i!=genreIdsMovie.length-1?" / ":"");
            }
        }
    }
    return strGenres;
}

const getCastForMovie=(credits)=>{
    let actors="";
    for(let j=0;j<5;j++){
        actors+=credits["cast"][j]["name"]+(j==4?"":", ");
    }
    return actors;
}

const createImage=(path)=>{
    let img=document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${path}`;
    img.alt ="";
    img.classList="movieImage";
    return img;
}

const createContentHover=(movie)=>{
    let h1=document.createElement("h1");
    h1.innerText=movie["original_title"];

    let h2=document.createElement("h2");
    h2.innerText=movie["release_date"].substring(0, 4);

    let h3=document.createElement("h3");
    h3.innerText=getGenresForMovie(movie["genre_ids"]);

    let ratingDiv=document.createElement("div");
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'noteMovie__star');
    svg.setAttribute('width', '21');
    svg.setAttribute('height', '21');
    svg.setAttribute('viewBox', '0 0 21 21');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M9.15593 1.01863C9.57965 -0.339543 11.42 -0.339543 11.8423 1.01863L13.3536 5.87324C13.4459 6.16889 13.6254 6.42651 13.8664 6.60925C14.1073 6.792 14.3975 6.89053 14.6953 6.89076H19.585C20.9536 6.89076 21.5214 8.71935 20.4155 9.55991L16.4608 12.5594C16.2193 12.7423 16.0395 13.0003 15.9472 13.2965C15.8548 13.5927 15.8547 13.9118 15.9467 14.2081L17.458 19.0627C17.8817 20.4209 16.3916 21.5519 15.2829 20.7114L11.3282 17.7119C11.087 17.529 10.7965 17.4306 10.4984 17.4306C10.2003 17.4306 9.90986 17.529 9.66863 17.7119L5.71393 20.7114C4.60661 21.5519 3.11795 20.4209 3.54026 19.0627L5.05152 14.2081C5.14357 13.9118 5.1434 13.5927 5.05105 13.2965C4.95869 13.0003 4.77888 12.7423 4.53741 12.5594L0.58412 9.56139C-0.521783 8.72083 0.0474111 6.89224 1.41461 6.89224H6.3029C6.60098 6.89232 6.89144 6.79393 7.13271 6.61116C7.37398 6.42839 7.55368 6.17061 7.64608 5.87471L9.15734 1.0201L9.15593 1.01863Z');
    path.setAttribute('fill', '#CC0000');

    svg.appendChild(path);

    let h4=document.createElement("h4");
    h4.innerText=movie["vote_average"].toFixed(1);
    ratingDiv.append(svg,h4);

    return [h1,h2,h3,ratingDiv];
}

const createHover=(movie)=>{
    let div=document.createElement("div");
    div.classList="hoverImage";

    let content=document.createElement("div");
    content.classList="hoverImageContent";
    content.append(...createContentHover(movie));
    div.append(content);
    return div
}

const createMovie=(movie)=>{
    let div=document.createElement("div");
    div.classList="swiper-slide";

    let img=createImage(movie["poster_path"]);
    let hover=createHover(movie);
    addEventHover(hover,movie);
    div.append(img,hover);
    return div;
}

const getMoviesByGenre=async(genre)=>{
    try {
        let resMoviesByGenre=await fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=${genre["id"]}`, options);
        let dataMoviesByGenre=await resMoviesByGenre.json();
        return dataMoviesByGenre;
    } catch (error) {
    }
}

const createCategory=(genre)=>{
    let buttonGenre=document.createElement("button");
    buttonGenre.classList="btn";
    buttonGenre.innerText=genre["name"];
    buttonGenre.addEventListener("click",async e=>{
        try {
            swiperWrappers[2].innerHTML="";
            let dataSelectedCategory = await getMoviesByGenre(genre);
            let moviesSelectedCategory = dataSelectedCategory["results"]
            moviesSelectedCategory.forEach(movie=>{
                swiperWrappers[2].append(createMovie(movie));
            })
            createSwiper();

            document.querySelector(".selected-genre").innerText = genre["name"];
        } catch (error) {
        }
    });
    return buttonGenre;
};

/* const putAllAvailableGenres=()=>{
    let genreBar=document.querySelector(".genre-buttons");
    availableGenres.forEach(genre=>{
        let buttonGenre=createCategory(genre);
        genreBar.appendChild(buttonGenre);
    });
} */

const getMoviesBySearch=async(word)=>{
    try {
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?&query=${word}`, options);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

searchButton.addEventListener("click", async e => {
    e.preventDefault();
    try {
        let dataSearchedMovies=await getMoviesBySearch(fieldSearch.value);
        let searchedMovies=dataSearchedMovies["results"];

        swiperWrappers[0].innerHTML="";
        searchedMovies.forEach(movie=>{
            swiperWrappers[0].append(createMovie(movie));
            createSwiper();
        });

        document.querySelector(".wordSearched").innerText=`Results for “${fieldSearch.value}”`;
        sectionSearchedMovies.style.display="block";
    } catch (error) {      
    }
});

getData().then(response => {
    //liste derniers films
    latestMovies = response["nowPlayingMovies"]["results"];

    //liste genre disponible
    availableGenres = response["genreMovies"]["genres"];// les genres dispos

    //liste films d'action (pour première catégorie)
    actionMovies=response["actionMovies"]["results"];

    latestMovies.forEach(movie=> {
        swiperWrappers[1].appendChild(createMovie(movie));
    });
    createSwiper();

    actionMovies.forEach(movie=>{
        swiperWrappers[2].appendChild(createMovie(movie));
    })
    putAllAvailableGenres();
})


// Vider la barre de recherche à chaque fois qu'on load la page
window.onload = function() {
    fieldSearch.value = '';
};


// Créer le swiper des genres
const createGenreSwiper = () => {
    const swiperGenre = new Swiper('.swiper-container-genre-slider', {
        direction: 'horizontal',
        loop: false, // Pas de boucle pour éviter des genres répétitifs
        slidesPerView: 6, // Nombre de genres visibles
        spaceBetween: 20,
        freeMode: true, // Permet un glissement fluide
        mousewheel: true, // Active la navigation avec la molette de souris
        grabCursor: true, // Affiche un curseur "main" lors du glissement
        /* navigation: {
            nextEl: '.swiper-button-next-genre',
            prevEl: '.swiper-button-prev-genre',
        }, */
    });
    return swiperGenre;
};

const putAllAvailableGenres = () => {
    let genreWrapper = document.querySelector('.swiper-wrapper-genre-slider');
    availableGenres.forEach((genre) => {
        let slide = document.createElement('div');
        slide.classList.add('swiper-slide-genre-slider');

        let buttonGenre = createCategory(genre); // Utilise la fonction existante pour créer les boutons
        slide.appendChild(buttonGenre);

        genreWrapper.appendChild(slide);
    });

    // Initialise le swiper après avoir ajouté les genres
    createGenreSwiper();
};