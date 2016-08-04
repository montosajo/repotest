/**
 *  Native Components -Polipetix in React Native
 */
'use strict';
var SQLite = require('react-native-sqlite-storage');
var {
    MCFileWriterUtil
} = require('NativeModules');
var Speech = require('react-native-speech');

import Icon from 'react-native-vector-icons/FontAwesome';
const AwesomeButton = require('react-native-awesome-button');

import { requireNativeComponent, PropTypes } from 'react-native';
var React = require('react-native');
var Sound = require('react-native-sound');
var Orientation = require('react-native-orientation');
//var UserDefaults = require('react-native-userdefaults-ios');

var {
 AlertIOS,
 PushNotificationIOS,
 TouchableHighlight,
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Component,
 Image
} = React;

var lasta =1;
var showme ="";
var data ="BB";
var indica1 = "require('./ajax-loader.gif'";
var indica3 = "require('./ntimere.png')";
var indicai= "require('./ntimere.png')";
var showme ='';
var mask=1;
var audioin=0;
var textdis='Welcome .Hit Next to start or Hit Mic On and say  NEXT ';
var imagdis='';
var disimag='';
var step=[];
var imag=[];
var time=[];
var oris="";
var db =     SQLite.openDatabase({name: 'svdb', createFromLocation : 1}, this.successcb, this.errorcb);   
class Usage extends Component {
constructor(props) {
    super(props);
    super(props);
    
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      //
        oris ='P';
        console.log("We detected ccccccccccccccccccit")
    }
    
    this.state = { myKey: 'foo' ,myKey1: 'zoo',timi: 0,count : 0,maska:'X',vox :0,nameb:'forward', voxin:'microphone-slash', sema:''};
    this.rowPressedB = this.rowPressedB.bind(this);
    this.rowPressedV = this.rowPressedV.bind(this);
    this.rowPressedY = this.rowPressedY.bind(this);
    this.rowPressedN = this.rowPressedN.bind(this);
    this.rowPressedZ = this.rowPressedZ.bind(this);
    this.rowPressedF = this.rowPressedF.bind(this);
    this.rowPressedR= this.rowPressedR.bind(this); this._onLocalNotification=this._onLocalNotification.bind(this); 
    this._orientationDidChange=this._orientationDidChange.bind(this);
    var db =     SQLite.openDatabase({name: 'svdb',             createFromLocation : 1}, this.successcb, this.errorcb); 
    db.transaction((tx) => {
        tx.executeSql('SELECT text ,seq   from step ', [], (tx, results) => {
      
        var len = results.rows.length;
       //console.log("Query completed"+ len);
        for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            step[row.seq]=row.text
           
          //  console.log("This should be the text" +step[row.seq] );
            if ( row.text =="Serve !!!!"){lasta = row.seq +1}
          }
          // console.log("This should be the last" +lasta );
          step[0] ="Debug";

    });
}); 
 db.transaction((tx) => {
  tx.executeSql('SELECT text ,seq ,imas  from imag ', [], (tx, results) => {
      
      var len = results.rows.length;
       //console.log("Query completed"+ len);
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
          var pumba ="747";
          pumba= row.imas;
          imag[row.seq] =pumba;
        
          }
          imag[0] ="788";
          
    });
});   
     db.transaction((tx) => {
  tx.executeSql('SELECT seq ,time  from time ', [], (tx, results) => {
      
      var len = results.rows.length;
       //console.log("Query completed"+ len);
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
          var pumba =0;
          pumba= row.time;
          time[row.seq] =pumba;
         
          }
          
    });
}); 
    
      Speech.speak({
  text: 'Welcome',
  voice: 'en-GB'
});
  }
    
  errorCB(err) {
  console.log("SQL Error: " + err);
}

    
successCB() {
  console.log("SQL executed fine");
}

