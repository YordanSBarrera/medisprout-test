import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading,SetLoading]=useState(false);
  useEffect(() => {
    SetLoading(true)
    setTimeout(() => {
      setData("Yordan");
    }, 1000);

    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(data => console.log(setData(data)));
  SetLoading(false);
  }, []);

  
  return (
    <div className="App">
      {console.log(data)}
      {loading?"ahflkjahschbuygew":"Cargando"}
      <Button>MaterialUI</Button>
     
    </div>
  );
}

export default App;
