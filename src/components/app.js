import React, { Component } from 'react';
import Heroes from './super_hero/heroes';
import MoreHeroes from './super_hero/moreHeroes';
import Villians from './super_hero/villians';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <h1>My favorite Super Heroes are the following:</h1>
     <ol>
       <li>
         <Heroes />
       </li>
       <li>
        <MoreHeroes />
       </li>
      </ol>
      <h1>My favorite Super Villian of all time:</h1>
      <ol>
        <li>
        <Villians />
        </li>  
     </ol>

      </div>
    );
  }
}
