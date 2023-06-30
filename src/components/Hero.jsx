const Hero = () => {
    return (
        <div className="mx-10 space-x-10">
            <div className="grid grid-cols-2 items-center my-10">
                <div>
                    <div className="text-8xl text-[#d9fff9] font-semibold py-3 px-6 my-5">
                        Welcome To <br /><span className="text-[#19685c] font-extrabold">Glassify</span>
                    </div>
                    <span className="text-md italic text-[#047161] my-8 px-2 py-2 glass-text mx-6">Like Our Glass, We treat our clients with care...</span>
                </div>

                <div>
                    <img src='/hero.svg' alt='glassify' width={550}/>
                </div>


            </div>
        </div>
    )
}

export default Hero