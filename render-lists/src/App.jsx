import List from './List'

function App() {

  const fruits = [{id: 1, name: 'apple', calories: 95}, 
        {id: 2, name: 'orange', calories: 45}, 
        {id: 3, name: 'banana', calories: 105}]

  const vegetabels = [{id: 4, name: 'potatoes', calories: 110}, 
    {id: 5, name: 'cellery', calories: 15}, 
    {id: 6, name: 'corn', calories: 63}]

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruit" />}
      {vegetabels.length > 0 && <List items={vegetabels} category="Vegetabels"/>}
    </>
  )
}

export default App
