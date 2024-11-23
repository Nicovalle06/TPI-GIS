/* 
En Redux Toolkit, el término "slice" se refiere a una porción de la tienda global que se enfoca en un aspecto específico de la aplicación. Un slice contiene la lógica de reducers y actions necesarios para manejar ese aspecto particular de la aplicación.

Por ejemplo, si tu aplicación tiene una función de autenticación, podrías crear un slice para manejar el estado de la autenticación. Este slice contendría los reducers y actions necesarios para manejar el inicio de sesión, el cierre de sesión, el registro de usuarios, etc.

El uso de slices en Redux Toolkit es una forma de organizar el código de tu aplicación de manera más modular y fácil de mantener. Cada slice se puede escribir y probar de manera independiente, lo que permite un desarrollo más rápido y un código más limpio. Además, Redux Toolkit proporciona herramientas para generar automáticamente los reducers y actions básicos para cada slice, lo que reduce la cantidad de código que debes escribir manualmente.
*/


import { createSlice } from "@reduxjs/toolkit";

const initialMapView = {
  center: [-61, -26],
  zoom: 7.5,
  projection: 'EPSG:4326'
};

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    mapView: initialMapView,
    target: null, // Puedes almacenar el target aquí si es necesario
  },
  reducers: {
    showMap: (state, action) => {
      console.log('todo bien');
      console.log(state, action);
    },
    setMapView: (state, action) => {
      state.mapView = action.payload;
    },
    setTarget: (state, action) => {
      state.target = action.payload;
    }
  },
});

export const { showMap, setMapView, setTarget } = mapSlice.actions;

export default mapSlice.reducer;
