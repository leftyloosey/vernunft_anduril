import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CHANGE_LIST_NAME } from '../queries'

const AColumn = ({ id, data, listName, refetch }) => {
  const [name, setName] = useState('')

  const mutateVars = { id, listName: name }

  const [mutateListName, { loading, error }] = useMutation(CHANGE_LIST_NAME, {
    variables: mutateVars,
    onCompleted: () => refetch(),
  })

  const onSubmit = (e) => {
    e.preventDefault()
    mutateListName()
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <div className='flex flex-col'>
      <p className='text-white'>{listName}</p>
      <form onSubmit={onSubmit}>
        <div className=''>
          <label className='form-label text-white'>New name:</label>
          <input
            type='text'
            className='form-control text-black'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' data-bs-dismiss='modal' className='bg-slate-600'>
          Confirm
        </button>
      </form>
      {data && (
        <div className='text-white'>
          {data.map((e, index) => (
            <li key={index} className='text-white'>
              {e}
            </li>
          ))}
        </div>
      )}
    </div>
  )
}

export default AColumn
