import Navbar from './Navbar'
import photo from '../assets/main-photo.png'

function Header() {
  return (

    <main className=' container mx-auto pt-[20px] px-[10px] relative'>

      <Navbar />

      <div className="flex flex-col md:flex-row md:items-end ">

        <div className=" order-2 md:order-1 md:w-1/2 ">
          <h1 className='text-blackC text-center md:text-left text-[2.5rem] md:text-[2rem] font-bold mb-5 leading-[1.2] '  >
            <span className='text-mainC'>Masters</span><br />
            Consistency and<br />
            <span className='text-mainC'>Quality</span>
          </h1>
          <p className='text-grayC text-center md:text-left mb-5 text-[0.8rem] md:w-[90%]'>
            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
          </p>
          <div className="flex items-center justify-center mb-10 md:justify-start">
            <button className='btn-bg w-[8.5rem] mr-5' >Explore</button>
            <button className='btn-trans w-[8.5rem]'>Contact Us</button>
          </div>
          <div className="flex items-center justify-center space-x-6 md:justify-around">
            <div className="">
              <p className='text-blackC font-semibold text-[1.1rem] mb-1 relative half-circle before:border-l-orangeC before:border-t-orangeC'>
                25,356
              </p>
              <p className='text-grayC font-light text-[0.7rem] '>Projects Done</p>
            </div>
            <div className="">
              <p className='text-blackC font-semibold text-[1.1rem] mb-1 relative half-circle before:border-l-mainC before:border-t-mainC'>
                15,200
              </p>
              <p className='text-grayC font-light text-[0.7rem] '>Buildings Done</p>
            </div>
            <div className="">
              <p className='text-blackC font-semibold text-[1.1rem] mb-1 relative half-circle before:border-l-greenC before:border-t-greenC'>
                350+
              </p>
              <p className='text-grayC font-light text-[0.7rem] '>Total Employees</p>
            </div>
          </div>
        </div>

        <div className=" order-1 md:order-2 mb-8 md:mb-0 mt-6 md:mt-0 md:w-1/2 md:ml-auto md:pl-5 ">
          <img src={photo} alt="one of building of our projects" className='w-full' />
        </div>

      </div>

    </main >


  );
}

export default Header;