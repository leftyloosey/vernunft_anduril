import { useQuery } from '@apollo/client'
import { GET_LISTS, LIST_1_ID, LIST_2_ID, LIST_3_ID } from '../queries'
import AColumn from '../components/AColumn'

const ListAdmin = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTS)

  if (loading) return <p>Loading</p>
  if (error) return <p>Something Went Wrong</p>
  return (
    <div className='ml-24 flex flex-row gap-24'>
      <AColumn
        id={LIST_1_ID}
        data={data?.listList[0]?.names}
        listName={data?.listList[0]?.listName}
        refetch={refetch}
      />
      <AColumn
        id={LIST_2_ID}
        data={data?.listList[1]?.names}
        listName={data?.listList[1]?.listName}
        refetch={refetch}
      />
      <AColumn
        id={LIST_3_ID}
        data={data?.listList[2]?.names}
        listName={data?.listList[2]?.listName}
        refetch={refetch}
      />
    </div>
  )
}

export default ListAdmin
