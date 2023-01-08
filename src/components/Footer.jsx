import logo from '../assets/main-logo.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

function Footer() {
  return (
    <>
      <footer className="container mx-auto flex flex-wrap md:flex-nowrap items-start justify-betwwen px-[10px] mb-[20px]">

        <div className="basis-1/2 mb-[50px] md:basis-2/5 px-[10px] text-center md:text-left">
          <img src={logo} alt="logo" className='mx-auto md:mx-0' />
          <p className='text-grayC text-[0.9rem] mt-[30px] mb-[30px] md:w-[70%] ' >
            You’ll find your next Home loan valu you prefer.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-[20px]">
            <img src={facebook} alt="facrbook logo" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer' />
            <img src={twitter} alt="twitter logo" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer' />
            <img src={linkedin} alt="linkedin logo" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer' />
          </div>
        </div>

        <div className="basis-1/2 mb-[50px] md:basis-1/5 px-[10px] text-center md:text-left" >
          <h5 className='font-semibold text-blackC text-[1.2rem] mb-[30px]' >Resources</h5>
          <div className="flex flex-col space-y-[15px]">
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Our Agents</a>
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Member Stories</a>
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Video</a>
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Free Trials</a>
          </div>
        </div>

        <div className="basis-1/2 mb-[50px] md:basis-1/5 px-[10px] text-center md:text-left" >
          <h5 className='font-semibold text-blackC text-[1.2rem] mb-[30px]' >Company</h5>
          <div className="flex flex-col space-y-[15px]">
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Partnerships</a>
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Terms Of Use</a>
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Privacy</a>
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Site Map</a>
          </div>
        </div>

        <div className="basis-1/2 mb-[50px] md:basis-1/5 px-[10px] text-center md:text-left" >
          <h5 className='font-semibold text-blackC text-[1.2rem] mb-[30px]' >Get In Touch</h5>
          <div className="flex flex-col space-y-[15px]">
            <a href="#" className='text-grayC text-[1rem] hover:scale-[1.1] duration-300 transition-all'>Enter Your Email</a>
          </div>
        </div>

      </footer>
      <p className='text-center mb-[5px] text-[0.8rem] text-grayC' >Copyright construction.com, All rights reserved.</p>
    </>
  );
}

export default Footer;