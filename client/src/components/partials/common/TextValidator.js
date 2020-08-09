import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import { Input } from "semantic-ui-react";

class TextValidator extends ValidatorComponent {
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div className="ui pointing top prompt label" role="alert" aria-atomic="true">
                {this.getErrorMessage()}
            </div>
        );
    }
 
    renderValidatorComponent() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <>
                <Input
                    className="input"
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
                {this.errorText()}
            </>
        );
    }
}

export default TextValidator
