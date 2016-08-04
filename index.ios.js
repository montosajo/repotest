'use strict';
var React = require('react-native');
var Articles = require('./components/articles');
var Usage=require('./components/usage');
var Abou = require('./components/abou');
var Help = require('./components/help');
var Welcome= require('./components/welcome');
var {
    MCFileWriterUtil
} = require('NativeModules');
const AwesomeButton = require('react-native-awesome-button')
import Icon from 'react-native-vector-icons/FontAwesome';
var {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  TabBarIOS,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


var ReactNativeBlog = React.createClass({
  getInitialState: function() {
    return {
      tab: 'welcome',
    }
  },

  render: function() {
      
        
    return (
      <TabBarIOS>
         <TabBarIOS.Item
        icon={require('./home.png')}
        
        title='Home'
         onPress={() => {this.setState({ tab: 'welcome' }); }}
 selected={this.state.tab === 'welcome'}>
           <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Passover Cookies - Home', component: Welcome }}
          />
          
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./text.png')}
          
          title='Recipe'
          onPress={() => {this.setState({ tab: 'articles' }); }}
          selected={this.state.tab === 'articles'}
        >
          <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Passover Cookies - Recipe', component: Articles}}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./lifebuoy.png')}
          //iconName='question'
          title='Help'
          onPress={() => {this.setState({ tab: 'help' }); }}
          selected={this.state.tab === 'help'}
        >
          <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Passover Cookies - Help', component: Help}}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./info.png')}
          
          title='About'
          onPress={() => {this.setState({ tab: 'abou' }); }}
          selected={this.state.tab === 'abou'}
        >
          <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Passover Cookies - About', component: Abou}}
          />
        </TabBarIOS.Item>
          <TabBarIOS.Item
          icon={require('./info.png')}
          title='U'
          //iconName='user'
          onPress={() => {this.setState({ tab: 'usage' }); }}
          selected={this.state.tab === 'usage'}
        >
          <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Passover Cookies - U', component: Usage}}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('ReactNativeBlog', () => ReactNativeBlog);
