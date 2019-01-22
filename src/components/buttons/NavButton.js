import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Container, Header, Content, Body, Title, Left, Right, Button, Icon} from 'native-base';

export default class NavButton extends Component {
    render(){
        return(
            <Button transparent>
                <Icon style={styles.iconColor} name="menu" />
             </Button>
        );
    }
}

const styles = StyleSheet.create ({
    iconColor: {
        color: '#fff'
      },
});

/*

const styles = StyleSheet.create({

    textPutih:{
      color: "#fff"
    },
    bgColor: {
      backgroundColor: '#97CDD0',
    },
    logoStyle: {
      alignItems: 'center',
      marginTop: 150
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
  */