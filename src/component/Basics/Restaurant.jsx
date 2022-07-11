import React from "react";
import './style.css';
const Restaurant = () =>{
    return(
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <span className="card-author subtle">Breakfast</span>
                        <h2 className="card-title">Maggi</h2>
                        <span className="card-description subtle">Plain Maggi noodles or one with a sprinkle of grated
                         cheese or dash of finely chopped green chilly is the simplest way to enhance its flavor. 
                         Everyone has their own versions of transforming these instant noodles. You can even enhance
                          it by adding a myriad of colorful vegetables to make Vegetable Maggi
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src="" alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </>
    );
}
export default Restaurant;