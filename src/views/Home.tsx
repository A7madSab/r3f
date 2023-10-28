import { FC } from "react"
import { Link } from "react-router-dom"

const Home: FC = () => {
  return (
    <div>
      <Link to="/box">Box</Link>
      <Link to="/car">Car</Link>
      <Link to="/meteor">Meteor</Link>
      <Link to="/avatar">Avatar</Link>
    </div>
  )
}

export default Home
