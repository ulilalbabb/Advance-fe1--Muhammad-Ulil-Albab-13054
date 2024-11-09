const Footer = () => {
    return (
        <footer className="bg-navbar flex flex-col lg:flex-row justify-between p-5 gap-5 text-white">
            <div className="flex flex-col justify-center lg:ml-7">
                <img src="../assets/Logo.png" className="mb-5 w-[40%] h-[40%] lg:w-[65%] lg:h-[25%] md:w-[30%] md:h-[25%]" alt="" />
                <p>@2024 Chill All Rights Reserved</p>
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="font-bold">Genre</h4>
                <img className="lg:hidden sm:block absolute right-5 bottom-[-155%]" src="../assets/arrow-footer.png" alt="" />
                <div className="flex justify-center gap-5">
                    <ul className="list-none hidden lg:block">
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Aksi</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Anak-anak</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Anime</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Britania</a></li>
                    </ul>
                    <ul className="list-none hidden lg:block">
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Drama</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Fantasi Ilmiah</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Kejahatan</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">KDrama</a></li>
                    </ul>
                    <ul className="list-none hidden lg:block">
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Komedi</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Petualangan</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Perang</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Romantis</a></li>
                    </ul>
                    <ul className="list-none hidden lg:block">
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Sains & Alam</a></li>
                        <li className="py-2"><a href="#" className="no-underline hover:underline">Thriller</a></li>
                    </ul>
                </div>
            </div>
            <div className="mr-10">
                <h4 className="font-bold">Bantuan</h4>
                <img src="../assets/arrow-footer.png" alt="" className="lg:hidden sm:block absolute bottom-[-160.5%] right-5 "/>
                <ul className=" list-none hidden lg:block">
                    <li className="py-2"><a href="#" className="no-underline hover:underline">FAQ</a></li>
                    <li className="py-2"><a href="#" className="no-underline hover:underline">Kontak Kami</a></li>
                    <li className="py-2"><a href="#" className="no-underline hover:underline">Privasi</a></li>
                    <li className="py-2"><a href="#" className="no-underline hover:underline">Syarat & Ketentuan</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer