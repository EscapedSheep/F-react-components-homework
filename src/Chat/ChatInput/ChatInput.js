import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      input: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSend = (event) => {
    event.preventDefault();
    const { sendMsg } = this.props;
    const msg = this.createCustomerMsg();
    sendMsg(msg);
    this.setState({
      input: '',
    });
  };

  createCustomerMsg = () => {
    return {
      text: this.state.input,
      role: ROLE.CUSTOMER,
    };
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleInputChange} value={this.state.input} />
        <button type="button" onClick={this.handleSend}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
