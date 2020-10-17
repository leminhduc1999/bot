import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig, BOT } from './config';
import { AuthActions } from '../../../redux/actions/authAction'

class ChatBot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [ {
                _id: 0,
                text: 'Hello Duc',
                createdAt: new Date(),
                user: BOT,
            }]
        };

    }

    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        );
    }

    onSend = (messages = []) => {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
      
        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            result => this.handleGoogleResponse(result),
            error => console.log(error)
        );
    }


    handleGoogleResponse = (result) => {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }
    

    sendBotResponse = (text) => {
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT
        };
      
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [msg])
        }));
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1
                    }}
                />
            </View>
          );
    }
}

function mapState(state) {
    const { auth } = state;
    return { auth };
};

const actionCreators = {
    test: AuthActions.test,
};


export default ChatBot = connect(mapState, actionCreators)(ChatBot);
