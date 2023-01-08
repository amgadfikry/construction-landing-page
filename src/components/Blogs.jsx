import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'

function Blogs() {
  return (
    <section className='container mx-auto px-[10px]' >

      <div className="text-center mb-[50px]">
        <h3 className='text-blacC text-bold text-[2.5rem] mx-auto w-[80%] md:w-[65%] mb-[20px]'>
          Lattest Blogs
        </h3>
        <p className='text-grayC text-[0.9rem] md:w-[80%] md:mx-auto' >
          Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
      </div>

      <div className="px-[10px] py-[20px] md:px-[30px] h-[780px] sm:h-[880px] overflow-y-scroll md:h-[450px] lg:h-[550px] blog ">


        <div className="flex flex-col md:flex-row mb-[30px] ">
          <article className="rounded-xl text-white bg-cover px-[10px] py-[20px] cursor-pointer mx-[10px] md:min-h-[400px] sm:min-h-[400px]
            text-center flex flex-col justify-center group/art  bg-center mb-[40px] lg:min-h-[500px] basis-full md:basis-1/2  min-h-[350px] "
            style={{ backgroundImage: `url(${blog1})` }}>
            <h4 className='font-semibold text-[1.2rem] mb-[15px]' >Unleash Your Creativity</h4>
            <p className="text-[0.8rem] mb-[15px] text-grayC">Nine for Mortal Men, doomed to die, One for</p>
            <div className='mx-auto invisible group-hover/art:visible'>
              <button className='btn-blog ' >Read More</button>
            </div>
          </article>
          <article className="rounded-xl text-white bg-cover px-[10px] py-[20px] cursor-pointer mx-[10px] md:min-h-[400px] sm:min-h-[400px]
            text-center flex flex-col justify-center group/art  bg-center mb-[40px] lg:min-h-[500px] basis-full md:basis-1/2  min-h-[350px] "
            style={{ backgroundImage: `url(${blog2})` }}>
            <h4 className='font-semibold text-[1.2rem] mb-[15px]' >Unleash Your Creativity</h4>
            <p className="text-[0.8rem] mb-[15px] text-grayC">Nine for Mortal Men, doomed to die, One for</p>
            <div className='mx-auto invisible group-hover/art:visible'>
              <button className='btn-blog ' >Read More</button>
            </div>
          </article>
        </div>

        <div className="flex flex-col md:flex-row mb-[30px] ">
          <article className="rounded-xl text-white bg-cover px-[10px] py-[20px] cursor-pointer mx-[10px] md:min-h-[400px] sm:min-h-[400px]
            text-center flex flex-col justify-center group/art  bg-center mb-[40px] lg:min-h-[500px] basis-full md:basis-1/2  min-h-[350px] "
            style={{ backgroundImage: `url(${blog1})` }}>
            <h4 className='font-semibold text-[1.2rem] mb-[15px]' >Unleash Your Creativity</h4>
            <p className="text-[0.8rem] mb-[15px] text-grayC">Nine for Mortal Men, doomed to die, One for</p>
            <div className='mx-auto invisible group-hover/art:visible'>
              <button className='btn-blog ' >Read More</button>
            </div>
          </article>
          <article className="rounded-xl text-white bg-cover px-[10px] py-[20px] cursor-pointer mx-[10px] md:min-h-[400px] sm:min-h-[400px]
            text-center flex flex-col justify-center group/art  bg-center mb-[40px] lg:min-h-[500px] basis-full md:basis-1/2  min-h-[350px] "
            style={{ backgroundImage: `url(${blog2})` }}>
            <h4 className='font-semibold text-[1.2rem] mb-[15px]' >Unleash Your Creativity</h4>
            <p className="text-[0.8rem] mb-[15px] text-grayC">Nine for Mortal Men, doomed to die, One for</p>
            <div className='mx-auto invisible group-hover/art:visible'>
              <button className='btn-blog ' >Read More</button>
            </div>
          </article>
        </div>

        <div className="flex flex-col md:flex-row mb-[30px] ">
          <article className="rounded-xl text-white bg-cover px-[10px] py-[20px] cursor-pointer mx-[10px] md:min-h-[400px] sm:min-h-[400px]
            text-center flex flex-col justify-center group/art  bg-center mb-[40px] lg:min-h-[500px] basis-full md:basis-1/2  min-h-[350px] "
            style={{ backgroundImage: `url(${blog1})` }}>
            <h4 className='font-semibold text-[1.2rem] mb-[15px]' >Unleash Your Creativity</h4>
            <p className="text-[0.8rem] mb-[15px] text-grayC">Nine for Mortal Men, doomed to die, One for</p>
            <div className='mx-auto invisible group-hover/art:visible'>
              <button className='btn-blog ' >Read More</button>
            </div>
          </article>
          <article className="rounded-xl text-white bg-cover px-[10px] py-[20px] cursor-pointer mx-[10px] md:min-h-[400px] sm:min-h-[400px]
            text-center flex flex-col justify-center group/art  bg-center mb-[40px] lg:min-h-[500px] basis-full md:basis-1/2  min-h-[350px] "
            style={{ backgroundImage: `url(${blog2})` }}>
            <h4 className='font-semibold text-[1.2rem] mb-[15px]' >Unleash Your Creativity</h4>
            <p className="text-[0.8rem] mb-[15px] text-grayC">Nine for Mortal Men, doomed to die, One for</p>
            <div className='mx-auto invisible group-hover/art:visible'>
              <button className='btn-blog ' >Read More</button>
            </div>
          </article>
        </div>

      </div>

    </section>
  );
}

export default Blogs;