import React, {Component} from 'react';
import AccountsUIWrapper from "./AccountsUIWrapper.jsx"
import MobileTearSheet from '../sketches/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <AccountsUIWrapper/>
                <MobileTearSheet>
                    <List>
                        <Subheader>Top jugadores diarios!</Subheader>
                        <ListItem
                            primaryText="Brendan Lim"
                            leftAvatar={< Avatar src = "http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png" />}
                            rightIcon={< CommunicationChatBubble />}/>
                        <ListItem
                            primaryText="Eric Hoffman"
                            leftAvatar={< Avatar src = "http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png" />}
                            rightIcon={< CommunicationChatBubble />}/>
                        <ListItem
                            primaryText="Grace Ng"
                            leftAvatar={< Avatar src = "http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png" />}
                            rightIcon={< CommunicationChatBubble />}/>
                        <ListItem
                            primaryText="Kerem Suer"
                            leftAvatar={< Avatar src = "http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png" />}
                            rightIcon={< CommunicationChatBubble />}/>
                        <ListItem
                            primaryText="Raquel Parrado"
                            leftAvatar={< Avatar src = "http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png" />}
                            rightIcon={< CommunicationChatBubble />}/>
                    </List>
                    <Divider/>
                    <List>
                        <Subheader>Top Ganadores del Dia</Subheader>
                        <ListItem
                            primaryText="Chelsea Otakan"
                            leftAvatar={< Avatar src = "http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png" />}/>
                        <ListItem
                            primaryText="James Anderson"
                            leftAvatar={< Avatar src = "http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png" />}/>
                    </List>
                </MobileTearSheet>
            </div>
        );
    }
}
