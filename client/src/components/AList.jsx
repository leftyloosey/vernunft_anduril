import { useState } from 'react'
import { useMutation } from '@apollo/client'

const AList = ({ id, props }) => {
  const { data, PUSH_LIST, refetch } = props
  const [name, setName] = useState('')

  const [mutateFunction, { loading, error }] = useMutation(PUSH_LIST, {
    variables: { names: name, id: id },
  })
  const onSubmit = (e) => {
    e.preventDefault()
    mutateFunction()
    refetch()
  }
  if (loading) return <p>Loading</p>
  if (error) return <p>Something Went Wrong</p>
  return (
    <div className=''>
      <p className='text-white'>{data?.getNames?.listName}</p>

      <form onSubmit={onSubmit}>
        <div className=''>
          <label className='form-label text-white'>Name</label>
          <input
            type='text'
            className='form-control text-black'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' data-bs-dismiss='modal' className='bg-slate-600'>
          Submit
        </button>
      </form>
      {/* <p className='text-white'>{other}</p> */}
      {data?.getNames?.names && (
        <div className='text-white'>
          {data?.getNames?.names?.map((e, index) => (
            <li key={index} className='text-white'>
              {e}
            </li>
          ))}
        </div>
      )}
    </div>
  )
}

export default AList
