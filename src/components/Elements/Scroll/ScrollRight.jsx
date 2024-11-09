const ScrollRight = (props) => {
        const { handleClickRight, variant } = props;
    
        return (
            <img
                src="../assets/right-arrow.png"
                className="bg-slate-700 hover:bg-slate-500 cursor-pointer border rounded-full p-2 absolute right-2 top-1/2 lg:w-13 lg:right-7 lg:top-[55%]"
                onClick={handleClickRight}
                alt=""
            />
        );
    };
    
    export default ScrollRight;