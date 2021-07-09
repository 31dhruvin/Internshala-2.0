import React from 'react'
import {useHistory} from "react-router-dom"
const Welcome = (props) => {
  
  const history = useHistory()
  const datas=props.datas
  console.log(props,datas)
    return (
      <>
        <div className="main-class">
        <div className="text-body">
          <br />
          <br />
          <div className="bganim">
                <div className="brand-title" style={{marginBottom:"10px",marginTop:"50px",textAlign:"center",color:"white",fontFamily:'cursive' }}>Find & Intern</div><br />
                <h5> <p className="first-p">Everyone wants to be professional. If you know that’s your calling, then you need to intern as much as humanly possible.</p></h5><br />
                <h5> <p className="first-p">Internshala 2.0 will provide you a place to search for 1000's of the internship across your city.</p></h5>
                <br /> 
                <h5> <p className="first-p">Select your role</p></h5>
                <button type="button" onClick={() => history.push('/admin')} className="btn btn-outline-light shadow-none  mr-2" aria-current="page" style={{marginRight:"20px"}}>Admin</button>
                <button type="button" onClick={() => history.push('/employeer')} className="btn btn-outline-light shadow-none  ml-2 px-4" aria-current="page" style={{marginRight:"20px"}}>Employeer</button>
                <button type="button" onClick={() => history.push('/employee')} className="btn btn-outline-light shadow-none  ml-2 px-4" aria-current="page">Employee</button>
                <br/>   
       {/*   <hr /> */} 
       </div>
       
        <div className="text-join">
        <div className="dropdown">
            <button class="btn btn-outline-dark dropdown-toggle-danger shadow-none mt-4" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{letterSpacing:"2px"}}>
              Search by City
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/admin')}>Admin</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/employee')}>Employee</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/employeer')}>Employeer</button></li>      
          </ul>
        </div>
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
        </>
    )
}

export default Welcome
