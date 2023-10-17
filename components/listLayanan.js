import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"


const ListContainer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { data: session } = useSession();

    const toggleList = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="relative inline-block">
            <button className="pr-2"
                onClick={toggleList}
            >
                LAYANAN
            </button>

            {isVisible && (
                <div className="absolute w-32 -left-6 top-10 p-2 bg-white border border-gray-300 rounded">
                    <ul className="flex flex-col justify-center items-start">
                        <li className="py-2 flex">
                            <img src="/assets/listlay1.svg" className="pr-2" />
                            <a href="" className="cursor-pointer text-blue-500">
                                Pick Up
                            </a>
                        </li>
                        <li className="py-2 flex">
                            <img src="/assets/listlay2.svg" className="pr-2" />
                            <a href="" className="cursor-pointer text-blue-500">
                                Drop Off
                            </a>
                        </li>
                        <li className="py-2 flex">
                            <img src="/assets/listlay3.svg" className="pr-2" />
                            <a href="" className="cursor-pointer text-blue-500">
                                Reward
                            </a>
                        </li>
                    </ul>
                </div>
            )
            }
        </div >
    );
};

export default ListContainer;
