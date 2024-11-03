import PropTypes from 'prop-types'

function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>{/*when we send value to component all attributes will be stored inside props -> to access props.name*/}
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No" }</p>{/* ? = if ... first value : else ... second value      booleans not directly diplayed to the DOM*/}
        </div>
    )
    
}


// to check if type for prop is right otherwise emmit console error = debugging, not stop form running
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    iStudent: PropTypes.bool,
}

// adds a default value if not provided
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student