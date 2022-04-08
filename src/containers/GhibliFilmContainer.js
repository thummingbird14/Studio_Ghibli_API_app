import React, {useState, useEffect} from "react";
import GhibliFilmList from "../components/GhibliFilmList"

const GhibliFilmContainer = () => {

    const [films, setFilms] = useState([]);

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