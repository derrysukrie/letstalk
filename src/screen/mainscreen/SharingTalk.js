import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Left,
    Body,
    Right, Form, Textarea,
    Tabs, Tab, TabHeading
 } from 'native-base';
 import Category from '../../components/tabs/Category'
import New from '../../components/tabs/New';

export default class SharingTalk extends Component {
    
    render() {
        return (
            <Container style={styles.color}>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon 
                            name='ios-menu' 
                            style={styles.listMenuColor}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Image 
                        source={require('../../assets/img/headerlogo.png')}/>
                    </Body>
                    <Right />
                </Header>
                <Content>
                <Form>
                    <Textarea 
                    rowSpan={4}
                    bordered placeholder="Write your story..."
                    style={styles.textInput1} />
                   <Textarea 
                    rowSpan={1}
                    bordered placeholder="Categories :"
                    style={styles.textInput2} />
                </Form>
                <Button style={styles.btnStyle}>
                    <Text style={styles.textStyle}>Share</Text>
                </Button>
                <Tabs tabContainerStyle={[{height: 30},{marginTop:20}]}>
                    <Tab heading={ <TabHeading><Text>New</Text></TabHeading>}>
                        <Category />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Category</Text></TabHeading>}>
                        <New />
                    </Tab>
                </Tabs>
            </Content>


                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="home" />
                        </Button>
                        <Button vertical>
                            <Icon name="chatbubbles" />
                        </Button>
                        <Button vertical active>
                            <Icon active name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#97cdd0'
    },
    listMenuColor: {
        color: 'black'
    },
    colors:{
        color: '#fff'
    },
    textInput1: {
        borderRadius: 3,
        backgroundColor: '#fff',
        marginTop: 10,
        margin: 10,
        paddingTop: 10
    },
    textInput2: {
        borderRadius: 3,
        backgroundColor: '#fff',
        fontSize: 11,
        margin: 10,
     
    },
    btnStyle:{
        backgroundColor: '#0f5652',
        height: 28,
        width: 150,
        borderRadius: 2,
        marginLeft: 204,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    textStyle: {
        color: '#fff',
        fontWeight: '800'
    },
    tabStyle: {
        backgroundColor: '#0f5652',
        height:15
    }
});