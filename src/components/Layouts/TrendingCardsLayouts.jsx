import TrendingCards from "../Fragments/TrendingCards";
import { useRef, useState } from "react";
import ScrollLeft from "../Elements/Scroll/ScrollLeft";
import ScrollRight from "../Elements/Scroll/ScrollRight";


const TrendingCardsLayouts = (props) => {
    const { title } = props;
    const TrendingCards1 = [
        {
            id: 1,
            image: "../assets/image-221.png",
        },
        {
            id: 2,
            image: "../assets/image-222.png",
        },
        {
            id: 3,
            image: "../assets/image-230.png",
        },
        {
            id: 4,
            image: "../assets/image-234.png",
        },
        {
            id: 5,
            image: "../assets/image-235.png",
        },
    
    ]

const ITEM = 200;
const [position, setPosition] = useState(0);
const containerRef = useRef();

const handleScroll = (scrollAmount) => {
const newPosition = position + scrollAmount;
setPosition(newPosition);
containerRef.current.scrollLeft = newPosition;
};

    return (
        <div className="bg-navbar relative px-2">
        <h1 className="text-xl lg:text-3xl  font-bold text-white text-start ml-6 lg:ml-10">{title}</h1>
        <div className="w-[100%] lg:px-10 mx-auto flex items-center p-4">
          <div ref={containerRef} className="flex gap-5 overflow-x-hidden scroll-smooth ">
            {TrendingCards1.map((TrendingCards1) => (
              <div key={TrendingCards1.id}>
                <TrendingCards image={TrendingCards1.image} 
                      name={TrendingCards1.name} 
                      rating={TrendingCards1.rating} 
                      episode={TrendingCards1.episode} 
                      id={TrendingCards1.id} />
              </div>
            ))}
          </div>
          <ScrollLeft handleClickLeft={() => handleScroll(-ITEM)} />
          <ScrollRight handleClickRight={() => handleScroll(ITEM)} />
        </div>
      </div>   
    )
}
export default TrendingCardsLayouts