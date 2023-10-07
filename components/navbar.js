const navbar = () => {
    return (
        <div className='fixed font-medium w-full h-14 bg-white flex bg-gray-500 justify-start items-center px-8 text-xs text-zinc-950'>
            <div className="brand w-min p-2 text-2xl">RECYCLE</div>
            <ul className="flex w-auto mx-5">
                <li>LAYANAN</li>
                <li className="mx-5">BLOG</li>
                <li>KONTAK KAMI</li>
            </ul>
            <div className="grow">
                <input type="search" placeholder="Search Another"
                    className="w-full h-7 border border-gray-300 p-2 rounded"
                />
            </div>
            <div className="button-container flex justify-end w-min text-white">
                <button className="flex items-center h-8 px-4 bg-rose-600 rounded mx-5">REGISTER</button>
                <button className="flex items-center h-8 px-4 bg-cyan-400 rounded">LOGIN</button>
            </div>
        </div>
    )
}

export default navbar