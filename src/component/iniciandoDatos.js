import { useDispatch } from "react-redux";
import { addComments } from "../redux/commentSlice";

export function IniciandoDatos() {
  const dispatch = useDispatch();
  console.log("INICIANDO DATOS");
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => response.json())
    .then((data) => dispatch(addComments(data)));
}
