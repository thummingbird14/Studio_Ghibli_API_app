import React from "react";

const GhibliFilmDetail = ({film}) => {
    return(
        <div className="film-detail">
            <p>{film.name}</p>
        </div>
    )
}

export default GhibliFilmDetail;