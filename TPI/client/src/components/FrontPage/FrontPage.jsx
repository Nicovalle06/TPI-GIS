import React from "react";
import utnImage from "../../assets/utn.png";
import "./FrontPage.css";


export default function FrontPage({ onEnterClick }) {
  
  return (

    <div
      className="w-full h-screen flex flex-col justify-center items-center text-white relative"
    >
    {/* Imagen UTN */}
    <div
      className="absolute top-10 flex justify-center items-center"
      style={{ transform: "translateY(200%) translateX(-170%)"
      }}>
      <img
        className="w-[300px] h-[100px] object-contain"
        src={utnImage}
        alt="UTN Logo"
      />
    </div>

    {/* Título */}
    <h2 className="text-center text-[32px] font-extrabold absolute top-[40%] left-[14%]">
      Sistemas de Información <br />
      Geográficos
    </h2>

    {/* Profesores y Alumnos */}
    <div
      className="absolute top-[26%] left-[50%] text-center"
      style={{ width: "50%" }}
    >
    <div>
      <h3 className="font-bold mb-2">Profesores</h3>
      <h4>Ing. Ilse Hodapp</h4>
      <h4>Ing. Rodrigo Valdes</h4>
    </div>
    <br></br>
    <div>
      <h3 className="font-bold mb-2">Alumnos</h3>
      <h4>Angeloff, César</h4>
      <h4>Di Nubila, Vicente</h4>
      <h4>Pallarés Ulises</h4>
      <h4>Vallejos Zabala, Nicolás</h4>
      <h4>Vera, Cristian</h4>
    </div>
  </div>

    {/* Botón */}
    <div className="absolute bottom-40">
      <button className="btn-ingreso px-10 py-4 bg-green-#2C8281 rounded hover:bg-blue-#2089AB" onClick={onEnterClick} > 
        Ingresar
      </button>
    </div>
</div>
  );
}
