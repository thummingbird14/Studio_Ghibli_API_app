import React from "react";
import GhibliFilm from "./GhibliFilm.js"

const GhibliFilmList = ({films, onGhibliFilmClick}) => {

const filmList = films.map((film, index) => {
    return <GhibliFilm film={film} key={index} onGhibliFilmClick={onGhibliFilmClick}/>
});
    return(
        <div className="film-list">
            <table>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Release Date</th>
                        <th>Running Time</th>
                    </tr>
                    {filmList}
            </table>
        </div>
    );
}

export default GhibliFilmList;