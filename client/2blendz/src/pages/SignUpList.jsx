import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

// const login = gql`
//   query ClientList {
//     clientList {
//       phone
//       name
//       email
//       id
//     }
//   }
// `
// const login = gql`
//   query HelloThere {
//     fuck(name: "bobby") {
//       email
//     }
//   }
// `

const login = gql`
  query Fuck($name: String!) {
    fuck(name: $name) {
      email
    }
  }
`

const SignUpList = () => {
  const [name, setName] = useState('')
  const [other, setOther] = useState('fancy pants')
  const { data, refetch } = useQuery(login, {
    enabled: false,
    variables: { name },
  })
  const array = []
  // const onSubmit = (e) => {}
  const onSubmit = (e) => {
    refetch()
    e.preventDefault()
    array.push(name)
    console.log(array)
    console.log(data)
  }

  return (
    <div className=''>
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
      <p className='text-white'>{other}</p>
    </div>
  )
}

export default SignUpList
