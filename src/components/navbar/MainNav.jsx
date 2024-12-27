const MainNav = () => {
  return (
    <div className='w-screen '>
        <navbar className ="fixed top-0 w-[100%] h-12 flex items-center justify-evenly bg-black text-lg text-white " >
          <div id="logo">
            <img src = "/images/Rectangle1.png" alt="logo" className="h-8" />
          </div>
          <div className="flex w-[30%] items-center rounded">
            <input 
            type="text" 
            className="w-[85%] text-sm text-black px-2 h-8 bg-white my-2 border-orange-500 border-[1px] placeholder:text-orange-800" placeholder="Search courses here">  
            </input>
            <button id = "Search" className="h-8 w-[10%] flex justify-center items-center rounded-r bg-orange-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            </button>
          </div>
          <div className="flex justify-evenly w-[50%]">
            <button id = "Home" className="text-lg text-white">
              Home
            </button>
            <button id = "About-Us" className="text-lg text-white">
              About Us
            </button>
            <button id = "Blogs" className="text-lg text-white">
              Blogs
            </button>
            <button id = "Gallery" className="text-lg text-white">
              Gallery
            </button>
            <button id = "Contact-Us" className="text-lg text-white">
              Contact Us
            </button>
          </div>
        </navbar>
    </div>
  )
}

export default MainNav