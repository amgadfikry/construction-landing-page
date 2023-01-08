import map from '../assets/map-photo.png'

function Contact() {
  return (
    <section className="relative my-[80px] before:w-[3px] before:h-[11%] before:top-0 before:left-0 before:absolute before:bg-mainC
      md:before:w-[5px] md:before:h-[20%]">

      <div className="container mx-auto px-[10px]">

        <div className="text-center">
          <h3 className="text-blackC text-[2.5rem] font-bold w-[80%] md:w-[65%] mb-[20px] mx-auto">
            Contact Us
          </h3>
          <p className="text-grayC md:w-[80%] mb-[50px] md:mx-auto">
            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center">
          <form action="" className='md:basis-2/5 px-[10px] mb-[50px] md:mb-0' >
            <label htmlFor="name" className='block text-[1.2rem] text-blackC mb-[5px] px-[5px]' >
              Name
            </label>
            <input type="text" id='name' placeholder='Enter your name'
              className='px-[15px] py-[10px] text-[1.1rem] text-grayC border-solid border-grayC border-[2px] focus:outline-none rounded-lg 
              w-full mb-[30px] focus:border-blackC placeholder:text-[0.8rem]' />
            <label htmlFor="email" className='block text-[1.2rem] text-blackC mb-[5px] px-[5px]'>
              Email
            </label>
            <input type="email" id='email' placeholder='Enter your email'
              className='px-[15px] py-[10px] text-[1.1rem] text-grayC border-solid border-grayC border-[2px] focus:outline-none rounded-lg 
              w-full mb-[30px] focus:border-blackC placeholder:text-[0.8rem]'/>
            <label htmlFor="subject" className='block text-[1.2rem] text-blackC mb-[5px] px-[5px]'>
              Subject
            </label>
            <input type="text" id='subject' placeholder='Subject'
              className='px-[15px] py-[10px] text-[1.1rem] text-grayC border-solid border-grayC border-[2px] focus:outline-none rounded-lg 
              w-full mb-[30px] focus:border-blackC placeholder:text-[0.8rem]'/>
            <label htmlFor="message" className='block text-[1.2rem] text-blackC mb-[5px] px-[5px]'>
              Message
            </label>
            <textarea name="message" id="message" placeholder='Enter your message' rows="5"
              className='px-[15px] py-[10px] text-[1.1rem] text-grayC border-solid border-grayC border-[2px] focus:outline-none rounded-lg 
              w-full mb-[30px] focus:border-blackC placeholder:text-[0.8rem] resize-none'>
            </textarea>
            <button className='btn-bg mx-auto w-[10rem]' >Send Message</button>
          </form>
          <div className="md:basis-3/5">
            <img src={map} alt="map of countries" className='w-full' />
          </div>
        </div>


      </div>

    </section>
  );
}

export default Contact;