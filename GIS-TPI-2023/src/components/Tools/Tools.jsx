import { MdAdsClick } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { LiaBroomSolid } from "react-icons/lia";
import { BsNewspaper } from "react-icons/bs";
import "./Tools.css";

function Tools() {
  function openNav() {
    const sideBar = document.getElementById("sidebar")
    sideBar.style.width = "250px";
    const main = document.getElementById("toolbar")
    main.style.display = "250px";

    const openBtn = document.getElementById("open-btn")
    openBtn.style.display = "none";
  }

  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("toolbar").style.marginLeft = "0";
    document.getElementById("open-btn").style.display = "block";
  }

  return (
    <>
      <div id="toolbar" className="flex justify-center w-[7%]">
        <div id="open-btn" onClick={openNav}>
          ☰
        </div>
      </div>
      <div 
      id="sidebar"
      className="sidebar bg-slate-700">
        <div className="closebtn" >
          <span onClick={closeNav}>

          ×
          </span>
        </div>
        <div className="flex flex-col justify-center items-center tool p-2 mt-10">
          <MdAdsClick className="w-[30px] h-[30px]" />
          <h3>Navegar</h3>
        </div>
        <div className="flex flex-col justify-center items-center tool p-2">
          <TbRulerMeasure className="w-[30px] h-[30px]" />
          <h3>Medir</h3>
        </div>
        <div className="flex flex-col justify-center items-center tool p-2">
          <BsNewspaper className="w-[30px] h-[30px]" />
          <h3>Consultar</h3>
        </div>
        <div className="flex flex-col justify-center items-center tool p-2">
          <LiaBroomSolid className="w-[30px] h-[30px]" />

          <h3>Limpiar</h3>
        </div>
      </div>
    </>
  );
}

export default Tools;
