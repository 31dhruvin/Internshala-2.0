import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import {db} from '../Firebase'
import swal from "sweetalert";
import PlacesAutocomplete, {
    geocodeByAddress
} from 'react-places-autocomplete';

function Employee(props) {
    const [address,setAddress] = useState("")
    const searchhandler = async(value) => {
        const results = geocodeByAddress(value)
        console.log(results)
    }
    const history = useHistory()
  const datas=props.datas
  console.log(props,datas)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [search_term,setSearch_term] = useState("");
    const onsubmit = (e) =>{
        e.preventDefault();
        db.collection('Employee').add({
            name:name,
            email:email,
            search_term:search_term,
        })
        .then(() =>{
            swal(
                "Thank You",
                "Your response is submitted",
                "success"
              ).then(function() {
                history.push('/main')
            });
        })
        .catch(error => {
            swal(error.message, "", "error");
        })
        setName('')
        setEmail('')
        setSearch_term('')
    }
    return (
        <div>
            <form className="container contact_div" onSubmit={onsubmit}>
            <div className="container employeer">
            
            <div className="brand-title">Employee</div>
            <div className="inputs">
                <label>Name</label>
                <input type="text" placeholder="Name..." className="emp" id="name" value={name} onChange={(e) => setName(e.target.value)} required  />
                <label>Email</label>
                <input type="email" placeholder="example@test.com" className="emp" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={searchhandler}>
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) =>(
                        <>
                        <label>Location</label>
                        <input {...getInputProps({placeholder:"Enter your location.."})} type="text"  className="emp" id="search_term"   />
                        <div>
                            {loading ? <div> ...Loading</div> : null}
                            {suggestions.map(suggestion => {
                                return(
                                    <div {...getSuggestionItemProps(suggestion)}>
                                        {suggestion.description}
                                        </div>
                                ) 
                            })}
                        </div>
                        </>
                    )}

                </PlacesAutocomplete>
                    <button className="btn btn-outline-dark shadow-none mx-auto px-4 mt-3">Submit</button>
            </div>
            </div>
            </form>
            
        </div>
        
    )
    
}


export default Employee

