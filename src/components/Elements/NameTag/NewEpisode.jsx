const NewEpisode = (props) => {
    const { variant, children } = props;
    return (
        <h1 className={`${variant} rounded-3xl text-white font-md text-sm lg:text-lg text-center p-2 absolute top-2 left-2`}>{children}</h1>
    )
}

export default NewEpisode