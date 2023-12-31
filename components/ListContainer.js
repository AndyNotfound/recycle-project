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
            <button
                onClick={toggleList}
                className="h-8 w-8 rounded-full overflow-hidden mr-4"
            >
                {session?.user?.image ? (
                    <img src={session.user.image} alt="User Profile" />
                ) : (
                    <div className="bg-gray-400 w-full h-full"></div>
                )}
            </button>

            {isVisible && (
                <div className="absolute w-32 -left-24 top-12 p-2 bg-white border border-gray-300 rounded">
                    <ul className="flex flex-col justify-center items-start">
                        <li className="py-2 flex">
                            <img src="/assets/listcon1.svg" className="pr-2" />
                            <a href="/personal_info" className="cursor-pointer text-blue-500">
                                Personal Info
                            </a>
                        </li>
                        <li className="py-2 flex">
                            <img src="/assets/listcon2.svg" className="pr-2" />
                            <a href="/poin" className="cursor-pointer text-blue-500">
                                Poin
                            </a>
                        </li>
                        <li className="py-2 flex">
                            <img src="/assets/listcon3.svg" className="pr-2" />
                            <a onClick={() => signOut()} className="cursor-pointer text-blue-500">
                                Log Out
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
