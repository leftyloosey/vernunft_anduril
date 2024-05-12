import { useQuery } from '@apollo/client'
import { GET_NAMES, PUSH_LIST, LIST_3_ID } from '../queries'
import AList from '../components/AList'

const SignUpList3 = () => {
  const { data, loading, error, refetch } = useQuery(GET_NAMES, {
    variables: { id: LIST_3_ID },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  const props = { PUSH_LIST, data, refetch }

  return <AList id={LIST_3_ID} props={props} />
}

export default SignUpList3
