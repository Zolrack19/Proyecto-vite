import React from "react";

export default function NuevaEncuesta() {
    return (
        <div>
            <h2 className="text-center my-4">Elige cómo comenzar</h2>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-10 col-sm-5 tarjeta px-4 my-4">
                        <img className="my-2" src="/src/assets/encuesta-0.svg" alt="referencia" style={{height: "60px"}}/>
                        <h5>Comenzar desde cero</h5>
                        <p>Comienza con una encuesta o formulario en blanco. Luego agrega preguntas, textos e imágenes</p>
                    </div>
                    <div className="col-10 col-sm-5 tarjeta px-4 offset-sm-1 my-4">
                        <img className="my-2" src="/src/assets/encuesta-p.svg" alt="referencia" style={{height: "60px"}}/>
                        <h5>Elige una plantilla popular</h5>
                        <p>Haz las preguntas correctas y ahorra tiempo con una plantilla diseñada para tu situación</p>
                    </div>
                </div>
            </div>
        </div>
    )
}