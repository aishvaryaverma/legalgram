import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';

class TextValidator extends ValidatorComponent {
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
                <input
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
                {this.errorText()}
            </>
        );
    }
}

export default TextValidator
