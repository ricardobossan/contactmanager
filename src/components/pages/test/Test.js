import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.id
        })
      );
  }

  /*
  componentWillMount() {
    console.log('componentWillMount...');
  }

  componentDidUpdate() {
    console.log('componentWillMount...');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }
 */

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1 className="">{title}</h1>
        <p className="">{body}</p>
      </div>
    );
  }
}

export default Test;
