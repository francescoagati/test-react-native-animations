import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

import { Animated, View,Button } from 'react-native';

import * as Animatable from 'react-native-animatable';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}



export default class ListThumbnailExample extends Component {

  constructor() {

    super()

    this.state = {
      show_animation:false
    }


  }


  render = () => {


    const elements = [1, 2, 3, 4, 5, 6].map((el) => {

      return (
        //width: 250, height: 50,

        <Animatable.View animation="fadeInUpBig" key={el} delay={200 * el} duration={700}>

          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://lh6.ggpht.com/RSZur8nHabu5-b2sPo42_uVqzDNqCTI8qMlOUIdzwLOBNYwS9cVgffl8AeRMdD7gsio=w300' }} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>


        </Animatable.View>


      )

    })


    let start = <Container key="start">
      <Header />
      <Content>
          <Button title="Start" onPress={ () => this.setState({show_animation:true}) } >
          </Button>
      </Content>
    </Container>

    let list = <Container key="list">
      <Header />
      <Content>
        <List>
          {elements}
        </List>
      </Content>
    </Container>      

  
    return  this.state.show_animation == false ? start:list;
  }
}