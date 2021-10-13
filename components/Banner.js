import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
            <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-semibold">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-transparent active:scale-90 transition duration-150 px-8 py-2 shadow-md rounded-full border-2 border-black font-bold my-3 hover:shadow-2xl">I'm flexible</button>
            </div>

                        
        </div>
    )
}

export default Banner
