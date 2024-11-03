
function UserGreeting(props){

    return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in to countinue</h2>);

    // console.log(props.isLoggedIn)

    // if(props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to countinue</h2>
    // }
}

export default UserGreeting