import { useState } from "react";
import { useParams } from "react-router"
import { useFetch } from "../hooks/useFetch";
import { URL_DETAILS, URL_IMAGES, IMDB_URL } from "../settings";
import './styles/MovieDetails.css';

export default function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useFetch(URL_DETAILS.replace("{movie_id}", movieId), setMovie)

    return (
        <div className="pb-5 min-vh-100 text-center">

            <img className="movie-image" src={`${URL_IMAGES + movie.backdrop_path}`} alt="" />

            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="display-1 fw-bold">{movie.title}</h1>
                    <span className="ms-3 fs-4 badge bg-primary">{movie.original_language}</span>
                    <span className="ms-3 fs-4 badge bg-primary">{movie.vote_average}⭐</span>
                </div>

                <div className="text-start movie-info">
                    <h2>{movie.tagline}</h2>
                    <h6 className="mb-2 text-muted">{movie.release_date}</h6>
                    <p className="my-3">{movie.overview}</p>
                    <a className="btn btn-warning w-50" href={IMDB_URL + movie.imdb_id} target="_blank">IMDb</a>
                </div>
            </div>
        </div>
    )
}
