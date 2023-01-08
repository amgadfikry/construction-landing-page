import whyPhoto from '../assets/photo-section.png'

function WhyComp() {
  return (

    <section className='container mx-auto px-[10px] ' >

      <div className=" mb-[50px] flex flex-col md:flex-row md:items-center text-center md:text-left ">
        <h3 className='order-1 md:order-2 md:basis-1/2 font-bold text-blackC text-[2rem] md:pl-[20px] mb-[20px] md:mb-0 lg:text-[2.3rem]'>
          Why Choose us for best construction experience
        </h3>
        <div className="order-2 md:order-1 md:basis-1/2 md:pr-[20px]">
          <p className='text-[0.8rem] text-grayC mb-[15px]'>
            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
          </p>
          <button className='btn-bg w-[8rem] mx-auto md:mx-0'>Explore</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center ">
        <div className="md:basis-1/2 mb-[50px] md:mb-0 md:pr-[20px]">
          <img src={whyPhoto} alt="bulid high building" className='w-full' />
        </div>
        <div className="md:basis-1/2 pr-[30px] md:pr-0">
          <div className="flex items-start  py-[20px] md:py-[50px]">
            <p className='font-bold text-[2rem] text-blackC basis-1/4 text-center top-[-0.8rem] relative square before:bg-mainC'>01</p>
            <p className='text-grayC text-[0.8rem] basis-3/4'>
              And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
            </p>
          </div>
          <div className="flex items-start  py-[20px] md:py-[50px]">
            <p className='font-bold text-[2rem] text-blackC basis-1/4 text-center top-[-0.8rem] relative square before:bg-orangeC'>02</p>
            <p className='text-grayC text-[0.8rem] basis-3/4'>
              Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.
            </p>
          </div>
          <div className="flex items-start  py-[20px] md:py-[50px]">
            <p className='font-bold text-[2rem] text-blackC basis-1/4 text-center top-[-0.8rem] relative square before:bg-greenC'>03</p>
            <p className='text-grayC text-[0.8rem] basis-3/4'>
              Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.
            </p>
          </div>
        </div>
      </div>

    </section>

  );
}

export default WhyComp;