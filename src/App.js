//import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => console.log(setData(data)));
    SetLoading(false);
   
  }, []);

  return (
    <div className="App">
      { console.log(data)}
      {loading ? (
        "Loading"
      ) : (
        <div>
          {data.map((comment,index) => {
            return (
              <div key={comment.id}>
                <h3>{comment.name}</h3>
                <span>{comment.email}</span>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