openCB() {
  console.log("Database OPENED");
}

  rowPressedF(){
          //start VR poli 
        if ( this.state.voxin =='microphone-slash') {
            this.setState({voxin:'microphone'}) ;;
            //console.log("change to Y ")
            audioin=1;
            MCFileWriterUtil.writeFile(
                    "Y",                       // Action -  Next back sound on/off
                    'Some Text',               // To be used 
                    function errorCallback(results) {
                        console.log(results);

                        },
   
                    function successCallback(results) {
        
                     }
            );
            return;
        }
       if ( this.state.voxin =='microphone') {
            this.setState({voxin:'microphone-slash'}) ;;
            //console.log("change to NO ")
            audioin=0;
            MCFileWriterUtil.writeFile(
                    "N",                       // Action -  Next back sound on/off
                    'Some Text',               // To be used 
                    function errorCallback(results) {
                        console.log(results);

                        },
   
                    function successCallback(results) {
        
                     }
            );
            return;
        }
    } 
    rowPressedY(){
          //start VR poli 
        if ( this.state.myKey1 =='zoo') {
            this.setState({ myKey1: 'koo'}) ;;
            //console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSS")
            audioin=1;
            MCFileWriterUtil.writeFile(
                    "Y",                       // Action -  Next back sound on/off
                    'Some Text',               // To be used 
                    function errorCallback(results) {
                        //console.log(results);

                        },
   
                    function successCallback(results) {
        
                     }
            );
        }
       
    }
    rowPressedN(){
        //stop VR poli 
        audioin=0;
        if ( this.state.myKey1 =='koo'){
            this.setState({ myKey1: 'zoo'}) ;
            //console.log("SNOOOOOOOOOOOOOOOOOOOOOOOOOO")
            MCFileWriterUtil.writeFile(
                    "N",                                // Action -  Next back sound on/off
                    'Some Text',                        // To be used 
                    function errorCallback(results) {
                        //console.log(results);

                    },
                    function successCallback(results) {
  
                    }   
            );
        }
  }
 displayState() {
        //console.log(this.state)
        this.setState({ myKey: 'foo'});
}

//}
    rowPressedV(){
        // button for next 1 step 
        
       

        mask = this.state.count;
        mask = mask+1;
        if ( lasta <  mask ) {
            mask =1 ;
        }
                // this.setState  ({maska :showme})
        
    /*    UserDefaults.setStringForKey('stepa', mask)
    .then(result => {
        console.log(result);
    });*/
        this.setState  ({ count :mask });
        //this.setState  ({ timi :0 });
        textdis= step[mask];
        disimag= imag[mask];
        
        console.log("aqulesyborro"+disimag+imag[mask]+mask);
        this.setState({ myKey: 'boo'}); //spinning indic 
                                        // koo micin zoo micoff        
        //var vistat = this.state.myKey1;
      
        var vistat     = this.state.voxin ; // in or out 
        //var oldvis= audioin;
        //if ( audioin == 1 ) this.rowPressedN();
        //console.log("FFFFFfffff"+vistat)
        if (vistat == 'microphone'){ this.rowPressedF()}; // if on close 
       
      
         Speech.speak({
  text: ''+textdis,
  voice: 'en-GB'
});
        
     
this.setState({ myKey: 'foo'});
        if (vistat == 'microphone'){ this.rowPressedF()}; //if was on restart
        
        //var imeoutID = window.setTimeout(this.displayState.bind(this), 4000);  
        
        if ( time[mask]  ||  mask == 3){  // operational timer delete the mask check -- valid for test OHNE
                    var d = new Date();
                    d.setSeconds(d.getSeconds() + time[mask]* 60 );
                    var pumba = "";
                    pumba= time[mask].toString();
                    var Hours = d.getHours();
                    var Minutes = d.getMinutes();
                    var Seconds = d.getSeconds();
                    showme="Due -> "+Hours+":"+Minutes+"::"+Seconds;
      
                    this.setState ({maska :showme})
                    
                    this.setState({ timi :1 });
      
                    //this is the OPERATIONAL  timer  
                    MCFileWriterUtil.readFile(
                    pumba,                       // Timer value sec SS.D
            
                        function errorCallback(results) {
                    
                        },
                        function successCallback(results) {
   
                        }
                    );
            }
        
    
    }
    rowPressedZ(){
        
        MCFileWriterUtil.writeFile(
                    "Z",                                // Action -  V)Next B) back sound on Y) /off N)  Z)Kill Timer
                    'Some Text',                        // To be used 
                    function errorCallback(results) {
                        //console.log(results);

                    },
                    function successCallback(results) {
  
                    }   
            );
        
        this.setState ({maska :showme})
                    
                    this.setState({ timi :1 });
      
        
        
        
    }
    rowPressedR(){
        
        
        AlertIOS.alert(
                'You requested a Restart ',
                'RN02 : Alert message:  Full reset ' ,
                    [{
                    text: 'Now  You can Press Next to continue',
                    onPress: null,
                    }]
            );
        this.setState({ count : 0 });
        
        
    }
    
    
    
    
    
    rowPressedB(){
        // button for back 1 step 
        mask = this.state.count;
        mask = mask-1;
        if ( mask ==0  ) {
            mask =1 ;
        }
        this.setState({ count :mask });
        
        textdis= step[mask];
        disimag= imag[mask];
      
        
        this.setState({ myKey: 'foo'}); //spinning indic 
                                        // koo micin zoo micoff        
         Speech.speak({
  text: ''+textdis,
  voice: 'en-GB'
});
        var vistat     = this.state.voxin ; // in or out 
        //var oldvis= audioin;
        //if ( audioin == 1 ) this.rowPressedN();
        console.log("FFFFFfffff"+vistat)
        if (vistat == 'microphone'){ this.rowPressedF()}; // if on close 
        console.log("FFFFFfffff"+vistat)
       
    }

