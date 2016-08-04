'use strict';

var {
    MCFileWriterUtil
} = require('NativeModules');

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
var data="";
var responseData="";
var mockedData = [                    {"genre":"Deep House",   title: " 1 cup of matzoh farfel",     id:"1",    },
                    {"genre":"Deep House",   title: " 1 cup of matzoh meal",     id:"1",    },
                    {"genre":"Deep House",   title: " 1/2 cup of raisins or cranberry raisins",     id:"1",    },
                    {"genre":"Deep House",   title: " 1/2 cup of sugar",     id:"1",    },
                    {"genre":"Deep House",   title: " 1/2 cup of walnuts, pecans or hazelnuts, rough chopped",     id:"1",    },
                    {"genre":"Deep House",   title: " 1/2 teaspoon of cinamon",     id:"1",    },
                    {"genre":"Deep House",   title: " 1/2 teaspoon of salt",     id:"1",    },
                    {"genre":"Deep House",   title: " 1/2 teaspoon of vanilla",     id:"1",    },
                    {"genre":"Deep House",   title: " 1/3 cup of oil",     id:"1",    },
                    {"genre":"Deep House",   title: " 3 eggs",     id:"1",    },
   ];



var Ingr = React.createClass({

  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(mockedData)
    };
  },
  componentDidMount: function() {
    this.fetchData();
//
  },

  //},
rowPressed: function (data) {

    console.log('row press');
    MCFileWriterUtil.writeFile(
    data,                       // File name
    'Some Text',                        // File contents
    function errorCallback(results) {
console.log(results);
//        alert('Error: ' + results);
    },
    function successCallback(results) {
console.log("JJJSSS"+results);

//        alert('Success : ' + results);
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
//von 
<View>
      <ListView 
       dataSource={this.state.dataSource}
       renderRow={this.renderTrack}
       style={styles.listView}/>

</View>
//zu
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
      
  }
      
      
});
var styles = require('./styles.js');
module.exports =Ingr;
