import Image from "next/image"
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-3 md:px-10 ">
            {/* Left  */}
            <div className="relative h-10 items-center cursor-pointer my-auto flex">
                <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
            </div>


            {/* Mid   */}
            <div>
                <div className="hidden sm:inline-flex items-center border-2 rounded-full py-2 md:shadow-sm justify-evenly">
                    <input type="text" className="flex-grow pl-5 bg-transparent outline-none sm:pr-10 md:pr-14 lg:pr-20 xl:pr-48" placeholder="Start your search" />
                    <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer md:mx-2"/>

                </div>

            </div>

            {/* Right  */}
            <div className="flex space-x-4 items-center justify-end text-gray-600">
                <p className="hidden lg:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="hidden sm:inline-flex h-6 cursor-pointer"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>

            </div>



            
        </header>
    )
}

export default Header
