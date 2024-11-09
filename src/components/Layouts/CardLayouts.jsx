import Card from "../Fragments/Card";
import ScrollRight from "../Elements/Scroll/ScrollRight";
import ScrollLeft from "../Elements/Scroll/ScrollLeft";
import { useRef, useState } from "react";

const CardLayouts = (props) => {
    const { title } = props;
    const Cards = [{
        id: 1,
        name: "Don't Look Up",
        image: "../assets/dont-look-up.png",
        NewEpisode: "Episode Baru",
        rating: "4.5/5",
    },
    {
        id: 2,
        name: "The Batman",
        image: "../assets/all-of-us-are-dead.png",
        NewEpisode: "Episode Baru",
        rating: "4.2/5",
    },
    {
        id: 3,
        name: "Blue Lock",
        image: "../assets/blue-lock.png",
        NewEpisode: "Episode Baru",
        rating: "4.6/5",
    },
    {
        id: 4,
        name: "A Man Called Otto",
        image: "../assets/a-man-called-otto.png",
        NewEpisode: "Episode Baru",
        rating: "4.4/5",
    },
    {
        id: 5,
        name: "The Batman",
        image: "../assets/all-of-us-are-dead.png",
        NewEpisode: "Episode Baru",
        rating: "4.2/5",
    },
]

const ITEM = 360;
const [position, setPosition] = useState(0);
const containerRef = useRef();

const handleScroll = (scrollAmount) => {
  const newPosition = position + scrollAmount;
  setPosition(newPosition);
  containerRef.current.scrollLeft = newPosition;
};

    return (
      <div className="bg-navbar relative px-2">
      <h1 className="text-xl lg:text-3xl  font-bold text-white ml-6 lg:ml-10">{title}</h1>
      <div className="w-[100%] lg:px-10 mx-auto flex items-center p-4">
        <div ref={containerRef} className="flex gap-5 overflow-x-hidden  scroll-smooth ">
          {Cards.map((Cards) => (
            <div key={Cards.id}>
              <Card image={Cards.image} 
                    name={Cards.name} 
                    rating={Cards.rating} 
                    episode={Cards.episode} 
                    id={Cards.id} />
            </div>
          ))}
        </div>
        <ScrollLeft handleClickLeft={() => handleScroll(-ITEM)} />
        <ScrollRight handleClickRight={() => handleScroll(ITEM)} />
      </div>
    </div>   
          );
        };


export default CardLayouts