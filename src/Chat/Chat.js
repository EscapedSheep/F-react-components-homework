import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  sendMsg = (msg) => {
    const messages = this.state.messages.concat(msg);
    setTimeout(() => {
      this.setState(
        {
          messages,
        },
        () => {
          this.answerCustomer(msg.text);
        }
      );
    }, 100);
  };

  answerCustomer = (customerInput) => {
    const answerMsg = answersData.find((answer) => this.findTagInInput(answer.tags, customerInput));
    if (answerMsg !== undefined) {
      const messages = this.state.messages.concat(answerMsg);
      setTimeout(() => {
        this.setState({
          messages,
        });
      }, 100);
    }
  };

  findTagInInput = (tags, input) => {
    const findTag = tags.find((tag) => input.search(tag) !== -1 && tag !== 'DEFAULT');
    return findTag !== undefined;
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput sendMsg={this.sendMsg} />
      </main>
    );
  }
}

export default Chat;
