import React from 'react';
import 'bulma/css/bulma.css';
import OneSingleFood from './OneSingleFood';
import Popup from './Popup';
import './Popup.css';  


class FoodBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newFood: {},
            newName: "",
            newCalories: 0,
            newImage: "",
            newQuantity: 0,
            showPopup: false,
        }
    }


    displayFood = () => {
            return this.props.food.map((eachFood,i)=>{
                return(
                <div>
                <OneSingleFood
                 key={i}
                 theFood = {eachFood}
                  />
                </div>
                )
            })
        }

    submitFood = (e) => {
        e.preventDefault();

        let newFoodClone =  {
            name: this.state.newName,
            calories: this.state.newCalories,
            image: this.state.newImage,
        }

        this.setState({
            newFood: newFoodClone
        }, () => {
            console.log(this.state.newFood) })


        return (
            this.props.food.unshift(this.state.newFood)
        )

    }
    

    updateInput = (e) =>{

    this.setState({
        [e.target.name]: e.target.value
        }, ()=>{
        console.log(this.state)
        })            

    }
        
    


    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
        
         }  
        
      


    render () {

        return (
            <div>
            <button onClick={this.togglePopup.bind(this)}> Add Food</button>  
            {this.state.showPopup ? 
                <div>
                <div className='popup'>  
                <form className= "form" onSubmit= {this.submitFood}>
                    <input type="text" value={this.state.newName} name="newName" onChange= {this.updateInput}>
                    </input> <h1>Name</h1>
                    <input type="number" value={this.state.newCalories} name="newCalories" onChange= {this.updateInput}>
                    </input> <h1>Calories</h1>
                    <input type="text" value={this.state.newImage} name="newImage" onChange= {this.updateInput}>
                    </input> <h1>Image</h1>
                    <button className= "close-me" onClick={this.togglePopup.bind(this)}>close me</button>
                    <button onClick= {this.submitFood}>Submit</button>  
                </form>
                </div> 
                </div>  
            : null }   

            
            {this.displayFood()}
            </div>
        )

        
    }
}

export default FoodBox