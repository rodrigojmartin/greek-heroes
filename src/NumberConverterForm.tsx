import * as React from 'react';

interface NumberConverterProps {
    onSave: (numberToConvert: string) => void;
}

interface NumberConverterState {
    numberToConvert: string;
}

export default class NumberConverterForm extends React.Component<NumberConverterProps, NumberConverterState> {
    constructor(props) {
        super(props);
        this.state = {
            numberToConvert: '',
        };
    }

    handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ numberToConvert: event.target.value });
    };

    handleOnSave = () => {
        const { numberToConvert } = this.state;
        const { onSave } = this.props;
        onSave(numberToConvert);
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    data-test="inputNumber"
                    onChange={this.handleTextChange}
                    value={this.state.numberToConvert}
                />
                <button data-test="submitButton" onClick={this.handleOnSave} />
            </div>
        );
    }
}