componentWillMount() {
    PushNotificationIOS.requestPermissions();
    // Add listener for local notifications
    PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
    
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
 _onLocalNotification(notification){
         var quod =notification.getData();
         
         var t1 = JSON.parse(JSON.stringify(quod))
        
         var signal= t1.alertBody;
         //console.log("whats up"+ signal) //zcnet or zcback or any Text from ObjC 
         
         if ( signal == 'ZCnext'){ 
            //display  label with timer and exp date 
             
              this.rowPressedV(); //pretend I hit the button :) 
              
              
              //this.setState({ myKey: 'boo'});
 
           
        
         }
         else if (signal=='ZCback'){
             this.rowPressedB(); // prtened I hit the button :)
     
         }
         else if (signal=='ZCcan'){
             this.setState({timi : 0 })  ; //clean the  timer info :)
     
         }
         else {
         AlertIOS.alert(
                'Local Notification Received from Recipe System',
                'RN01 : Alert message:  Timer Ended ' ,
                    [{
                    text: 'Now  You can Press Next to continue',
                    onPress: null,
                    }]
            );
         this.setState({timi : 0 })  ; //clean the  timer info
         }
  }
   
    
  render() {
   var   jewelStyle = function() {
     if (oris === 'P') {
      //
      
    //}     
   return {
     marginTop:80,
        height: 200,
        flex: 1.5,
   }
     }
   else {
         console.log("Smaller")
       return {
     marginTop:40,
        height: 120,
        flex: 1.5,
   }
       
       
       
   }
 } ;
      var textdis1   = textdis ;
      var disimagx   = disimag;
      var imas ="style={styles.image1}";
      if (disimagx == "") {disimagx="788"};
      console.log("xxxxx"+disimagx);
      //console.log (this.state.myKey1);
      if ( this.state.myKey == 'boo'){
        var indica1 = require('./indi.gif');
      }
      if ( this.state.myKey == 'foo'){
        var indica1 = require('./gr.png');
       //
        }
       if ( this.state.myKey1 == 'zoo'){
        var indica2 = require('./micof.png') ;}
      if ( this.state.myKey1 == 'koo'){
        var indica2 = require('./micin.png');}
      
      
       if ( this.state.timi == 1){
        var indica3 = require('./timere.png');
        var showme = this.state.maska;
      }
      else {  showme='';}
      if ( this.state.vox == 1){
        var voxi  = 'Voice on';
        
      }
      else { voxi ='Voice OFF'}
    return (
<View  style={{flexDirection:'column'}}>
    
   <View style={styles.buta}>



<Image
     resizeMode={"contain"} style={jewelStyle()} source={{uri:disimagx}} />

   </View>
<View style={styles.buta}>    
<View style={styles.buta}> 
    <View style={{ width: 56, height: 15,marginRight: 8,marginLeft:40 }}>
    <Icon.Button name={this.state.voxin} backgroundColor="#3b5998"  borderRadius ={3} size={8}  onPress={this.rowPressedF}><Text style={{fontFamily: 'Arial', fontSize:5 , color:'white' }}>MIC ON/OFF</Text></Icon.Button>
    </View>
    
     <View style={{ width: 56, height: 15,marginRight: 8 }}>
    <Icon.Button name={this.state.nameb} backgroundColor="#3b5998" size={8} borderRadius ={3} onPress={this.rowPressedV}><Text style={{fontFamily: 'Arial', fontSize:5  ,color:'white' }}>Next</Text></Icon.Button>
    </View>
      <View style={{ width: 56, height: 15,marginRight:10 }}>
        <Icon.Button name="backward" borderRadius ={3} backgroundColor="#3b5998" size={8} onPress={this.rowPressedB}><Text style={{fontFamily: 'Arial', fontSize:5  , color:'white',align:'left' }}>Back</Text>
    </Icon.Button>
    </View>
      <View style={{ width: 56, height: 15,marginRight: 8 }}>
    <Icon.Button name="refresh" borderRadius ={3} backgroundColor="#3b5998" size={8} onPress={this.rowPressedR}><Text style={{fontFamily: 'Arial', fontSize:5 , color:'white' }}>Reload</Text></Icon.Button>
    </View>
      <View style={{ width: 56, height: 15,marginRight:40 }}>
   
    <Icon.Button name="times" borderRadius ={3} backgroundColor="#3b5998" size={8} onPress={this.rowPressedZ}><Text style={{fontFamily: 'Arial', fontSize:5  , color:'white'  }}>Cancel Timer</Text>
    </Icon.Button>
    </View>
</View>
</View>      
<View style={styles.iconz} ><Image source={indica1} style={{width: 10, height: 10, backgroundColor: 'transparent'}}/><Image source={indica3} style={{width: 10, height: 10, backgroundColor: 'transparent'}}/><Text style={{fontSize:8,textAlign:'center'}}>{showme}</Text>
</View>
<View >
    
   <Text numberOfLines={5} style={{fontSize:8,textAlign:'left',marginLeft:4,marginRight:4}}>Your image {disimagx} Your Text : {textdis}</Text>

   </View>


</View>
) }


}

