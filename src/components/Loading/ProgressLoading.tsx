import loadingAnimation from "../../assets/loading.gif"


function ProgressLoading() {
    return (
        <div className='w-full z-10 grid place-items-center fixed top-0 left-0 h-full bg-[#0000005f] backdrop-blur-md text-5xl text-white'>
            <img src={loadingAnimation} alt="" />
        </div>
    )
}

export default ProgressLoading
