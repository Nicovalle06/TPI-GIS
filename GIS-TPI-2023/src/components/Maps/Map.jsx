import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTarget } from '../../redux/features/map/mapSlice'
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';

import * as ol from 'ol'

const Map = () => {

  const mapRef = useRef()
  const dispatch = useDispatch(); // Obtén la función de despacho desde useDispatch

//   const map = useSelector(store => store.map)
  const mapView = useSelector(store => store.map.mapView);
  const mapTarget = useSelector(store => store.map.target);

  useEffect(() => {
    // Crear la instancia de ol.Map

    const map = new ol.Map({
      view: new ol.View({
        center: [-61, -26],
        zoom: 7.5,
        projection: 'EPSG:4326'
      }),
      target: mapRef.current,
      layers: [
        new TileLayer({
            title: "Base Map",
            source: new TileWMS({
                url: 'https://wms.ign.gob.ar/geoserver/ows',
                params: {
                    LAYERS: 'capabaseargenmap',
                    VERSION: '1.1.1'
                }
            })
        }),
    ],
    });
    // Actualizar el estado con la nueva instancia de ol.Map

    // Limpiar al desmontar el componente
    return () => {
      map.setTarget(null);
      dispatch(setTarget(null));
    };
  }, [dispatch, mapView]);


  return (
    <div className='flex justify-center items-center w-[93%]'>
    <div ref={mapRef} id='ol-map' className='w-[100%] h-[100vh]'>
        {
            // console.log(mapRef)
        }
    </div>
    </div>
  )
}

export default Map
