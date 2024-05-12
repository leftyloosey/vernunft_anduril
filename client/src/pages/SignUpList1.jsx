import { useQuery } from '@apollo/client'
import { GET_NAMES, PUSH_LIST, LIST_1_ID } from '../queries'
import AList from '../components/AList'

const SignUpList1 = () => {
  const { data, loading, error, refetch } = useQuery(GET_NAMES, {
    variables: { id: LIST_1_ID },
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>Something Went Wrong</p>

  const props = { PUSH_LIST, data, refetch }

  return <AList id={LIST_1_ID} props={props} />
}

export default SignUpList1
