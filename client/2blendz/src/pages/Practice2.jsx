import blendz from '../assets/images/naroBlends.jpeg'
import jesus from '../assets/images/jesus.jpg'

const Practice2 = () => {
  return (
    <div className='bg-black font-poppins'>
      <div className=' flex flex-col mt-3'>
        <div className='text-white bg-slate-500 flex justify-center space-x-6'>
          {/* <div className=''>SignUp</div>
          <div className=''>Merch</div> */}
          <div className=''>SIGNUP</div>
          <div className=''>MERCH</div>
        </div>
        <div className='flex md:justify-center mt-3'>
          <div className=''>
            <img
              alt=''
              src={blendz}
              className='invert object-cover h-3/4 w-96'
            ></img>
          </div>
          <div className=''>
            <img
              alt=''
              src={jesus}
              className='object-cover h-96 w-96 rounded-l-full lg:rounded-full md:rounded-full'
            ></img>
          </div>
        </div>
        <div className='mt-3'>
          {/* <div className='text-white flex justify-center font-sans'>
            Get lined up. Feel like a king.
          </div>
          <div className='flex justify-center mt-3'>
            <p className='text-white flex justify-center rounded-full bg-slate-600 w-16'>
              Book
            </p>
          </div> */}
          <div className='text-white flex justify-center'>
            GET LINED UP. FEEL LIKE A KING.
          </div>
          <div className='flex justify-center mt-3'>
            <p className='text-white flex justify-center rounded-full bg-slate-600 w-16'>
              BOOK
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice2
