import React, { Component } from 'react'
import { Text, View , Image , StyleSheet} from 'react-native'
import Colors from '../../Utils/Colors'

export class LoginScreen extends Component {
  render() {
    return (
      <View>
    <Image 
        source =  { require('./../../../assets/rocket.jpg')}

        style ={{ width: '100%' ,
        height:400 , objectFit:'cover'}}
    />
    <View style ={{padding:20}}>
        <Text style={{fontSize:45 , fontWeight:'bold'}}>Welcome to   <br/>
        <Text  style={{color:Colors.PRIMARY}}>
          Lets-Learn
        </Text></Text>
        <Text style={{  fontSize:20 , color:Colors.GREY , marginTop:7}}>Learm Programming to Built real-time Project</Text>
        <View>
        <Text  style={{ textAlign:'center' , fontSize:18 , color:Colors.WHITE}}>Sign In</Text>
        </View>
    </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({

    button : 
    {
        padding:20 ,
        backgroundColor:Colors.PRIMARY,
        marginTop: 8 ,
        borderRadius:99

    }
})

export default LoginScreen
