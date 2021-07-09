import React from 'react'

const Employeer1 = () => {
    return (
        <div>
        <div id="container">	
	    <div className="product-details">
                <h1>CHRISTMAS TREE</h1>
                <span className="hint-star star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>
			    <div className="control">
                    <button className="btne">
                    <span className="price">$250</span>
                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                <span className="buy">Get now</span>
                </button> 
                </div>   
                </div>
                <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="info">
                    <h2> Description</h2>
                    <ul>
                        <li><strong>Height : </strong>5 Ft </li>
                        <li><strong>Shade : </strong>Olive green</li>
                        <li><strong>Decoration: </strong>balls and bells</li>
                        <li><strong>Material: </strong>Eco-Friendly</li>
                        
                    </ul>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Employeer1
