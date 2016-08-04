'use strict';

var React = require('react-native');
var Detail = require('./detail');
var Detail1 =require('./detail1'); 
var {
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text,
} = React;

var styles = StyleSheet.create({
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
    paddingTop: 60,
  },
  // Table Row
  rowContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  // Text wrapper within row
  textContainer: {
    flex: 1
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
    textAlign: 'left',
  },
});
67
var REQUEST_URL = 'https://xunicorn.tv/api/articles?topic=swift&api_key=l9461I3z9XhP983b14P25JSjZvuBJ6BI';
var responseData="";
var Articles = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  fetchData: function() {
    
      responseData=" [ { id: '569d4d26f96fae0009000000', published: true,    title: 'Guide to working with CocoaPods' } ]";
         console.log(responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
         loaded: true,
        });
      
  },

  componentDidMount: function() {
    this.fetchData();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listView}
      />
    );
  },

  renderRow: function(data) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(data)} underlayColor='#e3e0d7'>
        <View>
          <View style={styles.rowContainer}>
            <View  style={styles.textContainer}>
              <Text style={styles.title}>A</Text>
              <Text style={styles.description}> B</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  },

  rowPressed: function (data) {
    console.log('row press');
      var ponf=Math.floor((Math.random() * 10) + 1);
if ( ponf > 5  ) {
    console.log("big");
    // Comment this out if you'd like to test without defining the detail view
    this.props.navigator.push({
      title: undefined,
      component: Detail,
      passProps: {data: data}
    });
}
else {
        console.log("picciolo");
     this.props.navigator.push({
      title: undefined,
      component: Detail1,
      passProps: {data: data}
    });
    
    
}
  },

  renderLoadingView: function() {
    return (
      <View style={styles.loading}>
        <Text style={styles.loading}>
          Fetching articles, please wait...
        </Text>
      </View>
    );
  },
});

module.exports = Articles;