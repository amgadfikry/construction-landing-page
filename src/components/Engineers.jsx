import eng1 from '../assets/eng-1.png'
import eng2 from '../assets/eng-2.png'
import eng3 from '../assets/eng-3.png'
import { AiFillStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'

const engList = [
  {
    id: 1,
    img: eng1,
    name: "Chris Evans",
    title: "Michigan, TX",
    phone: "989 - 653 - 2986",
    web: "ChrisEvans@const.com",
  },
  {
    id: 2,
    img: eng2,
    name: "Alison Kiara",
    title: "Michigan, TX",
    phone: "989 - 653 - 2986",
    web: "alisonkiara@const.com",
  },
  {
    id: 3,
    img: eng3,
    name: "Adam Gates",
    title: "Michigan, TX",
    phone: "989 - 653 - 2986",
    web: "adamgates@const.com",
  }
]

function Engineers() {
  return (
    <section className='my-[70px] relative md:before:w-[5px] md:before:h-[25%] before:top-0 before:right-0 before:absolute before:bg-mainC
    before:w-[3px] before:h-[11%]'>

      <div className='container mx-auto px-[10px]' >

        <div className="mb-[50px] ">
          <h3 className='text-[2.2rem] font-bold text-blackC w-[80%] md:w-[65%] mx-auto text-center mb-[20px]'>Our Best Engineers</h3>
          <p className="text-[0.9rem] text-grayC md:w-[80%] md:mx-auto text-center">
            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
          {engList.map(el => {
            return (
              <div key={el.id} className="px-[40px] md:px-[20px] lg:px-[50px] text-center mb-[25px] md:mb-0">
                <div className="flex items-center justify-between mb-[20px]">
                  <AiFillStar size={"1.2rem"} className='text-amber-500 ' />
                  <BsThreeDotsVertical size={"1.2rem"} className='text-blackC' />
                </div>
                <img src={el.img} alt="image of eng" className='mx-auto mb-[10px]' />
                <p className='text-blackC text-[1.2rem] font-semibold' >{el.name}</p>
                <p className='text-grayC text-[0.7rem] mb-[15px]' >{el.title}</p>
                <p className='text-grayC text-[0.8rem] mb-[5px]' >{el.phone}</p>
                <p className='text-mainC text-[0.9rem] ' >{el.web}</p>
              </div>
            )
          })}
        </div>

      </div>

    </section>
  );
}

export default Engineers;