import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import { commentsList } from "../redux/commentSlice";
import { loadingState } from "../redux/loadingSlice";
import { CardSimple } from "./card";
import '../app.css';

export const Ruta1 = () => {
  const loading = useSelector(loadingState);
  const comments = useSelector(commentsList);
  console.log(comments);
  console.log(loading);

  const printCard = (comment) => {
    let commentName = comment.name.substring(0, 20);
    if (comment.name.length > 20) commentName += "...";
    const commentEmail = comment.email;
    let commentBody = comment.body.substring(0, 30);
    if (comment.body.length > 30) commentBody += "...";
    return (
       <CardSimple name={commentName} email={commentEmail} body={commentBody} />
      // <CardSimple name={"commentName"} email={"commentEmail"} body={"commentBody"} />
    );
  };

  return (
    <div>
      <h1>RUTA1...</h1>
      {loading ? (
        comments ? (
          <div>
            {comments.map((coment) => {
              return <div key={coment.id}>{printCard(coment)}</div>;
            })}
          </div>
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
