import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';

class TextareaValidator extends ValidatorComponent {
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <span className="error">
                {this.getErrorMessage()}
            </span>
        );
    }
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <>
                <textarea {...rest} ref={(r) => { this.input = r; }}></textarea>
                {this.errorText()}
            </>
        );
    }
}

export default TextareaValidator
