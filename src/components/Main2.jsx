import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {db} from '../Firebase'
const Main2 = () => {
    const [render,setRender] = useState([])
    useEffect(() => {
        db.collection("Employeer").onSnapshot(snapshot =>{
            setRender(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    return (
        <div>
            <div className="heading-container">
                   </div>
                {
                    render.map((props)=>(
                        <div className="main-container">
                        <div className="card-container" style={{cursor:"pointer"}}>
                        <div className="card card-1">
                        <p className="card__exit" style={{color:"black"}}><h2>{props.name}</h2></p>
                        <h3 className="card__title"style={{color:"black"}}>{props.description}</h3>
                        <h5 className="card__title"style={{color:"black"}}>{props.type}</h5>
                        <p className="card__apply"style={{color:"black"}}><Link to="/main2" style={{color:"black"}}>Apply Now </Link></p>
                        </div>
                        </div>
                        </div>
                    ))
                }
                
        </div>
    )
}

export default Main2
