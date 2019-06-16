import React from 'react';
import Routes from './routes'
import 'materialize-css/dist/css/materialize.css'
import { GlobaStyle } from './stylesGlobal'

function App() {
  return (
    <div className="App">
      <GlobaStyle />
      <Routes />
    </div>
  )
}

export default App;
