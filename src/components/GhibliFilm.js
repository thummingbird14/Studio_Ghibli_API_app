import React from "react";

const GhibliFilm = ({film}) => {



    

    return <>
                <tr>
                    <td>{film.title}</td>
                    <td>{film.director}</td>
                    <td>{film.release_date}</td>
                    <td> {film.running_time}</td>
                    <td><button> More Info</button></td>
                </tr>
           </>
}



export default GhibliFilm;