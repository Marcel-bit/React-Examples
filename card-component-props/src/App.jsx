import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>{/*when we send value to component all attributes will be stored inside props -> to access props.name*/}
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student />
      <Student name="Larry"/>
    </>
  )
}

export default App