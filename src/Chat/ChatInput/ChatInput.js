import React, { Component } from 'react';
import './ChatInput.scss';

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
    const msg = {
      text: this.state.input,
      role: 'customer',
      tags: ['customer'],
    };
    sendMsg(msg);
    this.setState({
      input: '',
    });
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
