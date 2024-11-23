import Tools from "./Tools/Tools";
import "./Home.css";
import Mapa from "./Maps/Map";
import LayersPanel from "./LayersPanel/LayersPanel";

function Home() {
  return (
    <div className="flex flex-row w-[100wh] min-h-[100vh] bg-slate-500">
      <Tools />
      <Mapa />
      <LayersPanel />
    </div>
  );
}

export default Home;
