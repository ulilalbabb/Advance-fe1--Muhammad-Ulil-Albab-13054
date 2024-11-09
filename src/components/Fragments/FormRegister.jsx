import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Button from "../Elements/Button/Button";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        return toast.error("Password and confirm password do not match", {
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

      if (!username || !password || !confirmPassword) {
        return toast.error("Please fill in all fields", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }

      if (password.length < 6) {
        return toast.error("Password must be at least 6 characters", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }

      const userData = { username, password };
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("Registration successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      navigate("/login");

      setUsername("");
      setPassword("");
      setConfirmPassword("");
    };

    return (
      <>
        <form onSubmit={handleRegister} className="w-full">
        <ToastContainer />
          <label htmlFor="">Masukkan Username</label>
          <input 
          type="text" 
          name="username" 
          placeholder="Masukkan Username" 
          className="text-sm mb-3 mt-1 border rounded-3xl w-full py-2 px-3 text-white placeholder: opacity-50 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setUsername(e.target.value)} 
          value={username} />
          <label htmlFor="">Kata Sandi</label>
          <input
            type="password"
            name="password"
            placeholder="Masukkan Kata Sandi"
            className="text-sm mb-3 mt-1 border rounded-3xl w-full py-2 px-3 text-white placeholder: opacity-50 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="off"
            />
          <label htmlFor="">Konfirmasi Kata Sandi</label>
          <input
            type="password"
            name="password"
            placeholder="Masukkan Kata Sandi"
            className="text-sm mb-3 mt-1 border rounded-3xl w-full py-2 px-3 text-white placeholder: opacity-50 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            autoComplete="off"
          />
            <p className="text-sm">
              Sudah punya akun?
              <Link to="/login" className="ml-1 text-white hover:underline font-semibold">
                Masuk
              </Link>
            </p>
            <Button type="submit" variant="w-full bg-button hover:bg-gray-500 py-2 mt-5">
              Daftar
            </Button>
            <p className="text-center text-sm py-3">Atau</p>
            <Button variant="w-full flex justify-center items-center gap-4 hover:bg-gray-500 py-2 border border-gray-500">
              <img src="../assets/google.png" alt="" />
              <p>Daftar dengan Google</p>
            </Button>
        </form>
      </>
    );
  };

export default FormRegister