'use strict';

var React = require('react-native');
var Detail = require('./detail');
var Detail1 =require('./detail1'); 
var Sound = require('react-native-sound');
var {
    MCFileWriterUtil
} = require('NativeModules');

// Step #1
var {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ListView,
  Text,
} = React;

var responseData="";
     
var mockedData = [{"genre":"Deep House",
  title: "How to Use this App",
    id:"1",
  
	},{genre: "Bass",
  	title: "It was our goal to make an app that would require very little instruction. It is voice interactive, so once you launch it, you needn't look at it, unless you want to see a picture of what the results look like of any particular step. ",
   id:"2",
	},
	{"genre":"Deep House",

  	title: "We recommend that you read the written recipe so you have a general idea what you will be doing.  Then read the lists of tools and ingredients, and assemble them in your kitchen.  Once you have everything you hit the button called Cook and it will tell you what the first step is.  When you finish a preparation step all you need to do is say next.  If you want to hear the instructions again say repeat.  Once cooking starts, the app will run on a timer, and tell you when to check the food, or do the next step, without prompting from you.",
   id:"3",
},

    
    ];
//fdgkdkdfgdkgdg


var Help= React.createClass({

  getInitialState: function () {
  

  return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(mockedData)
    };
  },
  componentDidMount: function() {
    this.fetchData();
    MCFileWriterUtil.writeFile(
    'MyFile.txt',                       // File name
    'Some Text',                        // File contents
    function errorCallback(results) {
        alert('Error: ' + results);
    },
    function successCallback(results) {
        //alert('Success : ' + results);
    }
); 



  },
  fetchData: function () {
   // Return mocked data for now
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockedData)
    });
  },
  render: function () {
    return (
     <View style={styles.mainContainer}>
         <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>Cookie Recipe</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
           
         
           <ListView 
       dataSource={this.state.dataSource}
       renderRow={this.renderTrack}
       automaticallyAdjustContentInsets={false}
       style={styles.listView}/>
        
       <View style={styles.botbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>© Trapipi  llc   & Frank Piuck 2015-2016 </Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
        </View>
       
    );
  },
  renderTrack: function (track) {
       

    return (
      <TrackCell navigator={this.props.navigator} track={track}/>
    );
  }
});

var TrackCell = React.createClass({
  render: function () {
      
      
    return (
      
        <View >
         
          <View style={styles.rightContainer}>
            <Text style={styles.description}>{this.props.track.title}</Text>
            
          </View>
         <View style={styles.separator} />
        </View>
      
    );
  },
  selectTrack: function (track) {
      if ( this.props.track.id =="1"){
          this.props.navigator.push({
          title: track.title,
          component: Detail,
          passProps: (this.props.track)
    });
      }
  
  else if ( this.props.track.id =="2"){
       this.props.navigator.push({
          title: track.title,
          component: Detail1,
          passProps: (this.props.track)
      
       });
      
  }      
 else if ( this.props.track.id =="3") {  this.props.navigator.push({
          title: track.title,
          component: Detail,
          passProps: (this.props.track)
      });
  }
     else if ( this.props.track.id =="4"){
   this.props.navigator.push({
          title: track.title,
          component: Detail,
          passProps: (this.props.track)
        });
   }
      
  }
      
      
});
var styles = require('./styles.js');
module.exports = Help;
