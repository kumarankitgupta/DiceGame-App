import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,Pressable } from 'react-native';
import React,{useState} from 'react';
import d1 from './assets/d1.png';
import d2 from './assets/d2.png';
import d3 from './assets/d3.png';
import d4 from './assets/d4.png';
import d5 from './assets/d5.png';
import d6 from './assets/d6.png';

var arr = [d1,d2,d3,d4,d5,d6]
const i1 = require('./assets/d1.png')
const App=()=> {
  var x,y;
  const[dc1,setDice1]=useState(arr[0]);
  const[dc2,setDice2]=useState(arr[0]);
  const[winner,setWinner]=useState('Winner');
 
  const RollTheDice=()=>{
    y = Math.floor(Math.random()*6)+1;
    x = Math.floor(Math.random()*6)+1;
    setDice1(arr[x-1]);
    setDice2(arr[y-1]);
    console.log(x);
    if(x==y){
      setWinner('Both')
    }else if(x>y){
      setWinner('Player 1')
    }
    else{
      setWinner('Player 2')
    }
  }
  return (
    <View style={{backgroundColor:"silver",flex:1,alignItems:'center'}}>
    <SafeAreaView ><Text style={{color:'red',fontWeight:'bold',fontSize:50}} >Dice Game</Text>
    </SafeAreaView>
    <Text style={{fontSize:20}}>By @chiever</Text>
    
    <Image style={styles.dice} source={dc1}/>
    <Text style={styles.player}>Player 1</Text>
    <Image style={styles.dice2} source={dc2}/>
    <Text style={styles.player2}>Player 2</Text>
    <Pressable  style={{top:570}} onPress={RollTheDice}><Text style={styles.roll}>Roll</Text></Pressable>

    <Text style={styles.win}>{winner} Wins!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  v1: {
    flex: 1,
    backgroundColor: 'tomato',
    flex:1,
    margin:15,
  },
  v2:{
    backgroundColor:"gold",
    flex:2,
    margin:15,
  },
  dice:{
    width:200,
    height:200,
    position:"absolute",
    top:200,
  },
  player:{
    position:'absolute',
    top:405,
    fontSize:20,
    fontWeight:'bold',
  },
  dice2:{
    width:200,
    height:200,
    position:"absolute",
    top:450,
    marginTop:20,
    marginBottom:10
  },
  player2:{
    position:'absolute',
    top:675,
    fontSize:20,
    fontWeight:'bold',
  },
  roll:{
    color:"tomato",
    fontSize:50,
    fontWeight:'bold'
  },
  win:{
    top:580,
    fontSize:40
  }
});
export default App;

