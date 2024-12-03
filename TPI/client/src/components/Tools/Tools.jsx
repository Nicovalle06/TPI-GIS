import { IoNavigateCircleOutline } from "react-icons/io5";
import { TbDatabaseSearch } from "react-icons/tb";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { TbMapPinPlus } from "react-icons/tb";
import { TbMapPinX } from "react-icons/tb";
import { LiaBroomSolid } from "react-icons/lia";
import { TbPolygon } from "react-icons/tb";
import { TbPolygonOff } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import "./Tools.css";
import { setToFalse, toggleSelectedOption } from "../../redux/features/interactions/interactionsSlice";

const selectOptionIcons = (option) => {
  switch (option) {
    case "navigation":
      return <IoNavigateCircleOutline  className="w-[30px] h-[30px]" />;
    case "measurement":
      return <TfiRulerAlt2  className="w-[30px] h-[30px]" />;
    case "consultation":
      return <TbDatabaseSearch  className="w-[30px] h-[30px]" />;
    case "addMarker":
      return <TbMapPinPlus  className="w-[30px] h-[30px]" />;
    case "removeMarker":
      return <TbMapPinX  className="w-[30px] h-[30px]" />;
    case "addPolygon":
      return <TbPolygon className="w-[30px] h-[30px]" />;
    case "removePolygon":
      return <TbPolygonOff className="w-[30px] h-[30px]" />;
    case "removeAll":
      return <LiaBroomSolid className="w-[30px] h-[30px]" />;
    default:
      return null;
  }
};

function Tools() {
  const options = useSelector((state) => state.interactions.options);
  const dispatch = useDispatch();

  const toggleSelection = (id) => {
    dispatch(toggleSelectedOption(id));
  };

  const onMouseEnter = (id) => {
    // dispatch(toggleSelectedOption(id))
  };

  const onMouseLeave = (id) => {
    // dispatch(setToFalse(id))
  };

  // open and close sidebar

  function openNav() {
    const sideBar = document.getElementById("sidebar");
    sideBar.style.width = "250px";
    const main = document.getElementById("toolbar");
    main.style.display = "250px";

    const openBtn = document.getElementById("open-btn");
    openBtn.style.display = "none";
  }

  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("toolbar").style.marginLeft = "0";
    document.getElementById("open-btn").style.display = "block";
  }

  return (
    <div>
      {/* Sidebar Fijo */}
      <div className="sidebar-fixed">
        <ul>
        {options.map((option, index) => (
          <div
            key={index}
            className={`sidebar-item flex flex-col justify-center items-center tool p-2
            ${option.selected ? "bg-slate-500" : ""}
        `}
            onClick={() => {
              toggleSelection(option.id);
            }}
            onMouseEnter={() => onMouseEnter(option.id)}
            onMouseLeave={() => onMouseLeave(option.id)}
          >
            {selectOptionIcons(option.id)}
            <h3>{option.name}</h3>
          </div>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Tools;
