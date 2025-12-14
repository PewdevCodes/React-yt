import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
          <div className="card">
        <div>
                  <div className="top">
          <img src={props.logo} alt={`${props.company} company logo`} />
          <button className="save-btn">
            Save <Bookmark size={14} />
          </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.role}</h2>
          <div className='tag'>
            <h4>{props.tags}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
            <div>
              <h3> ${props.payPerHour} hr </h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>


      </div>
  )
}

export default Card
