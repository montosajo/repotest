'use strict';
/*

style={[
          { marginTop: this.state.timeLineTop },
        ]}

*/
var React = require('react-native');
var Sound = require('react-native-sound');
var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var Icon = require('react-native-vector-icons/FontAwesome');
var longa=8500;
var fullImage = {uri: 'http://facebook.github.io/react/img/logo_og.png'};
var moanlisa='articles.png';
var moanlisas='';
import { NativeModules } from 'react-native';
var ResponsiveImage = require('react-native-responsive-image');
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;
    var playm="black";
    var playi="stop"
    var argss=[  '', '3227-738',
               '3227-744',
               '3227-747',
               '3227-752',
               '3227-756',
               '3227-759',
               '3227-762',
              '3227-765',
              '3227-768',
              '3227-800',
              '3227-775',
              '3227-778',
              '3227-781',
              '3227-784',
              '3227-788',
              '3227-791',
               '3227-794',
              '3227-1260',
              '3227-1277',
              '3227-1257',
              '3227-1280',
              '3227-797',];
/*var args=['articles.png','podcasts.png','screencasts.png'];*/
var args =[       'mas.jpg',
       '738.jpg',   '744.jpg',   '747.jpg',   '746.jpg',   '756.jpg',   '759.jpg',
       '762.jpg',   '765.jpg',   '768.jpg',   '800.jpg',   '775.jpg',
       '778.jpg',   '784.jpg',   '788.jpg',   '791.jpg',
       '791.jpg',   '791.jpg',   '791.jpg',   '791.jpg',   '791.jpg',   '791.jpg',   '797.jpg'
    ];
    
   var numa=0;
   var strangs='';
var TimerMixin = require('react-native-timer-mixin');
var nahme='';

  var mockedData = [
     {"genre":"Deep House",   title:"Loading Steps ..",id:"2",
},
      {"genre":"Deep House",   title:"Assemble and measure ingredients",id:"2",
},
             {"genre":"Deep House ",      title:"Mix dry ingredients",id:"2744",
},
             {"genre":"Deep House",   title:"Crack eggs into mixing bowl",id:"2746",
},
             {"genre":"Deep House",   title:"Beat  eggs.",id:"2747",
},
     
             {"genre":"Deep House",   title:"Add oil and vanilla to eggs",id:"2752",
},
             {"genre":"Deep House",   title:"Mix wet ingredients with dry",id:"2759",
},
             {"genre":"Deep House",   title:"Mix batter with large spoon or  spatula.  It will take some effort",id:"A",
},
             {"genre":"Deep House",   title:"Add raisins and nuts to batter",id:"2",
},
            
             {"genre":"Deep House",   title:"Stir until thoroughly mixed",id:"2",
},
             {"genre":"Deep House",   title:"Grease cookie pan",id:"2",
},
            {"genre":"Deep House",   title:"Use tablespoon to scoop batter for cookies.  Have a second spoon to push batter onto cookie sheets.  Leave about an inch on either side of the cookies.  They do not spread very much.  You can put 12 to 16 cookies on a standard pan, up to 20 on a large one",id:"B",
},
             
             {"genre":"Deep House",   title:"Put first cookie sheet into oven --Launching 3 mins timer ** Blocking Next ZC",id:"2",
},
             {"genre":"Deep House",   title:"Move first batch up and add second batch below",id:"2",
},
             {"genre":"Deep House",   title:"Remove first batch from oven, move second batch higher and add third batch on bottom shelf of oven Launching 3 mins timer **",id:"B",
},
            
             {"genre":"Deep House",   title:"Move cookies to cooling rack or plate",id:"2",
},
             
             {"genre":"Deep House",   title:"Remove second batch.  Move the bottom sheet to top.  If there is a fourth sheet, put the new one on the bottom Launching 3 mins timer **  ",id:"B",
},
            
             {"genre":"Deep House",   title:"Move second batch from cookie sheet to plate or cooling rack",id:"A",
},
             
             {"genre":"Deep House",   title:"Remove third batch and raise fourth batch to top Launching 3 mins timer ** Blocking Next ",id:"A",
},
             
             {"genre":"Deep House",   title:"Move third batch to plate Launching 3 mins timer ** Blocking next ",id:"2",
},
             
             {"genre":"Deep House",   title:"Remove last batch from oven",id:"2",
},
             
             {"genre":"Deep House",   title:"Move fourth batch to plate",id:"2",
},
             {"genre":"Deep House",   title:"Serve !!!! ",id:"2",
},
    
    
    
    ];   

    
var DetailView = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function() {
        return {
            timeLineTop: 175,
            nams :'',
           
          
        }
    },

  componentDidMount: function() {
   this.intervalID = this.setInterval( () => { 
       // console.log(nams);
      this.setState({
        timeLineTop: this.state.timeLineTop+1,
        nams:args[this.state.timeLineTop-175],
         
        
      });
        numa = this.state.timeLineTop -175;
       console.log('>>>>>>>>>>'+this.state.timeLineTop+numa);
 if (numa > 22) {clearInterval(this.intervalID);numa=0}
    }, longa);
      this.runAfterInteractions(() => {
   console.log("hydro");
    });
    
  },
