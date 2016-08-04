'use strict';

var React = require('react-native');
var Detail = require('./detail');
var Steps = require('./steps');
var Ingr = require('./ingr');
var Tools = require ('./tools');
var Detail1 =require('./detail'); 
var Usage =require('./usage');
//fdgkdkdfgdkgdg
var {
  StyleSheet,
  View,
  TouchableHighlight,
    TouchableOpacity,
  ListView,
    Image,
  Text,
} = React;

/*var styles = StyleSheet.create({
  // Default Loading View
  container: {
      flexDirection: 'column',
      flex: 1,
      paddingTop :10,
      backgroundColor: 'orange'
    },   
  
  // Table
  listView: {
    //backgroundColor: '#F4F0E8',
    backgroundColor: 'yellow',
    paddingTop: 30,
      
    
  },
  // Table Row
  rowContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  // Text wrapper within row
  textContainer: {
    flex: .25,
        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  // Row separator
  separator: {
    height: 1,
    backgroundColor: '#E3E0D7'
  },
    forgotContainer1: {
      alignItems: 'flex-end',
         flex:.35,
  alignItems: 'center',
         //color:'red'
      //padding: 15,
    },
     forgotContainer: {
      alignItems: 'flex-end',
         flex:.35,
  alignItems: 'center',
         //color:'red'
      //padding: 15,
    },
  // Row Post Title
  title: {
    color: '#3D728E',
    //fontFamily: 'Rokkitt',
    fontSize: 10,
  },
    
    halfHeight: {
        flex: .5,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#000'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .48,
        backgroundColor: 'red'
    },
    mark: {
        width: 150,
        //paddingTop:70,
        height: 150
    },
  // Row Post Description
  description: {
    color: '#7C705F',
   
      //fontFamily: 'Josefin Sans',
    fontSize: 12,
    lineHeight: 20,
    
    textAlign: 'center',
  },
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:80,
        paddingBottom:10,
        flexDirection:'row',    //Step 1
    },
     botbar:{
        backgroundColor:'#81c04d',
        paddingTop:20,
        paddingBottom:50,
        flexDirection:'row' ,
          alignItems: 'flex-end'//Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1     
    },
     mainContainer:{
        flex:1                 //Step 1 1
    },
    content:{
        backgroundColor:'#ebeef0',
        flex:1  ,
        alignItems:'center'//Step 2
    }//St
});*/

var REQUEST_URL = 'https://xunicorn.tv/api/articles?topic=swift&api_key=l9461I3z9XhP983b14P25JSjZvuBJ6BI';
var responseData="";
    var mockedData = [{"genre":"Deep House",
  title: "Recipe Steps",
    id:"1",
  
},{genre: "Bass",
  title: "Animated Recipe with Voice Processing",
   id:"40",
},
    {genre: "Bass",
  title: "Animated Recipe Free  Running Tour",
   id:"2",
},
{"genre":"Deep House",

  title: "Tools",
   id:"3",
},
{"genre":"Deep House",
  title: "Ingredients",
   id:"4",
},
    
    
    ];
var Articles = React.createClass({

  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(mockedData)
    };
  },
  componentDidMount: function() {
    this.fetchData();
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
                    <Text style={styles.toolbarTitle}></Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
           
      <View style={{ flex:1  , alignItems:'center',
       }}>   
           <ListView 
       dataSource={this.state.dataSource}
       renderRow={this.renderTrack}
       automaticallyAdjustContentInsets={false}
       style={styles.listView}/>
        </View>
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
      
        
    
      <TouchableOpacity onPress={() => this.selectTrack(this.props.track )} style={styles.rightContainer}>
        <View >
         
          <View style={styles.rightContainer}>
            <Text style={styles.description}>{this.props.track.title}</Text>
            
          </View>
        </View>
      </TouchableOpacity>
                                
    );
  },
  selectTrack: function (track) {
      if ( this.props.track.id =="1"){
          this.props.navigator.push({
          title: track.title,
          component: Steps,
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
          component: Tools,
          passProps: (this.props.track)
      });
  }
     else if ( this.props.track.id =="4"){
   this.props.navigator.push({
          title: track.title,
          component: Ingr,
          passProps: (this.props.track)
        });
   }
     else if ( this.props.track.id =="40"){
   this.props.navigator.push({
          title: track.title,
          component: Usage,
          passProps: (this.props.track)
        });
   } 
  }
      
      
});
var styles = require('./styles.js');
module.exports = Articles;
