import React from 'react';
import ReactDOM from 'react-dom'


export default class Header extends React.Component{
    render(){
        return <header className="App-header">
          <h1>Application Tracking System</h1>
          <div>
        {"Hello!! "+this.props.user.attributes.email}{
          console.log(this.props.user)
        }
        <button onClick={this.props.signOut}>Sign Out</button>
        </div>
      </header>
    }
}