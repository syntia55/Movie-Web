import "../component/search-bar";
import "../component/movie-list";
import "../data/data-movie";
import DataMovie from "../data/data-movie";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieElement = document.querySelector("movie-list");
    const SearchButtonClicked = async () => {
        try {
            const { Search: dataMovie } = await DataMovie.getMovie(
                searchElement.value
            );
            Result(dataMovie);
        } catch (error) {
            errorResult(error);
        }
    };

    const Result = (results) => {
        movieElement.movies = results;
    };

    const errorResult = (message) => {
        movieElement.ErrorRender(message);
    };
    searchElement.clickEvent = SearchButtonClicked;
};

export default main;
