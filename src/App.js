import React from 'react';
import {button} from './Button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handler goes here

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
      </div>
    );
  }
}

//add a button
export default{
  title:'click me',
  component:Button,
};

export const Primary =()= > <Button primary>Button/</Button> 
