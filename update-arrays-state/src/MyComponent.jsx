import React, { useState } from 'react'

function MyComponent(){

    const [foods, setFoods] = useState(['Apple', 'orangle', 'banana'])

    function handleAddFood(){

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(f => [...f, newFood]);// spread operator copies the list as before and adds newFood to it = ['Apple', 'orangle', 'banana', newfood], updater is best practice

    }

    function handleRemoveFood(index){//passing index number so we can work with it
        
        setFoods(foods.filter((_,i) => i !== index));// _ means that the parameter passed to the fuction is ignored
        
    }


    return(
        <>
            <div>
                <h2>List of food</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}{/* render list */}
                </ul>
                <input type="text" id='foodInput' placeholder="enter food name"/>
                <button onClick={handleAddFood}>Add food</button>
            </div>
        </>
    )

}

export default MyComponent