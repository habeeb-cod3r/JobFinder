import React from 'react'
import TimeAgo from 'timeago-react'
import './index.css'



export default function Card({job}) {
    console.log(job);
  return (
    <div>
        <div className="card">
            <div className='card__image'></div>
              <div className='card__content'> 
                  <p>
                      <TimeAgo datetime={'2022-21-02 08:08:08'} locale='en-US' /> | {job.category}</p>
                    <h2>{job.title}</h2>
                    <p>Scoot</p>
                </div>
                <div className='card__footer'>
                    <p>{job.location}n</p>
                </div>
            
        </div>
    </div>
  )
}
