const NewReleaseCards = (props) => {
    const { image } = props
    return (
        <div>
            <div className="relative w-[234px] lg:w-[365px]">
                <div className="relative mt-3">
                    <img src={image} className="rounded-xl w-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NewReleaseCards