'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
    TextInput,
    Image,
    Component,
    ScrollView,
    TouchableWithoutFeedback
} = React;
var Orientation = require('react-native-orientation'); 
import { NativeModules } from 'react-native';
var Sound = require('react-native-sound');
var ResponsiveImage = require('react-native-responsive-image');
var oris="";
var baseFontSize = 16;

class Welcome extends Component {
constructor(props) {
    super(props);
    super(props);
    this.state = { sema:''};
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
         oris ='P';
        }  
     this.state = { myKey: 'foo' ,myKey1: 'zoo',timi: 0,count : 0,maska:'X',vox :0,nameb:'forward', voxin:'microphone-slash', sema:''};
    this._orientationDidChange=this._orientationDidChange.bind(this);
}
    
     componentWillMount() {
Orientation.addOrientationListener(this._orientationDidChange);
  } 
    _orientationDidChange(orientation) {
    if (orientation == 'LANDSCAPE') {
      //do something with landscape layout
        console.log("XXXXXXXXXXXXXXccccc");
        oris='S';
         this.setState({ sema :1 });
    } else {
        //
      //do something with portrait layout
         oris='P';
         this.setState({ sema :1 });
    }
  }
render() {

 var   jewelStyle = function() {
     if (oris === 'P') {
     
        return {
        marginTop:80,
        height: 200,
        flex: 1.5,
        }
   }
   else {
        
        return {
        marginTop:20,
        height: 120,
        flex: 1.5,
        }
   }
 } ;
  
 var   ringStyle = function() {
     if (oris === 'P') {
     
        return {
        //backgroundColor: 'yellow',
        height: 200,
        marginTop:2,
        }
   }
   else {
        
        return {
        //backgroundColor: 'yellow',
        height: 120,
         marginTop:2,
        }
   }
 } ;

return (
    <View>
<View style={styles.buta}>
<Image
     resizeMode={"contain"} style={jewelStyle()} source={require('./mas.jpg')} />

</View>
    <View>                                                    
    <ScrollView ref='scrollView' keyboardDismissMode='interactive' style={ringStyle()} automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator= {true} contentContainerStyle={styles.cxontentContainer}>

          <View style={styles.buta}>
            <Text   style={styles.description}>This is a voice interactive recipe. It will tell you each step, and then when you say NEXT, it will tell you the next one, until such time as food hits the stove or the oven.  Actual cooking steps are timer controlled, and the app will tell you when these steps are finished or food needs attention.  If you miss a step, saying REPEAT will have the step said again.  BACK will take you back an entire step.  {"\n"}The word you said will appear in a Red bar, which will turn Green when the app is available for the next step.  {"\n"}If you leave the recipe before a timer starts, you can return where you left it.  If you leave after a timer begins, the app will tell you when the timer is over, and the food needs attention.If you decide to abandon the recipe, hit RESET, or return to the HOME tab.   {"\n"}We suggest you read the recipe STEPS before you start, and use the TOOLS and INGREDIENTS tabs to assemble everything you need before you start.  {"\n"}The app voice input system can be affected by Background noise, particular accents. among other working place  conditions. so we suggest you test it before you cook, using the Voice command on-off switch ( in COOK Tab ) that will show your commands WITHOUT processing them.</Text>
                    </View>
                      </ScrollView>
                    </View>
      <View style={styles.botbar}>
                    
                    <Text style={styles.toolbarTitle}>© Trapipi  LLC   & Frank Piuck 2015-2016 </Text>
                    
            </View>  
                    
                  
      </View>
 
    ) }
}
var styles = require('./styles.js');

/*

<View  style={{flexDirection:'column'}}>
      </View>
 <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}></Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
     
<View style={styles.mainContainer}>
 </View>              
 
<View style={{flex: 1,}}>


 <View style={styles.botbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>© Trapipi  LLC   & Frank Piuck 2015-2016 </Text>
                    <Text style={styles.toolbarButton}></Text>
            </View>
*/
module.exports = Welcome;