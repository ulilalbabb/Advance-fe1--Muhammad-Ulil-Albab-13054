import Dropdown from "../Dropdown/Dropdown"

const Navbar = () => {
    return (
        <div className="bg-navbar flex item-center justify-between p-4">
            <div className="flex items-center gap-5 md:gap-10 lg:gap-20 ">
                <a className="flex items-center gap-2 ml-1 lg:ml-10" href="#">
                    <img src="../assets/Vector.png" alt="" className="h-6" />
                    <p className="text-2xl font-bold text-white hidden md:block ">CHILL</p>
                </a>
                <div className="flex text-xs gap-4 lg:gap-12 md:gap-6 sm:text-sm lg:text-lg md:text-xl text-white ">
                    <a href="#" className="hover:underline">Series</a>
                    <a href="#" className="hover:underline">Film</a>
                    <a href="#" className="hover:underline">Daftar Saya</a>
                </div>
            </div>
            <div className="flex justify-center items-center gap-1">
            <img src="../assets/ellipse.png" alt="" className="h-6 md:h-8 lg:h-10"/>
            <Dropdown />
            </div>
        </div>
    )
}

export default Navbar