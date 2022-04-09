import React, {useState, useEffect} from "react";
import GhibliFilmList from "../components/GhibliFilmList"
import GhibliFilmDetail from "../components/GhibliFilmDetail"

const GhibliFilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [requestedFilm, setRequestedFilm] = useState(null);

    useEffect(() => {
        getFilms();
      }, []);

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
        // .then(films => console.log(films))
    }

    return (
        <div className="film-container">
            <GhibliFilmList films={films}/>
        </div>
    )
}

export default GhibliFilmContainer;