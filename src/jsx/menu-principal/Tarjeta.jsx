import React from "react";

import "/src/estilos/tarjeta.css"

export default function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <div className="cabezal">
                <h5 className="titulo"><acronym title={props.titulo}>{props.titulo}</acronym></h5>
                <button>&bull;&bull;&bull;</button>
            </div>
            <p>fecha de creación</p>
            <button className="resultado">analizar resultados</button>
        </div>
    )
}