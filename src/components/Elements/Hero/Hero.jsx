import Button from "../Button/Button"

const Hero = () => {
    return (
        <section className="bg-hero bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col justify-center px-5 py-14 lg:px-11 lg:h-[80vh]">
                <div className="flex flex-col gap-4 w-full max-w-xl">
                    <h1 className="text-2xl font-bold lg:text-5xl text-start text-white">Duty After School</h1>
                    <p className="Hero text-white max-w-lg text-start font-normal text-xs lg:text-lg sm:text-sm md:text-base">
                        Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
                    </p>
                </div>  
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-1 lg:gap-4">
                    <Button variant="bg-start hover:bg-white text-white hover:text-blue-700 rounded-3xl py-1 px-3 lg:py-3 lg:px-6 text-xs lg:text-lg">Mulai</Button>
                    <Button variant="flex gap-2 items-center bg-navbar hover:bg-gray-700 text-white rounded-3xl py-1 px-2 lg:py-3 lg:px-6 text-xs lg:text-lg ml-2"><img src="../assets/information-outline.png" alt="" className="h-4 lg:h-6" />Selengkapnya</Button>
                    <Button variant="bg-transparent hover:bg-blue-700 text-white border rounded-3xl py-2 px-2.5 lg:py-2 lg:px-3 text-xs lg:text-lg font-normal">18+</Button>
                    </div>
                    <img src="../assets/audio-off.png" className="border rounded-3xl py-1 px-1 h-8 lg:py-3 lg:px-3 lg:h-12 cursor-pointer" alt="" />
                </div> 
            </div>
        </section>
    )
}

export default Hero