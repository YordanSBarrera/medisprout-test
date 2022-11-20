import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addComments } from "../redux/commentSlice";
import { loadingOff, loadingOn, loadingState } from "../redux/loadingSlice";

const AuxLoad = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingState);
  const changeloadingOn = () => {
    dispatch(loadingOn());
    console.log(loading);
  };
  const changeloadingOff = () => {
    dispatch(loadingOff());
    console.log(loading);
  };

  console.log(useSelector((state) => state.comments));
  console.log("pg Prueba");
  console.log(loading);

  /***cargando los datos  */

  useEffect(() => {
    dispatch(loadingOff());
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => {
        dispatch(addComments(data));
        dispatch(loadingOn());
      });
  }, []);
  /******* */
  return (
    <div className="container">
      <div className="loading">
        Loading...{loading ? <Navigate to="/ruta1" /> : "Loading..."}
      </div>
      <Button variant="contained" href="/ruta1">
        Ruta1
      </Button>
      <Button variant="contained" href="/ruta2">
        Ruta2
      </Button>
      <Button variant="succes" onClick={changeloadingOn}>
        loadingOn
      </Button>
      <Button variant="succes" onClick={changeloadingOff}>
        loadingOff
      </Button>
    </div>
  );
};
export default AuxLoad;
