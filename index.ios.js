'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} = React;

var ws = new WebSocket('ws://localhost:4000');

var TapSpeed = React.createClass({
    buttonClicked: function() {
        ws.send('test from ios');
    },
    render: function() {
        return (
                <View>
                <Text>
                Tap me as fast as you can
            </Text>
                <TouchableHighlight
            onPress={this.buttonClicked}>
                <Text>Button</Text>
                </TouchableHighlight>
                </View>
        )
    }
})

var app = React.createClass({
    render: function() {
        return (
                <View style={styles.container}>
                <Text style={styles.welcome}>
                Hello world!
            </Text>
                <Text style={styles.instructions}>
                To get started, edit index.ios.js
            </Text>
                <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu

            </Text>
                <TapSpeed />
                <View style={styles.message}></View>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    message: {
        height: 50,
        flex: .8,
        backgroundColor: '#FFFFFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('app', () => app);
