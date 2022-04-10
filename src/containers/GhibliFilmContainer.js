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
    }

    const onGhibliFilmClick = function(film){
        setRequestedFilm(film);
        console.log`Requested film is: ${film}`
    }


    return (
        <div className="film-container">
            <GhibliFilmList films={films} onGhibliFilmClick={onGhibliFilmClick}/>
            {requestedFilm ? <GhibliFilmDetail film={requestedFilm}/> :null}
        </div>
    )
}

export default GhibliFilmContainer;