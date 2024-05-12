import { useQuery } from '@apollo/client'
import { GET_NAMES, PUSH_LIST } from '../queries'
import AList from '../components/AList'

const SignUpList2 = () => {
  const LIST2_ID = '663f181447b198095739408c'

  const { data, loading2, error2, refetch } = useQuery(GET_NAMES, {
    variables: { id: LIST2_ID },
  })

  if (loading2) return <p>Loading</p>
  if (error2) return <p>Something Went Wrong</p>

  const props = { LIST2_ID, PUSH_LIST, data, refetch }

  return <AList props={props} />
}

export default SignUpList2
