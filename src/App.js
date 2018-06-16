import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <div id="header"></div>
       <div className="container">
        <div className="column">
            <InboxPane/>
        </div>
       </div>
     </div>
    );
  }
}
//component of inbox
class InboxPane extends Component{
  render(){
    return(
      <div id="inbox-pane">
      <h1>Inbox</h1>
      <table>
        <thead>
         <tr>
          <th>Chat Received</th>
          <th>Name</th>
          <th>Status</th>
         </tr>
        </thead>
        <tbody>
          <InboxItem/>
        </tbody>
      </table>
      </div>
    );
  }
}
//component of inbox item
class InboxItem  extends Component{
  render(){
    return(
      <tr>
        <td>5pm</td>
        <td>Karan</td>
        <td>Confirmed</td>
      </tr>
    );
  }
}
export default App;
