
import React from 'react'
import {google} from 'google-maps'
function Validation() {
    var input= document.getElementById("search_term");
    var autocomplete = new google.maps.places.Autocomplete(input)

    return (
        <div>
            
        </div>
    )
}

export default Validation

