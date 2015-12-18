import alt from '../libs/alt';
import MyActions from '../actions/MyActions';

class MyStore {
  constructor() {
    this.bindActions(MyActions);

    this.count = 0;
  }

  increment() {
    this.setState({
      count: this.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.count - 1
    });
  }
}

export default alt.createStore(MyStore, 'MyStore');
