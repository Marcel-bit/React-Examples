import propTypes from 'prop-types'

function List(props){
    // const fruits = [{id: 1, name: 'apple', calories: 95}, 
    //     {id: 2, name: 'orange', calories: 45}, 
    //     {id: 3, name: 'banana', calories: 105}]

    // // fruits.sort((a, b) => a.name.localeCompare(b.name)) //ALPABETICAL
    // // fruits.sort((a, b) => a.calories - b.calories) //NUMERICAL

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const category = props.category
    const itemList = props.items

    const listItems = itemList.map(item => <li key={item.id}> {item.name}: &nbsp; <b>{item.calories}</b> </li>) // for each fruit in fruits create an li

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>);
}

List.propTypes  = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, name: propTypes.string, calories: propTypes.number})),
}
List.defaultProps = {
    category: "category",
    items: [],
}

export default List