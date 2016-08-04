module.exports = require('react-native').StyleSheet.create( {
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
    //backgroundColor: 'yellow',
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
       
    },
    message:{
         flex:1,
         alignItems: 'flex-start',
         
        
        
    },
   rightContainer: {
     
      //alignItems: 'center',
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
   // color: '#3D728E',
      color :'black',
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
    color: 'black',
    flex:1 ,
    textAlign : 'left', 
    fontFamily: 'American Typewriter',
    fontSize: 8,
    lineHeight: 12,
   
      paddingLeft:20,
    
       paddingRight:20,
        paddingTop:1,
  
   
  },
     scrollView: {
    backgroundColor: 'yellow',
    height: 120,
         marginTop:2,
     
  },
    contentContainer: 
    { paddingTop: 5 ,
      
      //backgroundColor: 'red',
      flex:1,
      alignItems: 'flex-start'
    },

    
    separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
    toolbar:{
       // backgroundColor:'#81c04d',
        backgroundColor:'#1ADAE1',
       
        paddingTop:50,
        paddingBottom:10,
        flexDirection:'row',    //Step 1
    },
     botbar:{
        flex:1,
        backgroundColor:'#1ADAE1',
       
       
position: 'absolute',
bottom:0,
left:0,

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
        fontSize:6,
        flex:1     
    },
     mainContainer:{
        flex:1  ,
         backgroundColor:'yellow'//Step 1 1
    },
    content:{
        backgroundColor:'#ebeef0',
        flex:1  ,
        alignItems:'center'//Step 2
    },
    tt:{
        paddingTop:20 ,
        fontSize:10,
        color :'black',
        marginLeft:10,//Step 2
    },
    
     base64: {
    
    height: 100,
    width: 100,
  },//St
    
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    },
    containerb: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
    button: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#272822',
      //color: 'white'
  },
   buta:{
            flexDirection:'row', 
            flex:1,//Step 1
            justifyContent:'center',
            alignItems:'center',
            marginTop:5
}, 
    
});
