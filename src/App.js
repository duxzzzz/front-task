import React, { Component } from 'react';
import styles from './App.scss';
import Test from './components/Test/Test';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Test text="This is test"/>
      </div>
    );
  }
}

export default App;
