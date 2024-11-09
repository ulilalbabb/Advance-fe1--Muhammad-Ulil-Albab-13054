import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
    e.preventDefault();


    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
      if (storedUser.username === username && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/homepage");
      } else {
        toast.error("Invalid username or password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Please register first", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

    return (
       <form action="" onSubmit={handleLogin}>
        <ToastContainer />
        <label htmlFor="">Username</label>
          <input 
          type="text"
          name="username"
          placeholder="Masukkan Username"
          className="text-sm mt-2 mb-5 border rounded-3xl w-full py-2 px-3 text-white placeholder: opacity-50 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setUsername(e.target.value)}
          value={username} />
        <label htmlFor="">Kata Sandi</label>
          <input 
          type="password"
          name="password"
          placeholder="Masukkan Password"
          className="text-sm mt-2 mb-5 border rounded-3xl w-full py-2 px-3 text-white placeholder: opacity-50 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
          
            <div className="flex justify-between text-xs lg:text-sm">
                <p>Belum punya akun? <Link to="/register" className="hover:underline font-semibold">Daftar</Link></p>
                <Link className="hover:underline font-semibold">Lupa Kata Sandi?</Link>
            </div>

           <Button
               type="submit"
               onClick={handleLogin}
               variant="w-full bg-button hover:bg-gray-500 mt-5 rounded-3xl py-2 px-3"
           >
               Login
           </Button>
           
           <p className="text-center my-3 text-sm lg:text-md">Atau</p>
           <Button variant="w-full border border-gray-500 bg-transparent hover:bg-gray-500 rounded-3xl py-2 px-3 flex justify-center items-center gap-3">
               <img src="../assets/google.png" alt="" className="lg:h-5" />
               <p>Masuk dengan Google</p>
           </Button>
       </form>
    );
};

export default FormLogin;