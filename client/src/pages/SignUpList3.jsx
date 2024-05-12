import { useQuery } from '@apollo/client'
import { GET_NAMES, PUSH_LIST } from '../queries'
import AList from '../components/AList'

const SignUpList3 = () => {
  const LIST3_ID = '663f1da8f1e25a627308adbc'

  const { data, loading2, error2, refetch } = useQuery(GET_NAMES, {
    variables: { id: LIST3_ID },
  })

  if (loading2) return <p>Loading</p>
  if (error2) return <p>Something Went Wrong</p>

  const props = { LIST3_ID, PUSH_LIST, data, refetch }

  return <AList props={props} />
}

export default SignUpList3
