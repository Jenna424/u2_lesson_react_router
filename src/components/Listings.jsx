import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Listings = (props) => {

  let navigate = useNavigate() // navigate stores function for us

  // const showBoat = (boat) => {
  //   it will append the id to the current URL we're on, '/listings'
  //   navigate(`${boat.id}`)
  // }

  return (
    <div className="boat-grid">
      {props.boats.map((boat) => (
        <Link to={`/listings/${boat.id}`}>
          <div className="boat-card" key={boat.id}>
          {/* <div className="boat-card" onClick={() => showBoat(boat)} key={boat.id}> */}
            <img style={{ display: 'block' }} src={boat.img} alt={boat.name} />
            <h3>{boat.name}</h3>
          </div>
        </Link>
      ))}
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  )
}

export default Listings
