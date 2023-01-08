import logo from '../assets/main-logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

function Navbar() {

  const [menu, setMenu] = useState(false)

  const handleOpenMenu = () => {
    setMenu(true)
  }

  const handleCloseMenu = () => {
    setMenu(false)
  }

  return (

    <nav className=" flex items-center px-[10px] absolute top-[20px] left-0 w-full ">

      <div className=" mr-auto ">
        <img src={logo} alt="logo of company" />
      </div>

      <div className=' space-x-1 text-blackC font-semibold hidden md:block text-[0.8rem]' >
        <a href="#" className=' px-3 py-1.5 hover:bg-mainC hover:text-white rounded-md transition-all duration-[300ms]' >Home</a>
        <a href="#" className=' px-3 py-1.5 hover:bg-mainC hover:text-white rounded-md transition-all duration-[300ms]' >About Us</a>
        <a href="#" className=' px-3 py-1.5 hover:bg-mainC hover:text-white rounded-md transition-all duration-[300ms]' >Services</a>
        <a href="#" className=' px-3 py-1.5 hover:bg-mainC hover:text-white rounded-md transition-all duration-[300ms]' >Project</a>
      </div>

      <div className=' md:hidden ' >
        <AiOutlineMenu size={30} className=" cursor-pointer" onClick={handleOpenMenu} />
      </div>

      <div className={`md:hidden absolute top-[-20px] right-0 flex flex-col bg-mainC py-[20px] text-center translate-y-[-100%]
          transition-all duration-500 text-[1.5rem] w-full ${menu && "translate-y-[0%]"}`} >
        <AiOutlineClose size={30}
          className="text-white cursor-pointer mx-auto mb-3 transition-all duration-300 hover:scale-[1.2]"
          onClick={handleCloseMenu} />
        <a href="#" className=' px-16 py-2 text-white hover:text-black hover:bg-white transition-all duration-[300ms]' >Home</a>
        <a href="#" className=' px-16 py-2 text-white hover:text-black hover:bg-white transition-all duration-[300ms]' >About Us</a>
        <a href="#" className=' px-16 py-2 text-white hover:text-black hover:bg-white transition-all duration-[300ms]' >Services</a>
        <a href="#" className=' px-16 py-2 text-white hover:text-black hover:bg-white transition-all duration-[300ms]' >Project</a>
      </div>

    </nav>
  );
}

export default Navbar;