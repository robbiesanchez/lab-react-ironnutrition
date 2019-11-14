import React from 'react';
import 'bulma/css/bulma.css';
import OneSingleFood from './OneSingleFood';
import './OneSingleFood.css';
import './Popup.css';  
import 'bootstrap/dist/css/bootstrap.css';


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
            newSearch: "",
            searchValues: props.food
        }
    }


    displayFood = () => {
            return this.state.searchValues.map((eachFood,i)=>{
                return(
                <div id="single-food">
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
            console.log(this.state.newFood)})


        return (
            this.state.searchValues.unshift(this.state.newFood)
        )

    }
    
    todayFood () {

        return (
        
        <div id="single-food">
        <h2>Today's Food</h2>
        </div>

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
        

    
    setSearchFood = (e) =>{

       
               
        let filteredFoods = [...this.state.searchValues].filter(eachFood => {
            return eachFood.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        
        this.setState({
            "newSearch": e.target.value,
            "searchValues": filteredFoods
            }, ()=>{
            console.log(this.state)
            })    
        
        e.preventDefault();

    }


    render () {

        return (
            <div>
            <form className="form" onSubmit= {this.searchFood}>
            <input type="text" value={this.props.food.name} name="newSearch" onChange={this.setSearchFood}></input>
            </form> <button>Search</button>
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                    {this.displayFood()}
                    </div>               
                    <div className="col-6">
                    {this.todayFood()}
                    </div>             
                </div>
            </div>
        </div>
        )        
    }
}

export default FoodBox