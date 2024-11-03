// 1. INTERNAL
// 2. MODULES
// 3. INLINE

// import Button from './Button.jsx'; for INTERNAL - great fo global and simple projects
// import Button from './Button/Button.jsx'; for MODULES - for induvidual components that have their own styles
// import Button from './Button.jsx'; for INLINE - good for small components with minimal styling

import Button from './Button.jsx'; 

function App() {

  return (
    <>
      <Button />
    </>
  )
}

export default App

