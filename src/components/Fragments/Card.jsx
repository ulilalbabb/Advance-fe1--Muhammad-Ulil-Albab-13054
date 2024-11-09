const Card = (props) => {
    const { name, image, rating } = props
        return (
            <div>
                <div className="relative w-[220px] lg:w-[320px]">
                    <div className="relative mt-3">
                        <img src={image} className="rounded-xl w-full " alt="" />
                        <div className="absolute flex justify-between left-2 lg:left-4 lg:right-4 right-2 bottom-4">
                            <p className="text-md lg:text-xl text-white">{name}</p>
                            <p className="text-md lg:text-xl text-white">&#9733;{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
);
}; 

export default Card