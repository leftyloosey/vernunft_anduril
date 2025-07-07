import { useQuery } from '@apollo/client'
import { GET_LISTS, LIST_1_ID, LIST_2_ID, LIST_3_ID } from '../queries'
import AColumn from '../components/AColumn'
import QrCode from '../components/QrCode'
import list1 from '../assets/images/qrcodes/list1.png'
import list2 from '../assets/images/qrcodes/list2.png'
import list3 from '../assets/images/qrcodes/list3.png'

const ListAdmin = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTS)
  console.log(data)
  if (loading) return <p>Loading</p>
  if (error) return <p>Something Went Wrong</p>
  return (
    <div className='flex flex-col md:flex-row md:justify-around gap-24'>
      <div className='flex flex-col'>
        <QrCode
          // listAddress={'https://blendz-a0e7082e8ee7.herokuapp.com/signuplist1'}
          listAddress={list1}
        />
        <AColumn
          id={LIST_1_ID}
          data={data?.listList[0]?.names}
          listName={data?.listList[0]?.listName}
          refetch={refetch}
        />
      </div>

      <div className='flex flex-col'>
        <QrCode
          // listAddress={'https://blendz-a0e7082e8ee7.herokuapp.com/signuplist2'}
          listAddress={list2}
        />
        <AColumn
          id={LIST_2_ID}
          data={data?.listList[1]?.names}
          listName={data?.listList[1]?.listName}
          refetch={refetch}
        />
      </div>

      <div className='flex flex-col'>
        <QrCode
          // listAddress={'https://blendz-a0e7082e8ee7.herokuapp.com/signuplist3'}
          listAddress={list3}
        />
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
