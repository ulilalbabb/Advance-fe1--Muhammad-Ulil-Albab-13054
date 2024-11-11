import { useEffect, useState } from "react";
import getMovies from "../services/api/movie-endpoint";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const BASE_URL = "https://671c56602c842d92c382a39e.mockapi.io/api/movie/movie";

const Admin = () => {
  const [movies, setMovies] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({
      id: null,
      name: "",
      rating: "",
      series: "",
  });

  useEffect(() => {
    getMovies(setMovies);
  }), [];

  const handelChange = (e) => {
    setCurrentMovie({
      ...currentMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handelDelete = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getMovies(setMovies);
    toast.success("Movie deleted successfully!");
  };

  const handleEdit = (movie) => {
    setEdit(true);
    setCurrentMovie({
      id: movie.id,
      name: movie.name,
      rating: movie.rating,
      series: movie.series,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const movieData = {
      ...currentMovie,
      rating: currentMovie.rating,
    }

    if (currentMovie.id) {
      await axios.put(`${BASE_URL}/${currentMovie.id}`, movieData);
      toast.success("Movie updated successfully!");
    } else {
      await axios.post(BASE_URL, movieData);
      toast.success("Movie added successfully!");
    }

    setCurrentMovie({
      id: null,
      name: "",
      rating: "",
      series: "",
    });
    setEdit(false);
    };

  return (
    <section>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-center">Movie & Series List</h1>
      </div>
      {/* <ToastContainer /> */}
      <form 
      className="flex flex-col items-center w-full "
      onSubmit={handelSubmit}
      >
        <fieldset className="w-96 mx-auto flex flex-col">
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
           className="w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl my-5"
           onClick={() => {setEdit(!edit)}}
           >
            Add Film
            </button>
        </fieldset>
      </form>

      <table className="table-auto border-collapse shadow-md mx-auto mb-5 text-center text-xs lg:text-lg w-full">
        <thead>
          <tr className="bg-green-800 text-white ">
            <th>ID</th>
            <th>Name</th>
            <th>Series</th>
            <th>Rating</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} className="odd:bg-white even:bg-gray-100">
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.series}</td>
              <td>{movie.rating}</td>
              <td>{movie.image}</td>
              <td>
                <div className="flex justify-center gap-1 lg:gap-1">
                  <button
                    className="ml-1 py-1 px-1 lg:py-3 lg:px-3 scale-100 hover:scale-150 duration-300"
                    onClick={() => handleEdit(movie)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-3 lg:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </button>
                  <button
                    className="py-1 px-1  lg:py-3 lg:px-3 scale-100 hover:scale-150 duration-300"
                    onClick={() => handelDelete(movie.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-3 lg:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

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
