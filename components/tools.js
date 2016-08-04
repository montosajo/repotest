'use strict';

var React = require('react-native');
var Detail = require('./detail');
var Detail1 =require('./detail1'); 
//fdgkdkdfgdkgdg
var {
  StyleSheet,
  View,
  TouchableHighlight,
    TouchableOpacity,
  ListView,
  Text,
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
       backgroundColor: 'green',
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
    //color: '#7C705F',
    color:'black',
      //fontFamily: 'Josefin Sans',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 8,
    textAlign: 'center',
  },
});*/

var REQUEST_URL = 'https://xunicorn.tv/api/articles?topic=swift&api_key=l9461I3z9XhP983b14P25JSjZvuBJ6BI';
var responseData="";
      
  var mockedData = [{"genre":"Deep House",
  title: "2 mixing bowls ",
    id:"1",
  
},{genre: "Bass",
  title: "cookie sheets",
   id:"2",
},
{"genre":"Deep House",

  title: "measuring cups",
   id:"3",
},
{"genre":"Deep House",
  title: "mixing paddle",
   id:"4",
},
  {"genre":"Deep House",
  title: "spatula",
   id:"4",
},{"genre":"Deep House",
  title: "tablespoon",
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
      <ListView 
       dataSource={this.state.dataSource}
       renderRow={this.renderTrack}
       style={styles.listView}/>
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
module.exports = Articles;