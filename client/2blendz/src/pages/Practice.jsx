import blendz from '../assets/images/naroBlends.jpeg'

const Practice = () => {
  return (
    <div className='bg-black columns-2 h-screen'>
      <div className='bg-indigo-500 h-full'>
        <div className=''>
          <img alt='' src={blendz} className='invert ml-5'></img>
          <p className='text-white'>Book</p>
        </div>
      </div>

      <div className='text-white h-full'>Text TEXT tExT</div>
    </div>
  )
}

export default Practice
