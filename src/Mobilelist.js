import React from 'react'
import './Mobilelist.css'


export default function Mobilelist(props) {
    const {image, Title, Price, Button} = props;
  return (
    <div className='main'>
        {console.log(props)}
      <img className='image' src={image}/>
      <div>
      <h2>{Title}</h2>
      <p>{Price}</p>
      <button>{Button}</button>
      </div>
    </div>
  )
}
