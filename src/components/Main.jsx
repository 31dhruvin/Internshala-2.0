import React, { useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import {db} from '../Firebase'
const Main = (props) => {
    const history = useHistory()
    const datas=props.datas
    console.log(props,datas)
    const [render,setRender] = useState([])
    useEffect(() => {
        db.collection("Employeer").onSnapshot(snapshot =>{
            setRender(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    return (
        <div>
            <div className="text-join">
            <div className="dropdown">
            <button className="btn btn-outline-dark dropdown-toggle-danger shadow-none mt-4" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{letterSpacing:"2px"}}>
              Search by City
            </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><button className="dropdown-item" type="button" onClick={() => history.push('')}>Bhavnagar</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/pune')}>Pune</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/Mumbai')}>Mumbai</button></li>
            </ul>
            </div>
            <div className="heading-container">
                   </div>
                   </div>
                {
                    render.map((props)=>(
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
    )
}

export default Main
