import Button from "../components/Elements/Button/Button";
import { Link } from "react-router-dom";


const Opening = () => {
    return (
        <section className="bg-homepage bg-cover bg-center text-white my-auto">
            <div className="my-auto font-lato max-w-screen-xl mx-auto px-4 py-auto sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 lg:h-screen">
                    <div className="lg:py-12 my-20 lg:ml-20 ml-0">
                        <p className="text-xl font-normal mb-6">MOVIE STREAMING PLATFORM</p>
                        <h2 className="text-4xl font-bold mb-6">CHILL</h2>
                        <p className="mt-4 text-md font-normal mb-6">
                        Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna akses ke library film dan acara TV yang luas dari 
                        perangkat mereka. Chill menawarkan antarmuka yang ramah pengguna yang memungkinkan pengguna mencari film dan acara TV, dan mulai 
                        menonton secara instan. Chill menawarkan rekomendasi hasil personalisasi berdasarkan kebiasaan menonton pengguna, membantu pengguna 
                        menemukan film dan acara TV baru yang mungkin tidak mereka temukan sebelumnya. Selain itu, Chill juga menawarkan konten orisinal, 
                        termasuk film dan acara TV, yang hanya dapat ditemukan di aplikasi Chill, menjadikannya sumber yang unik dan berharga bagi pengguna.
                        </p>
                        <div className="flex gap-5">
                        <Button 
                            variant="rounded-3xl bg-indigo-600 hover:bg-white hover:text-indigo-600 py-2 px-6 lg:py-3 text-sm">
                            <Link to="/login">
                            Get Started Today
                            </Link>
                        </Button>
                        
                        <Button
                            variant="rounded-3xl bg-indigo-600 hover:bg-white hover:text-indigo-600 py-2 px-6 lg:py-3 text-sm">
                            <Link to="/admin">
                            Admin
                            </Link>
                        </Button>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-[80%] lg:mt-20">
                        <img src="../assets/phone.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Opening