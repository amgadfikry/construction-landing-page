import open from '../assets/open-qoutes.png'
import close from '../assets/close-qoutes.png'
import photo from "../assets/message-bg.png"

function Message() {
  return (
    <section className="bg-cover" style={{ backgroundImage: `url(${photo})` }}>

      <div className="container mx-auto py-[100px] text-white px-[10px]">

        <h3 className="font-bold text-center text-[2.5rem]">
          Message from CEO
        </h3>
        <div className="mt-[20px]">
          <img src={open} alt="open qoutes" className='' />
          <p className='md:px-[80px]' >
            Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk.
            Last own loud and knew give gay four. Sentiments motionless or principles preference excellence am.
            Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use.
            Chamber reached do he nothing be.<br /><br /><br />
            Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in
            in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as
            explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic.
            Loud wish made on is am as hard. Court so avoid in plate hence. Of received mr breeding
            concerns peculiar securing landlord. Spot to many it four bred soon well to. Or am promotion in no departure abilities.
            Whatever landlord yourself at by pleasure of children be.
          </p>
          <img src={close} alt="open qoutes" className='ml-auto' />
        </div>

      </div>

    </section>
  );
}

export default Message;