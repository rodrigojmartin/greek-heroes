import React, {Component} from 'react';
import NumberConverterForm from './NumberConverterForm';

const handleSave = (numberToConvert: string) => {
  return '2 310 000.16';
}

class App extends Component {
  render() {
    return(
      <div>
        <NumberConverterForm onSave={handleSave}/>
      </div>
    );
  }
}

export default App;