'use strict';

var React = require('react-native');
var Detail = require('./detail');
var Detail1 =require('./detail1'); 

var ResponsiveImage = require('react-native-responsive-image');


//fdgkdkdfgdkgdg
var {
  AppRegistry,
View,
  StyleSheet,
  View,
  TouchableHighlight,
    TouchableOpacity,
  ListView,
  Text,
    TextInput
} = React;

/*var styles = StyleSheet.create({
  // Default Loading View
  loading: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    //fontFamily: 'Rokkitt',
    justifyContent: 'center',
    padding: 5,
    paddingTop: 40,
  },
  // Table
  listView: {
    //backgroundColor: '#F4F0E8',
       backgroundColor: 'blue',
    paddingTop: 60,
  },
  // Table Row
  rowContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  // Text wrapper within row
  textContainer: {
    flex: 1,
        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  // Row separator
  separator: {
    height: 1,
    backgroundColor: '#E3E0D7'
  },
  // Row Post Title
  title: {
    color: '#3D728E',
    //fontFamily: 'Rokkitt',
    fontSize: 10,
  },
  // Row Post Description
  description: {
    color: '#7C705F',
   
      //fontFamily: 'Josefin Sans',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 8,
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
        flex:1  ,
         fontSize:8
    },
     mainContainer:{
        flex:1                 //Step 1 1
    },
});*/
var styles = require('./styles.js');
var REQUEST_URL = 'https://xunicorn.tv/api/articles?topic=swift&api_key=l9461I3z9XhP983b14P25JSjZvuBJ6BI';
var responseData="";

var mockedData = [{"genre":"Deep House",
  title: "About this recipe",
    id:"1",
  
},{genre: "Bass",
  title: "The Piucks have been making these Passover cookies for decades.  The original recipe came from an unknown acquaintance or we would give her credit, but the recipe has evolved since we got it.  There are additional ingredients so the flavors are more complex, and the cooking temperature is lower.  And while they use only Passover acceptable ingredients, they really are good enough to make any time of the year.",
   id:"2",
},
{"genre":"Deep House",

  title: "About the Chef",
   id:"3",
},
{"genre":"Deep House",
  title: "Frank Piuck is a partner in Trapipi and an admired amateur baker.  Since we needed a recipe to demonstrate how the app works, he chose this family favorite.",
   id:"4",
},
 {"genre":"Deep House",
  title: "About Trapipi LLC ",
   id:"4",
},{"genre":"Deep House",
  title: "Trapipi was created to bring high quality 21st Century IT to businesses and organizations that need them.  We create smartphone apps, web sites and cloud based software services, as standalone products and as integrated systems.  Find out more about us at www.trapipi.com. We welcome suggestions for new apps, as well as suggestions for improvements to existing apps.  Please email ideas to ideas@trapipi.com",
   id:"4",
}, 
    
    ];
var Abou = React.createClass({

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
    _onSaveEvent: function(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
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
module.exports = Abou;
