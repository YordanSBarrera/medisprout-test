import CommentsList from "./component/commentsList";
import {Routes,Route} from 'react-router-dom';
import Borrar from "./component/borrar.jsx";
const App = () => {
  console.log("testing");
  return (
    <Routes>
      <Route path="/" element={<Borrar />} />
      <Route exact path="/lista" element={<CommentsList />} />
      {/* <Route exact path="/test" element={<>} /> */}
    </Routes>
  );
};
export default App;
