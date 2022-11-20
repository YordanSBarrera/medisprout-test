import { Button, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { commentsList } from "../redux/commentSlice";
export const Ruta2 = () => {
  const { id } = useParams();
  const comment = useSelector(commentsList).filter(
    (valor) => valor.id == id
  )[0];

  console.log(comment);
  // const a =   comment.filter((valor) =>valor.id == id);
  // console.log(a);

  console.log(id);
  return (
    <div>
      <h1>RUTA2...</h1>
      <div>
        <Paper elevation={12}>
          <h2>Name: {comment.name}</h2>
          <p>Email: {comment.email}</p>
          <p>id: {comment.id}</p>
          <p>PostId: {comment.postid}</p>
          <p>Body: {comment.body}</p>
        </Paper>
      </div>
      <div className="botonSucces">
        {/* No puedo usar la func href: del boton porque me recarga la pag */}
        <Link to={"/ruta1"}>
          <Button variant="contained" color="success">
            Lista de Commentarios
          </Button>
        </Link>
      </div>
    </div>
  );
};
