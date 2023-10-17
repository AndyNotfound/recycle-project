import { useSession, signIn, signOut } from "next-auth/react"
import ListContainer from './ListContainer';

const navbarLogin = () => {
    const { data: session } = useSession()

    return (
        <>
            <nav className="z-40 font-medium h-14 text-xs border flex-no-wrap fixed flex w-full items-center justify-between bg-white dark:bg-neutral-600 lg:flex-wrap lg:justify-start px-8">
                <div className="flex w-full flex-wrap items-center justify-between">
                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init=""
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </button>
                    <div className="bg-cyan-500 max-h-full rounded-full">
                        <a
                            className="text-black transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 text-2xl"
                            href="/"
                            data-te-nav-link-ref=""
                        >
                            <img src="/assets/logo.svg" alt="Logo" className="h-8" />
                        </a>
                    </div>
                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1"
                        data-te-collapse-item=""
                    >
                        <ul
                            className="ml-8 list-style-none flex flex-col pl-0 lg:flex-row"
                            data-te-navbar-nav-ref=""
                        >
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <a
                                    className="text-black transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    href="/layanan"
                                    data-te-nav-link-ref="/service"
                                >
                                    LAYANAN
                                </a>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <a
                                    className="text-black transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/blogs"
                                    data-te-nav-link-ref=""
                                >
                                    BLOG
                                </a>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-0" data-te-nav-item-ref="">
                                <a
                                    className="text-black transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:pl-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/kontak_kami"
                                    data-te-nav-link-ref="contact"
                                >
                                    KONTAK KAMI
                                </a>
                            </li>
                        </ul>
                        <input
                            type="search"
                            class="h-7 relative m-0 block w-20 mx-5 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-xs font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            id="exampleSearch"
                            placeholder="Search Another" />
                        <div className="relative flex items-center">
                            <ListContainer />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbarLogin