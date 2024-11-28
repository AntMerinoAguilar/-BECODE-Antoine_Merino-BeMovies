// JS pour un Easter Egg

searchButton.addEventListener("click", () => {
    if (fieldSearch.value.trim() === "Antoine") {
        alert("Looks like you found part of the easter egg!");
    } else if (fieldSearch.value.trim() === "Timmy") {
        alert("Looks like you found the other part of the easter egg!");
    } else if (fieldSearch.value.trim() === "Antoine & Timmy") {
        alert("Congratulations, you've found the two authors of this wonderful website!");
    };
})