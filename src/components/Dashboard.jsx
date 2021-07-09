import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {db} from "../Firebase"
const Dashboard = (update) => {
  const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [search_term,setSearch_term] = useState("");
    const [type,setType] = useState("")
    const [description,setDescription] = useState("");
  const [render,setRender] = useState([])
    useEffect(() => {
        db.collection("Employeer").onSnapshot(snapshot =>{
            setRender(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    const onUpdate = (newname) =>{
      db.collection("Employeer").doc(newname.id).set(newname).catch((error)=>{
        console.error(error)
      })
    }
    const onDelete = () =>{
      db.collection("Employeer").doc("QjkK9jfREMOBhW6lROXW").delete().catch((error)=>{
        console.error(error)
      })
    }
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
                        <p className="card__apply"style={{color:"black"}}><button className="btn btn-outline-dark dropdown-toggle-danger shadow-none mt-4" onClick={onDelete}><a><span>Delete</span></a></button>{" "}{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a><span>Edit</span></a></p>
                        </div>
                        </div>
                        </div>
                    ))
                }
                
        </div>
    )
}

export default Dashboard
