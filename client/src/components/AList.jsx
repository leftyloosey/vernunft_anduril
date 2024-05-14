import { useState } from 'react'
import { useMutation } from '@apollo/client'

const AList = ({ id, props }) => {
  const { data, PUSH_LIST, refetch } = props
  const [name, setName] = useState('')

  const [mutateFunction, { loading, error }] = useMutation(PUSH_LIST, {
    variables: { names: name, id: id },
  })
  const confirmFunction = () => {
    if (!data?.getNames?.names.includes(name) && name.length > 0) {
      let bool = window.confirm('Confirm ' + name + '?')
      if (bool) {
        mutateFunction()
        setName('')
        refetch()
      } else {
        setName('')
      }
    } else {
      window.alert('Please enter a new, valid name')
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    confirmFunction()
  }
  if (loading) return <p>Loading</p>
  if (error) return <p>Something Went Wrong</p>
  return (
    <div className=''>
      <p className='text-white text-5xl md:text-7xl'>
        {data?.getNames?.listName}
      </p>

      <form onSubmit={onSubmit}>
        <div className='flex flex-row mt-6'>
          <label className='form-label text-white mr-2 text-3xl'>
            <button
              type='submit'
              data-bs-dismiss='modal'
              className='text-white flex justify-center rounded-full bg-slate-600 w-36 h-16 pt-3 font-bold hover:bg-slate-400 hover:text-black'
            >
              Sign up
            </button>
          </label>
          <input
            type='text'
            className='form-control text-black text-5xl ml-2 font-semibold w-64 md:w-80'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      <div className=''>
        {/* <div className='ml-28 pl-2'> */}
        {data?.getNames?.names && (
          <div className='text-lg font-semibold ml-40 mt-7 bg-white w-80 h-96'>
            {data?.getNames?.names?.map((e, index) => (
              <ul key={index} className=''>
                {e}
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AList
