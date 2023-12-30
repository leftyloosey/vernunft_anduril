import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <p>
        <Link to='/signuplist'>SignUp</Link>
      </p>
    </div>
  )
}

export default Home
