import React, { useEffect, useState } from "react";
// import { getStudents } from "../../services/testService";
import utnImage from "../../assets/utn.png";
import "./FrontPage.css";
import PacmanLoader from "react-spinners/PacmanLoader";


export default function FrontPage() {
  const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   getStudents().then((result) => setStudents(result));
  // }, []);

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
      <button className="btn-ingreso px-10 py-4 bg-green-#2C8281 rounded hover:bg-blue-#223094">
        Ingresar
      </button>
    </div>
</div>


    // <div className="w-[30%] mt-5 flex flex-col justify-center items-center subcontainer text-white">
    //   <div className="w-[100%] mb-7">
    //     <div
    //       className="200 flex 
    //         justify-center items-center
    //     "
    //     >
    //       <img
    //         className="
    //             w-[300px] h-[100px]
    //             object-contain
    //         "
    //         src={utnImage}
    //         alt=""
    //       />
    //     </div>
    //     <h2 className="text-center text-[32px] font-extrabold">
    //       Sistemas de Información <br />
    //       Geográficos
    //     </h2>
    //   </div>
    //   <div className="grid grid-cols-2 gap-8">
    //     <div className="w-[100%] mb-4">
    //       <h3 className="font-bold mb-1">Profesores</h3>
    //       <h4>Ing. Ilse Hodapp</h4>
    //       <h4>Ing. Rodrigo Valdes</h4>
    //     </div>
    //     <div className="w-[100%] ">
    //       <h3 className="font-bold mb-1">Alumnos</h3>
    //       {/* {students.map((student) => (
    //         <h4 className="" key={student.students}>
    //           {student.students}
    //         </h4>
    //       ))} */}

    //       <h4>Angeloff, César</h4>
    //       <h4>Di Nubila, Vicente</h4>
    //       <h4>Pallarés Ulises</h4>
    //       <h4>Vallejos Zabala, Nicolás</h4>
    //       <h4>Vera, Cristian</h4>
    //     </div>
    //   </div>
    //   <div className="mt-10">
      
    //   <button class="btn-ingreso" name="button">Ingresar</button>
    //   {/* <PacmanLoader color="#fff" /> */}
    //   </div>
    // </div>
  );
}
