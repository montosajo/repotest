'use strict';

var React = require('react-native');

var {
  StyleSheet,
  WebView,
    View,
    Text,
    Image
} = React;

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
base64: {
    
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  }
});
 
var DetailView = React.createClass({

  render: function() {
    return (
     // <WebView style={styles.body} url={this.props.data.url + '?display=embedded'} />
    <View style={styles.container}>

        
        <Text style={styles.description}>
         Cookies Recipe .
        </Text>
        
        <Image
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
          style={styles.base64}
        />
         <Text style={styles.description}>
         by Trapipi (c) 2016 
        </Text>
      </View>
    );
  }

});

module.exports = DetailView;