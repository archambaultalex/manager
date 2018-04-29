import React, { Component } from 'react';
import { Card, CardSection, Field, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions'
import { Text } from 'react-native';

class LoginForm extends Component {
  
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field 
            value={this.props.email}
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Field 
            value={this.props.password}
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
