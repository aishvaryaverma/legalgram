import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alert';
import { Message } from "semantic-ui-react";

const Alert = ({ alerts, removeAlert }) => (
    <div className="alert-wrap">
        {
            alerts !== null && alerts.length > 0 && alerts.map((alert, i) => (
                <Message key={alert.id} className={`message-custom ${alert.alertType}`}>
                    <span className="text">{alert.msg}</span>
                    <span className="close" onClick={e => removeAlert(alert.id)}><i className="fas fa-times"></i></span>
                </Message>
            ))
        }
    </div>
)

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
    alerts: state.alert
})

export default connect(mapStatetoProps, { removeAlert })(Alert);