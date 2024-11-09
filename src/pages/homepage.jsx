import Navbar from "../components/Elements/Navbar/Navbar";
import Hero from "../components/Elements/Hero/Hero";
import Footer from "../components/Elements/Footer/Footer";
import CardLayouts from "../components/Layouts/CardLayouts";
import TopCardsLayouts from "../components/Layouts/TopCardsLayouts";
import TrendingCardsLayouts from "../components/Layouts/TrendingCardsLayouts";
import NewReleaseCardsLayouts from "../components/Layouts/NewReleaseCardsLayouts";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardLayouts title="Melanjutkan Tonton Film"/>
            <TopCardsLayouts title="Top Rating Film dan Series Hari ini"/>
            <TrendingCardsLayouts title="Film Trending"/>
            <NewReleaseCardsLayouts title="Rilis Terbaru"/>
            <Footer />
        </>       
    )
}

export default Homepage