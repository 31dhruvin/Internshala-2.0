import React, {useState } from 'react'
import {useHistory} from "react-router-dom"
import {db} from '../Firebase'
import swal from "sweetalert";
import PlacesAutocomplete, {
    geocodeByAddress
} from 'react-places-autocomplete';

function Employeer(props) {
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
    const [type,setType] = useState("")
    const [description,setDescription] = useState("");
    const onsubmit = (e) =>{
        e.preventDefault();
        db.collection('Employeer').add({
            name:name,
            type:type,
            search_term:search_term,
            email:email,
            description:description,
        }).then(pushed_user => {

            console.log(pushed_user.key);
        })
        .then(() =>{
            swal(
                "Thank You",
                "Your response is submitted",
                "success"
              ).then(function() {
                history.push('/main2')
            });
        })
        .catch(error => {
            swal(error.message, "", "error");
        })
        setName('')
        setType('')
        setEmail('')
        setSearch_term('')
        setDescription('')
    }
    return (
        <div>
            <form className="container contact_div" onSubmit={onsubmit} >
            <div className="container employeer">
            <div className="brand-title">Welcome</div>
            <div className="inputs">
                <label>Name</label>
                <input type="text" placeholder="Company Name" className="emp" id="name" value={name} onChange={(e) => setName(e.target.value)} required  />
                <label>Company Website</label>
                <input type="email" placeholder="example@test.com" className="emp" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
                <label></label>
                    <select name="type" id="type" className="emp" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option>Choose category</option>
                        <option value="Software developer">Software developer</option>
                        <option value="Web development">Web development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                    </select>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={searchhandler}>
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) =>(
                        <>
                        <label>Location</label>
                        <input {...getInputProps({placeholder:"Company name"})} type="text"  className="emp" id="search_term" required  />
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
                <label htmlFor="description" >Description</label>
                    <textarea id="description" placeholder="Brief description*" className="emp" value={description} onChange={(e) => setDescription(e.target.value)} required ></textarea>
                    <button className="btn btn-outline-dark shadow-none mx-auto px-4 mt-3">Submit</button>
            </div>
            </div>
            </form>
        </div>   
    )   
}
export default Employeer
