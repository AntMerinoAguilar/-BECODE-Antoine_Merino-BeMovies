# BeMovies - Movie Search App 🎬

This repository contains a **Movie Search** application, built as part of my training at **BeCode**. The goal of this exercise was to create a **pixel-perfect** version of the BeMovies app based on the design provided in **Figma**. It was developed collaboratively as a **pair programming** exercise, where one member focused on the **HTML/CSS** (or **Sass**) part, and the other handled the **JavaScript** functionality.

This project was completed in collaboration with [**titruong99**](https://github.com/titruong99), and while our implementations of HTML, CSS, and JavaScript are very similar, there are slight differences in details and approaches.

## Overview 📋

In this project, I developed a web application that:

- Allows users to search for movies by title.
- Displays a list of movies based on search queries.
- Provides additional details such as movie posters, release year, and plot summaries.
- Integrates with the **TMDb API** to fetch movie data.

The design of the app was created in **Figma**. The exercise focused on achieving a **pixel-perfect** implementation of the design provided in the Figma file:  
[BeMovies Figma Design](https://www.figma.com/design/jT6U3cABdKEUDRVTUJSbQd/BeMovies?node-id=0-1).

## Why This Project? 🤔

Building this application helped me gain practical experience in:

- Working with **external APIs** (specifically **TMDb**).
- Handling **user inputs** (searching for movies).
- Displaying **dynamic content** based on the results from the API.
- Managing **JavaScript promises** to handle asynchronous data fetching.
- Achieving **pixel-perfect** design implementation from **Figma** to **HTML/CSS**.
- Collaborating with a team member using **version control** (GitHub), **branching**, and **merging**.
- Following an **Agile methodology** (e.g., **Trello**, **SCRUM**) for project management and task distribution.

## Repository Structure 📂

The repository is organized as follows:

- **`index.html`**: The main HTML file for the app.
- **`javascript/`**: Contains all JavaScript files for the project.
  - **`api.js`**: Handles API calls to fetch movie data.
  - **`easterEgg.js`**: Adds Easter egg functionality to the app.
  - **`popupMovie.js`**: Manages the popup window for displaying movie details.
  - **`popupRegisterLogin.js`**: Handles the login and registration modals.
  - **`swiper.js`**: Integrates and manages the Swiper library for the carousel effect.

- **`sass/`**: Contains all Sass files for styling the app.
  - **`base/`**: Base styles (e.g., resets, typography).
  - **`components/`**: Reusable components like buttons, cards, etc.
  - **`layout/`**: Layout-specific styles (e.g., header, footer, grid systems).
  - **`utils/`**: Utility classes and helper styles.
  - **`main.scss`**: The main Sass file that imports all the other Sass modules and compiles into **`main.css`**.
  - **`main.css`**: Compiled CSS file from Sass.

## Project Process 🚧

This exercise was carried out in **duo** with my partner, [**titruong99**](https://github.com/titruong99), following the process outlined in the exercise description:

- Each member worked separately on the **HTML** and **CSS/Sass** part, and later handed over their work for the other member to integrate the **JavaScript** functionality.
- We coordinated through **branches** in GitHub, merged our changes, and ensured the HTML, CSS, and JS worked seamlessly together.
- We also made use of **Postman** to test the API endpoints and ensure that the data from **TMDb** was correctly retrieved.

For a similar implementation of the project, you can also check out my partner’s repository:  
[**titruong99's BeMovies Repo**](https://github.com/titruong99/BeMovies-BeCode-Timmy).

## Installation and Usage 💻

1. Clone this repository:
   ```bash
   git clone https://github.com/AntMerinoAguilar/-BECODE-Antoine_Merino-BeMovies.git
