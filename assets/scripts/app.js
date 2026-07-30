const addMovieModal = document.getElementById("add-modal");
// const addMovieModel = document.querySelector("#add-modal");
// const addMovieModel = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const movieList = document.getElementById("movie-list");
  movieList.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  const confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId),
  );
  // deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `<div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}">
</div>
<div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
</div>
`;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id),
  );
  const movieList = document.getElementById("movie-list");
  movieList.append(newMovieElement);
};
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closemovieModal = () => {
  addMovieModal.classList.remove("visible");
};

function showMovieModal() {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
}

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};
const cancelAddMovieHandler = () => {
  closemovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values for all fields.");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: +ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closemovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating,
  );
  updateUI();
};
const backdropclickHandler = () => {
  closemovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};
startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropclickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
