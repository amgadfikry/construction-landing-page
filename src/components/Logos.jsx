import logo1 from '../assets/logo-1.png'
import logo2 from '../assets/logo-2.png'
import logo3 from '../assets/logo-3.png'
import logo4 from '../assets/logo-4.png'
import logo5 from '../assets/logo-5.png'

const logoList = [logo1, logo2, logo3, logo4, logo5]

function Logos() {
  return (

    <section className=" container my-24 xl:my-40 mx-auto px-[10px] flex items-center justify-around ">
      {logoList.map(el => {
        return (
          <img src={el} key={el} alt="logo of partners" className='w-[10%]' />
        )
      })}
    </section>

  );
}

export default Logos;