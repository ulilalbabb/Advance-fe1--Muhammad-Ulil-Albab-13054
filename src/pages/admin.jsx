import { useEffect, useState } from "react";
import getMovies from "../services/api/movie-endpoint";

const BASE_URL = "https://671c56602c842d92c382a39e.mockapi.io/api/movie/movie";

const Admin = () => {
  const [movies, setMovies] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({
      id: null,
      name: "",
      series: "",
      rating: "",
      image: "",

  });

  useEffect(() => {
    getMovies(setMovies);
  });

  const handelChange = (e) => {
    setCurrentMovie({
      ...currentMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(currentMovie);
    };


      

  return (
    <section>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-center">Movie & Series List</h1>
      </div>

      <form 
      className="flex flex-col items-center"
      onSubmit={handelSubmit}
      >
        <fieldset className="w-96 mx-auto flex flex-col ">
          <label htmlFor="name">Name</label>
          <input 
          type="text" 
          name="name" 
          id="name" 
          className="border rounded-3xl w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          placeholder="Add name fim"
          value={currentMovie.name}
          onChange={handelChange}
          />
          <label htmlFor="">Series</label>
          <input 
          type="text"
          name="series"
          id="series"
          className="border rounded-3xl w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Add series film"
          onChange={handelChange}
           />
          {/* <label htmlFor="">Rating</label>
          <input 
          type="number"
          name="rating"
          id="rating"
          className="border rounded-3xl w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Add rating film"
          value={currentMovie.rating}
          onChange={handelChange}
           /> */}
          {/* <label htmlFor="">Premium</label>
          <div className="flex gap-2">
          <input 
          type="radio"
          name="premium"
          id="premium"
          value="true"
           />
           <span>Yes</span>
          <input 
          type="radio"
          name="premium"
          id="premium"
          value="false"
           />
           <span>No</span>
          </div> */}
          <label htmlFor="">Rating</label>
          <input 
          type="number"
          name="rating"
          id="rating"
          className="border rounded-3xl w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Add rating film"
          onChange={handelChange}
           />

           <button 
           type="submit"
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl my-5"
           >
            Add Film
            </button>
        </fieldset>
      </form>

      <table className="table-auto border-collapse w-full shadow-md mx-auto mb-5 text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Series</th>
            <th>Rating</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.series === "movie" ? "Yes" : "null"}</td>
              <td>{movie.rating}</td>
              <td>{movie.image}</td>
              <td>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl"
                    onClick={() => setEdit(true)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-3xl"
                    onClick={() => setEdit(true)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Admin;
