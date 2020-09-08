import React, {Component} from 'react';
import NumberConverterForm from './NumberConverterForm';

class App extends Component {
  
  state = {result: ''}

  handleSave = (numberToConvert: string) => {
    var number = parseFloat(numberToConvert);
    var displayResult = number.toLocaleString('fr-FR', {minimumFractionDigits: 2}).replace(',','.')
    this.setState({result: displayResult});
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