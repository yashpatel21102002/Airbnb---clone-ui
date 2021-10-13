import Image from "next/image"

function LargeCard({img , title , description, buttonText}) {
    return (
        <section className="relative py-12">
            <div className="relative h-96 min-w-[300px] transition duration-200 hover:scale-[1.02]">
                <Image src={img} layout="fill" objectFit="cover" className=" rounded-2xl cursor-pointer"/>

            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p className="font-semibold">{description}</p>
                <button className="active:scale-95 text-sm font-semibold text-black bg-transparent px-4 py-2 rounded-lg mt-5 border border-black hover:bg-gray-900 hover:text-white">{buttonText}</button>

            </div>
            

            
        </section>
    )
}

export default LargeCard
