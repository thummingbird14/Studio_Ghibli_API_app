import React from "react";

const GhibliFilmDetail = ({film}) => {
    return(
        <div className="film-detail">
            <h3>{film.title}</h3>
            <p>{film.description}</p>
        </div>
    )
}

export default GhibliFilmDetail;