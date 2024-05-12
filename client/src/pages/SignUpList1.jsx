import { useQuery } from '@apollo/client'
import { GET_NAMES, PUSH_LIST, LIST_1_ID } from '../queries'
import AList from '../components/AList'

const SignUpList1 = () => {
  const { data, loading2, error2, refetch } = useQuery(GET_NAMES, {
    variables: { id: LIST_1_ID },
  })

  if (loading2) return <p>Loading</p>
  if (error2) return <p>Something Went Wrong</p>

  const props = { LIST_1_ID, PUSH_LIST, data, refetch }

  return <AList props={props} />
}

export default SignUpList1
