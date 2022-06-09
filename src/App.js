import './App.css';
import CountButton from './Components/CountButton';
// import {useState} from 'react'



const App = () => {
return (
<div className="App">
<div>
<h1>Intro to React</h1>
<CountButton incrementBy={1} buttonStyle={'blue'}/>
<CountButton incrementBy={5} buttonStyle={'green'}/>
</div>
</div>
);
};

export default App;