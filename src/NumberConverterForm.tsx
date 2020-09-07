import * as React from 'react';

interface NumberConverterProps {
    onSave: (numberToConvert) => string;
}

interface NumberConverterState {
    numberToConvert: string;
    result: string;
}

export default class NumberConverterForm extends React.Component<NumberConverterProps, NumberConverterState> {
    
    constructor(props) {
        super(props);
        this.state = {
            numberToConvert: '',
            result: ''
        };
      }

    handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ numberToConvert: event.target.value})
    }

    handleOnSave = () => {
        const { numberToConvert } = this.state
        const { onSave } = this.props
        var processedResult = onSave(numberToConvert)
        this.setState({result: processedResult})
    }

    render () {
        
        return (
          <div>
            <input
                type="text"
                data-test="inputNumber"
                onChange={this.handleTextChange}
                value={this.state.numberToConvert}
                
            />
            <button 
                data-test="submitButton"
                onClick={this.handleOnSave}
            />
            
            <input
                data-test="result"
                value={this.state.result}
            />
            
          </div>
        );
          
    };
};