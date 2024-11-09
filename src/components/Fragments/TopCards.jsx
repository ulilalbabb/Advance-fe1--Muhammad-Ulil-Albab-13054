const TopCards = (props) => {
    const { image } = props
    return (
        <div>
            <div className="relative w-[220px] lg:w-[320px]">
                <div className="relative mt-3">
                    <img src={image} className="rounded-xl w-full " alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopCards