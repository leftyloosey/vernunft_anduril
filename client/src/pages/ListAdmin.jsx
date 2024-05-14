import { useQuery } from '@apollo/client'
import { GET_LISTS, LIST_1_ID, LIST_2_ID, LIST_3_ID } from '../queries'
import AColumn from '../components/AColumn'
import QrCode from '../components/QrCode'

const ListAdmin = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTS)

  if (loading) return <p>Loading</p>
  if (error) return <p>Something Went Wrong</p>
  return (
    <div className='flex flex-row justify-around gap-24'>
      <div className='flex flex-col'>
        <QrCode listAddress={'http://localhost:3000/signuplist1'} />
        <AColumn
          id={LIST_1_ID}
          data={data?.listList[0]?.names}
          listName={data?.listList[0]?.listName}
          refetch={refetch}
        />
      </div>

      <div className='flex flex-col'>
        <QrCode listAddress={'http://localhost:3000/signuplist2'} />
        <AColumn
          id={LIST_2_ID}
          data={data?.listList[1]?.names}
          listName={data?.listList[1]?.listName}
          refetch={refetch}
        />
      </div>

      <div className='flex flex-col'>
        <QrCode listAddress={'http://localhost:3000/signuplist3'} />
        <AColumn
          id={LIST_3_ID}
          data={data?.listList[2]?.names}
          listName={data?.listList[2]?.listName}
          refetch={refetch}
        />
      </div>
    </div>
  )
}

export default ListAdmin
