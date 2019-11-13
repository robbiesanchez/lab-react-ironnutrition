import React from 'react';
import 'bulma/css/bulma.css';
import OneSingleFood from './OneSingleFood';




class FoodBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newName: "",
            newCalories: 0,
            newImage: "",
            newQuantity: 0,
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



    render () {

        return (
            <div>
                {this.displayFood()}
            </div>
        )

    }

}

export default FoodBox