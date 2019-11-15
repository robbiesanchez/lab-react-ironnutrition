import React from 'react';
import 'bulma/css/bulma.css';
// import './OneSingleFood.css'



export default function OneSingleFood(props){

    console.log(props.theFood)
    return(
        <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.theFood.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{props.theFood.name}</strong> <br />
                        <small>{props.theFood.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            defaultValue="1"
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick = {()=>{props.changeStuffFromChild(props.theFood)}}>
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
    )
}