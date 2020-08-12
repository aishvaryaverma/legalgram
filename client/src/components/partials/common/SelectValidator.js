import React from 'react';
import Select from 'react-select';
import { ValidatorComponent } from 'react-form-validator-core';

class SelectValidator extends ValidatorComponent {
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
 
    renderValidatorComponent() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <>
				<Select
					{...rest}
					ref={(r) => { this.input = r; }}
				/>
				{this.errorText()}
            </>
        );
    }
}

export default SelectValidator
