const TopEpisode = (props) => {
    const { variant, children } = props;
    return (
        <h1 className={`${variant} text-white rounded-tr-md rounded-bl-md font-md text-xl lg:text-md text-center absolute p2 top-0 rigth-[30px]`}>{children}</h1>
    )
}

export default TopEpisode