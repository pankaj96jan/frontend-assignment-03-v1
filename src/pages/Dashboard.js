import { useEffect, useState } from "react";
import "./styles.css"
import Card from "./Card";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate=useNavigate();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "movies",
        language: "hindi",
        genre: "all",
        sort: "voting",
      }),
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="dashboard">
      <h1>Movie List</h1>
      {movies.map((movie,index) => (
        <Card movie={movie} key={index} />
      ))}
    </div>
  );
}

export default Dashboard;
