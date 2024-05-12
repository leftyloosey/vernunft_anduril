import { useQuery } from '@apollo/client'
import { GET_LISTS, LIST_1_ID, LIST_2_ID, LIST_3_ID } from '../queries'
import AColumn from '../components/AColumn'

const ListAdmin = () => {
  const { data, loading4, error4, refetch } = useQuery(GET_LISTS)
  return (
    <div className='ml-24 flex flex-row gap-24'>
      <AColumn id={LIST_1_ID} data={data?.listList[0]?.names} />
      <AColumn id={LIST_2_ID} data={data?.listList[1]?.names} />
      <AColumn id={LIST_3_ID} data={data?.listList[2]?.names} />
    </div>
  )
}

export default ListAdmin
