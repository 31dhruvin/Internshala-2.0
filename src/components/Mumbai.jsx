import React from 'react'
import {useState } from 'react'
function Mumbai() {
    const[datas,setDatas]=useState([
        {name: "Company 1",description:"Best place for frontend developer",type:"front-end",id: 1},
        {name: "Company 2",description:"Best place for software developer",type:"Senior Developer",id: 2},
        ])
    return (
        <div>
            <div>
            <div className="heading-container">
                   </div>
                {
                    datas.map((props)=>(
                        <div className="main-container">
                        <div className="card-container" style={{cursor:"pointer"}}>
                        <div className="card card-1">
                        <p className="card__exit" style={{color:"black"}}><h2>{props.name}</h2></p>
                        <h3 className="card__title"style={{color:"black"}}>{props.description}</h3>
                        <h5 className="card__title"style={{color:"black"}}>{props.type}</h5>
                        </div>
                        </div>
                        </div>
                    ))
                }
                
        </div>
        </div>
    )
}

export default Mumbai
