import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CHANGE_LIST_NAME } from '../queries'

const AColumn = ({ id, data }) => {
  const { LIST_Name } = id
  const [name1, setName1] = useState('')

  const mutate1Vars = { id: LIST_Name, listName: name1 }

  const [mutateList1Name, { mutateData1, loading1, error1 }] = useMutation(
    CHANGE_LIST_NAME,
    { variables: mutate1Vars }
  )

  const onSubmit1 = (e) => {
    e.preventDefault()
    mutateList1Name()
  }
  return (
    <div className='flex flex-col'>
      <form onSubmit={onSubmit1}>
        <div className=''>
          <label className='form-label text-white'>Name</label>
          <input
            type='text'
            className='form-control text-black'
            id='name'
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>

        <button type='submit' data-bs-dismiss='modal' className='bg-slate-600'>
          Confirm
        </button>
      </form>
      {data && (
        <div className='text-white'>
          {data.map((e) => (
            <li className='text-white'>{e}</li>
          ))}
        </div>
      )}
    </div>
  )
}

export default AColumn
