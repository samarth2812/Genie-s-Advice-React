import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
   state = {
       advice:''};

    componentDidMount(){
     this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice} = response.data.slip;
            this.setState({advice});
        })
        .catch((error)=>{
           console.log(error);
        });
    }

    render(){
        return (
          
         <div className="app">
            <div className="card">
            {/* <img src="https://img.icons8.com/ultraviolet/40/000000/lamp-of-alladin.png"/> */}
          <h1>Genie's Advice </h1>
          <h2>{this.state.advice}</h2>
          <button className='button' onClick={this.fetchAdvice}><span>Rub the lamp again!!</span></button>
          </div>
          </div>
          
         
          
        );
    }
}

export default App;