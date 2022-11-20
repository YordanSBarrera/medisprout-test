import React from "react";
import { useSelector } from "react-redux";
import { Navigate, redirect } from "react-router-dom";
import { commentsList } from "../redux/commentSlice";
import { loadingState } from "../redux/loadingSlice";

// const pasandoDatosACard = (comment) => {
//   let name = comment.name.substring(0, 20);
//   if (comment.name.length > 20) name += "...";
//   const email = comment.email;
//   let body = comment.body.substring(0, 30);
//   if (comment.body.length > 30) body += "...";
//   return <Card name={name} email={email} body={body} />;
// };

export const Ruta1 = () => {
  const loading = useSelector(loadingState);
  const comments = useSelector(commentsList);
  console.log(comments);
  console.log(loading);

 

  return (
    <div>
      <h1>RUTA1...</h1>
      {loading ? (
        comments ? (
          <div>{comments.map((coment)=>{
           return coment.name
          })}</div>
        ) : (
          "error en el redux"
        )
      ) : (
        <Navigate to={"/"} replace={true} />
      )}
      {}
    </div>
  );
};