render: function() {
    
       moanlisa= args[numa];
       moanlisas =argss[numa]+'.mp3';
       console.log('>>>xxx'+numa+moanlisas);
    
      if (numa > 20) {this.clearInterval()}
      if (numa == 10){ 
      console.log("timer set"+longa)
      var d = new Date();
      console.log("ddddddd"+d.getTime() );
      var CM1 =    NativeModules.CM1;
      CM1.addEvent('Birthday Party', '4    Privet Drive, Surrey', "2016-07-01T21:39:22.123Z"); // passing date as number of seconds since Unix epoch);
      }
// Play the sound with an onEnd callback
var s = new Sound(moanlisas, Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
       // console.log('duration', s.getDuration());
        s.play();
      }
    });
    return (
       <View> 
        <View>
        <MyCustomView style={{width: 10, height: 10}} isRed={true}/>
            <View style={{ flexDirection:'column',alignItems:'center',marginTop:100}} >
                    <ResponsiveImage  initWidth="300"  source={{uri: moanlisa}} initHeight="250"/>
             <Text style={styles.tt}>  {mockedData[numa].title}</Text>     
            </View>
    
       </View>
        <View  style={{ flexDirection:'row',alignItems:'center',marginLeft:100,marginTop:15}}>
         <Icon style={{ marginLeft:10}} color={playm} name={playi} size={25} onPress={this._handlePressx} backgroundColor="#3b5998"></Icon>
         
        <Icon style={{ marginLeft:17}} name="refresh" onPress={this._handlePress2} size={25} backgroundColor="#3b5998">
        </Icon>
        <Icon  style={{ marginLeft:15}} name="backward" onPress={this._handlePress1} size={25} backgroundColor="#3b5998">
       
         </Icon>
        
        </View>
    </View>
     
    );
  },
     _handlePressx(event) {
    if ( playi == "stop") { clearInterval(this.intervalID);console.log("zzzz");numa=0;
    playm="green";
    playi="play";
    this.setState ({});
                          }
    else {
        
      numa=0;
      playm="red";
      playi="stop";
      this.intervalID = this.setInterval( () => { 
      console.log("start");
      this.setState({
        timeLineTop: this.state.timeLineTop+1,
        nams:args[this.state.timeLineTop-175],
         
        
      });
        numa = this.state.timeLineTop -175;
        console.log('>>>>>>>>>>'+this.state.timeLineTop+numa);
        if (numa > 22) {clearInterval(this.intervalID);numa=0}
    }, longa);
      this.runAfterInteractions(() => {
   
      });
    
  }
        
        
  //V      
   // }
   
  },
     _handlePress1(event) {
         clearInterval(this.intervalID);
         console.log("zzzz minus1 ");
         numa=numa -2 ;
         playm="yellow";
         this.state.timeLineTop= this.state.timeLineTop- 2;
          console.log("re-start -1");
      this.intervalID = this.setInterval( () => { 
      console.log("re-start -1 x 2");
      this.setState({
        timeLineTop: this.state.timeLineTop+1,
        nams:args[this.state.timeLineTop-175],
         
        
      });
        numa = this.state.timeLineTop -175;
        console.log('>>>>>>>>>>'+this.state.timeLineTop+numa);
        if (numa > 22)     {clearInterval(this.intervalID);numa=0}
        }, longa);
        this.runAfterInteractions(() => {
   
        });
    
  //}
   
   
  },
     _handlePress2(event) {
      numa=0;
         clearInterval(this.intervalID);
         console.log("re zzzz");
      playm="blue";
      playi="stop";
      this.state.timeLineTop=175
          console.log("re-start");
      this.intervalID = this.setInterval( () => { 
      console.log("re-start 2");
      this.setState({
        timeLineTop: this.state.timeLineTop+1,
        nams:args[this.state.timeLineTop-175],
         
        
      });
        numa = this.state.timeLineTop -175;
        console.log('>>>>>>>>>>'+this.state.timeLineTop+numa);
 if (numa > 22) {clearInterval(this.intervalID);numa=0}
    }, longa);
      this.runAfterInteractions(() => {
   
    });
    
  },
});

var styles = StyleSheet.create({
  containerx: {
    flex: 1,
    //marginTop:60,
      flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
  },
    base641x: {
        marginTop:60,
    flex: 1,
    height: 20,
    resizeMode: 'contain',
        
  },
     base64x: {
    height: 100,
    width: 100,
  },
});

var styles = require('./styles.js');
module.exports=  DetailView;

/*switch(numa) {
    case 0:
        
    return (
    <View>
      <View style={styles.container}>
       <Image
         
     source={{uri: moanlisa}} style={{width: 40, height: 40}}
          style={styles.base641}
        />
        </View>
        <View>
       <Text>{args[numa]} TOP - {this.state.timeLineTop}</Text>
        </View>
        
        
       
      </View>
    );
      case 1:
      
      return (
      <View style={styles.container}>
       <Image
          source={require('./2.jpg')}
          style={styles.base64}
        />
       <Text>{args[numa]}TOP - {this.state.timeLineTop}</Text>
        
        
        
       
      </View>
    );
case 2: 
    return (
      <View style={styles.container}>
       <Image
          source={require('./3.jpg')}
          style={styles.base64}
        />
       <Text>{args[numa]}TOP - {this.state.timeLineTop}</Text>
        
        
        
       
      </View>
    );  
default:
        return (
            <View>
      <View style={styles.container}>
       <Image
          source={require('./3.jpg')}
          style={styles.base64}
        />
        </View>
        <View>
       <Text>{args[0]}TOP - {this.state.timeLineTop}</Text>
        
        </View>
        
       
      </View>
    );  
        
        
}*/