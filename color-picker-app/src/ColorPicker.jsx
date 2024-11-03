import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF');

    function handleColorChange(event){
        setColor(event.target.value);
    }


    return ( 
            
            <div className="color-picker-container" >

                <h1>Color Picker</h1>  

                <p className="color-display" style={{backgroundColor: color}}>{color}</p>

                <div className="color-picker">
                    <label for="colorpicker">Select a color: </label>
                    <input type="color" id="colorpicker" value={color} onChange={handleColorChange}/> 
                </div>
            </div>

            
        
    
    )
}

export default ColorPicker