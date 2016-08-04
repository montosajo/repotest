'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
    Image,
  Component
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
  },
     container1: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
 container2: {
    flex: 1,
    justifyContent: 'bottom',
    alignItems: 'center',
    backgroundColor: 'blue',
  }                               
});
 
class Welcome extends Component {
  render() {
    return (
         
      
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
}
 
module.exports = Welcome;