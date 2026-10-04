# Favorite Movies

A small vanilla JavaScript app for keeping a personal list of favorite movies. Add a movie with a title, poster image URL and rating, and delete it later after a confirmation prompt.

**Live demo:** [favorite-movie-rating-7.netlify.app](https://favorite-movie-rating-7.netlify.app/)

![Favorite Movies](https://raw.githubusercontent.com/pokurumohanendra/My-Portfolio/main/public/projects/favorite-movies.jpg)

## Features

- Add a movie with a title, image URL and a rating from 1 to 5
- Input validation with an alert for missing or invalid values
- Confirmation modal before a movie is deleted
- Backdrop click and Cancel to close the modals

## Tech stack

HTML, CSS and JavaScript (DOM manipulation). No build step or dependencies.

## Getting started

Open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Project structure

```
index.html
assets/
├── scripts/app.js   modal handling, adding and deleting movies
└── styles/app.css
```

## About

Built as a learning project to practise DOM manipulation, event listeners and modal dialogs in plain JavaScript.

## Author

[Pokuru Mohanendra](https://github.com/pokurumohanendra) · [LinkedIn](https://www.linkedin.com/in/pokuru-mohanendra/)
