import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";

const AuthLayout = (props) => {
    const { title, type} = props;
    return (
    <div className="flex justify-center items-center bg-cover bg-center h-[100vh] bg-login">    
        <div className="bg-form border w-[85%] sm:w-[60%] md:w-[50%] lg:w-[30%] text-white rounded-3xl border-none p-6 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <img src="../assets/Logo.png" alt="" className="mb-6 mx-auto" width={150}/>
            <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
            <p className="text-center text-md mb-5 ">{type === "login" ? "Selamat datang kembali!" : "Selamat datang!"}</p>      
            {type === "login" ? <FormLogin /> : <FormRegister />}
        </div>
    </div>
    )
}

export default AuthLayout