
function Button(){

    const handleClick = (e) => e.target.textContent = "OUCH 🤕";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>) // when we click on a button do this () => prevents instantly calling the function



    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log(`${name}You clicked me ${count} times`)
    //     }else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // }

    // return(<button onClick={() => handleClick('Bro')}>Click me</button>) // when we click on a button do this () => prevents instantly calling the function




    // const handleClick = () => console.log('OUCH!')

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    // return(<button onClick={() => handleClick2('Bro')}>Click me</button>) // when we click on a button do this () => prevents instantly calling the function
}

export default Button