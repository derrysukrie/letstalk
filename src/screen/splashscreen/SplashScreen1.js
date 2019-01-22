import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Container, Header, Content, Body, Title, Left, Right, Button, Icon} from 'native-base';



export default class SplashScreen1 extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.bgColor}> 
            <Body>
             <Image style={styles.logoStyle}source={require('../../assets/img/logo.png')}/>
             <Text style={styles.text1}>Start your stories here!</Text>
            </Body>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({

  textPutih:{
    color: "#fff"
  },
  bgColor: {
    backgroundColor: '#97CDD0',
  },
  logoStyle: {
    alignItems: 'center',
    marginTop: 250,
    alignItems: 'center'
  },
  text1: {
    marginTop: 10,
    alignItems: 'center',
    color: '#0F5652',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 100
  },
  button1: {
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 0
  },
  button2: {
    borderColor: '#fff',
    marginTop: 15,
    borderRadius: 0
  }
});