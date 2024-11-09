const ScrollLeft = (props) => {
    const { handleClickLeft, variant } = props

    return (
        <img 
        src="../assets/left-arrow.png" 
        className=" bg-slate-700 hover:bg-slate-500 cursor-pointer border rounded-full p-2 absolute left-2 top-1/2 lg:w-13 lg:left-7 lg:top-[55%]" 
        onClick={handleClickLeft} 
        alt="" />
    )
}

export default ScrollLeft