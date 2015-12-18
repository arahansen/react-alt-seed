import React, {Component} from 'react';
import MyActions from '../actions/MyActions';
import MyStore from '../stores/MyStore';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = MyStore.getState();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    MyStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    MyStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }

  increment() {
    MyActions.increment();
  }

  decrement() {
    MyActions.decrement();
  }
}

export default App;
