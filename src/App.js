import CommentsList from "./component/commentsList";
import { Routes, Route, redirect } from "react-router-dom";
import Borrar from "./component/borrar.jsx";
import { Ruta1 } from "./component/ruta1";
import { Ruta2 } from "./component/ruta2";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "./redux/commentSlice";
const App = () => {
  const dispatch = useDispatch();
  const [apiData, setApiData] = useState(null);
  console.log("testing");

  // useEffect(() => {
  //   //  IniciandoDatos();
  //   const cargandoAPI = () => {
  //     console.log("INICIANDO DATOS");
  //     fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  //       .then((response) => response.json())
  //       .then((data) => setApiData(addComments(data)));
  //   };
  //   const despacho = () => {
  //     dispatch(addComments(apiData));
  //   };
  //   cargandoAPI();
  //   despacho();
  // }, []);

  return (
    <Routes>     
      <Route exact path="/" element={<Borrar />} />
      <Route exact path="/ruta1" element={<Ruta1 />} />
      <Route exact path="/ruta2/:id" element={<Ruta2 />} />
      <Route exact path="/lista" element={<CommentsList />} />
    </Routes>
  );
};
export default App;