var styles = StyleSheet.create({
  container: {
 //flexDirection:'row'
},
buta:{
            flexDirection:'row', 
            flex:1,//Step 1
            justifyContent:'center',
            alignItems:'center',
            marginTop:5
},
image: {
        
        marginTop:60,
        height: 120,
        flex: 1.5,
},
    image1: {
        
        marginTop:60,
        height: 120,
        flex: 1.5,
},
iconz:{
        backgroundColor:'#ebeef0',
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center' ,
         marginTop:15//<-----
    }
});

/*
<Image
     resizeMode={"contain"}   style={styles.image1} source={{uri:disimagx}} />   
   <Image
     resizeMode={"contain"}   style={styles.image} source={require('./mas.jpg')} />
var s = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (e) => {
        if (e || 1==1) {
            //console.log('error', e);
        } else {
            //console.log('duration', s.getDuration());
            
            s.play((success) => {
                if (success) {
                    //console.log('successfully finished playing');
                    this.setState({ myKey: 'foo'});
                    
                    
                    if (vistat == 'microphone'){ this.rowPressedF()}; //if was on restart it
                } else {
                    //console.log('playback failed due to audio decoding errors');
                    
                }
            });
            }   
            
        });
        
         var s = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (e) => {
        if (e) {
            console.log('error', e);
        } else {
            console.log('duration', s.getDuration());
            
            s.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                    this.setState({ myKey: 'foo'});
                    if (vistat == 'microphone'){ this.rowPressedF()}; //if was on restart it
                    
                } else {
                    console.log('playback failed due to audio decoding errors');
                    
                }
            });
            }   
            
        });
*/

module.exports= Usage
