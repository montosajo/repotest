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
var styles = require('./styles.js');
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
    backgroundColor: '#F4F0E8',
    //   backgroundColor: 'grey',
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
});*/

var REQUEST_URL = 'https://xunicorn.tv/api/articles?topic=swift&api_key=l9461I3z9XhP983b14P25JSjZvuBJ6BI';
var responseData="";
       var mockedData = [
    
      {"genre":"Deep House",   title:"Assemble and measure ingredients",id:"2",
},
             {"genre":"Deep House ",      title:"Mix dry ingredients",id:"2",
},
             {"genre":"Deep House",   title:"Crack eggs into mixing bowl",id:"2",
},
             {"genre":"Deep House",   title:"Beat  eggs.",id:"2",
},
     
             {"genre":"Deep House",   title:"Add oil and vanilla to egg",id:"2",
},
             {"genre":"Deep House",   title:"Mix wet ingredients with dry",id:"2",
},
             {"genre":"Deep House",   title:"Mix batter with large spoon or  spatula.  It will take some effort",id:"2",
},
             {"genre":"Deep House",   title:"Add raisins and nuts to batter",id:"2",
},
            
             {"genre":"Deep House",   title:"Stir until thoroughly mixed",id:"2",
},
             {"genre":"Deep House",   title:"Grease cookie pan",id:"2",
},
            {"genre":"Deep House",   title:"Use tablespoon to scoop batter for cookies.  Have a second spoon to push batter onto cookie sheets.  Leave about an inch on either side of the cookies.  They do not spread very much.  You can put 12 to 16 cookies on a standard pan, up to 20 on a large one",id:"2",
},
             
             {"genre":"Deep House",   title:"Put first cookie sheet into oven --Launching 3 mins timer ** Blocking Next ZC",id:"2",
},
             {"genre":"Deep House",   title:"Move first batch up and add second batch below",id:"2",
},
             {"genre":"Deep House",   title:"Remove first batch from oven, move second batch higher and add third batch on bottom shelf of oven Launching 3 mins timer **",id:"2",
},
            
             {"genre":"Deep House",   title:"Move cookies to cooling rack or plate",id:"2",
},
             
             {"genre":"Deep House",   title:"Remove second batch.  Move the bottom sheet to top.  If there is a fourth sheet, put the new one on the bottom Launching 3 mins timer **  ",id:"2",
},
            
             {"genre":"Deep House",   title:"Move second batch from cookie sheet to plate or cooling rack",id:"2",
},
             
             {"genre":"Deep House",   title:"Remove third batch and raise fourth batch to top Launching 3 mins timer ** Blocking Next ",id:"2",
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
 
var Steps = React.createClass({

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
module.exports = Steps;