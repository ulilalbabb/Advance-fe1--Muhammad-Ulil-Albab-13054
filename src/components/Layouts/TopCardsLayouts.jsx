import TopCards from "../Fragments/TopCards"
import { useRef, useState } from "react";
import ScrollLeft from "../Elements/Scroll/ScrollLeft";
import ScrollRight from "../Elements/Scroll/ScrollRight";

const TopCardsLayouts = (props) => {
    const { title } = props;
    const TopCards1 = [
        {
            id: 1,
            image: "../assets/image-211.png",
            NewEpisode: "Episode Baru",
        },
        {
            id: 2,
            image: "../assets/image-212.png",
            NewEpisode: "Episode Baru",
        },
        {
            id: 3,
            image: "../assets/image-214.png",
            NewEpisode: "Episode Baru",
        },
        {
            id: 4,
            image: "../assets/image-215.png",
            NewEpisode: "Episode Baru",
        },
        {
            id: 5,
            image: "../assets/image-217.png",
            NewEpisode: "Episode Baru",
        },
        {
            id: 6,
            image: "../assets/image-218.png",
            NewEpisode: "Episode Baru",
        },
        {
            id: 7,
            image: "../assets/image-219.png",
            NewEpisode: "Episode Baru",
        }
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
            {TopCards1.map((TopCards1) => (
              <div key={TopCards1.id}>
                <TopCards image={TopCards1.image} 
                      name={TopCards1.name} 
                      rating={TopCards1.rating} 
                      episode={TopCards1.episode} 
                      id={TopCards1.id} />
              </div>
            ))}
          </div>
          <ScrollLeft handleClickLeft={() => handleScroll(-ITEM)} />
          <ScrollRight handleClickRight={() => handleScroll(ITEM)} />
        </div>
      </div>   
            )
        }


export default TopCardsLayouts