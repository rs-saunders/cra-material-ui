import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

import logo from './logo.svg';
import './App.css';

function handleTouchTap() {
    alert('onClick triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

class DrawerOpenExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onClick={this.handleToggle}
                />
                <Drawer width={200} open={this.state.open} >
                    <AppBar title="AppBar" />
                </Drawer>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
              <AppBar
                  title={<span style={styles.title}>Title</span>}
                  onTitleTouchTap={handleTouchTap}
                  iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                  iconElementRight={<FlatButton label="Save" />}
              />

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
              <DrawerOpenExample/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
