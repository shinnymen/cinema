const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let movies = [];
let search = "star wars";

const fetchMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=d39234274d9f484027bcb181de8a7b15&query=${search}`
  ).then((res) => res.json());
};

const moviesDisplay = async () => {
  await fetchMovies();

  movies.results.length = 12;

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `<li>
        <h2>${movie.original_title}</h2>
        <div class="card-content">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
            <div className="infos">
                <p>${movie.overview}</p>
                <p>Popularite: ${movie.popularity}</p>
            </div>
        </div>
    </li>
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;
  moviesDisplay();
});
