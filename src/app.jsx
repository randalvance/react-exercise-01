import React from 'react';
import '../styles/index.scss';
import { HelloWorld } from './components/HelloWorld';
import { Buttonify } from './components/Buttonify';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld greetTarget="Batman" />
        <Buttonify behavior="submit">SEND DATA</Buttonify>
      </div>
    );
  }
}
