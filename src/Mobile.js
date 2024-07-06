import React from 'react'
import Mobilelist from './Mobilelist'
import books from './books.json'

export default function Mobile() {
  return (
    <div>
        <h1 style={{marginLeft:"45%"}}>Smart Phones</h1>
        {books.map((ele)=>{
             return(
                <Mobilelist image={ele.image} 
                Title={ele.Title} 
                Price={ele.Price} 
                Button={ele.Button}
                />
             )
        })}
    </div>
  )
}
