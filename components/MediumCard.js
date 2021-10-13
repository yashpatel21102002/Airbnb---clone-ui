import Image from "next/image"

function MediumCard({title , img}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-60 w-60">
                <Image src={img} layout="fill" className="rounded-xl"/>
                
            </div>
            <h1 className="text-xl mt-1 text-gray-800 font-semibold">{title}</h1>

        </div>
    )
}

export default MediumCard
