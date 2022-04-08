import React from "react";

const GhibliFilm = ({film}) => {

    return <div className="film-item">
                <tr>
                    <td>{film.title}</td>
                    <td>{film.director}</td>
                    <td>{film.release_date}</td>
                    <td> {film.running_time}</td>
                </tr>
           </div>
}



export default GhibliFilm;