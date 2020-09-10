import React, {Component} from 'react';
import NumberConverterForm from './NumberConverterForm';
import { convertMoney } from './Utils'

class App extends Component {
  
  state = {result: ''}
  
  handleSave = (numberToConvert: string) => {
    var result = convertMoney(numberToConvert);
    if (result == 'not a number') {
      this.setState({result: 'not a number'});
    } else {
      this.setState({result: result});
    }
  }

  render() {
    return(
      <div>
        <NumberConverterForm onSave={this.handleSave} />
         <p>Result is {this.state.result}</p>
      </div>
    );
  }
}

export default App;