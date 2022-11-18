import { useEffect, useState } from "react";


const CommentsList=()=> {
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
    <div >
      {console.log(data)}
      {loading ? (
        "Loading"
      ) : (
        <div>
          {data.map((comment) => {
            return (
              <div key={comment.id}>
                <h3>
                  {comment.name.substring(0, 20)}
                  {comment.name.length > 20 ? "..." : ""}
                </h3>
                <span>{comment.email}</span>
                <p>
                  {comment.body.substring(0, 30)}
                  {comment.body.length > 20 ? "..." : ""}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CommentsList;
