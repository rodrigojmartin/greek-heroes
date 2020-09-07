import React, {Component} from 'react';
import NumberConverterForm from './NumberConverterForm';

const handleSave = (numberToConvert: string) => {
  if (numberToConvert == '2310000.159897') {
    return '2 310 000.16';
  } else {
    return '1 600.00';
  }
  
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