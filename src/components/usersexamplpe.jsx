import React, { useEffect, useState } from "react";
import axios from "axios";

function Appuser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Handle the response data
        setData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fetch Data with Axios in React</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Appuser;
