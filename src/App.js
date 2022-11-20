import CommentsList from "./component/commentsList";
import { Routes, Route} from "react-router-dom";
import AuxLoad from "./component/auxLoad.jsx";
import { Ruta1 } from "./component/ruta1";
import { Ruta2 } from "./component/ruta2";
const App = () => {


  return (
    <Routes>     
      <Route exact path="/" element={<AuxLoad />} />
      <Route exact path="/ruta1" element={<Ruta1 />} />
      <Route exact path="/ruta2/:id" element={<Ruta2 />} />
      <Route exact path="/lista" element={<CommentsList />} />
      
    </Routes>
  );
};
export default App;
