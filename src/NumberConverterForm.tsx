import * as React from 'react';

export default class NumberConverterForm extends React.Component {
    render () {
        return (
          <div>
            <input
                type="text"
                data-test="inputNumber"
            />
            <button
                data-test="submitButton"
            />
            
            <input
                data-test="result"
            />
            
          </div>
        );
          
    };
};