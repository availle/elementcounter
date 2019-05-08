import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, Vibration, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ElementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
    this.clickedOnPlus = this.clickedOnPlus.bind(this)
    this.clickedOnMinus = this.clickedOnMinus.bind(this)
  }

  counter = 0
  render() {
    return (
      <View style={styles.elementContainer}>
        <Icon
          name='plus'
          color='grey'
          iconStyle={styles.plusMinus}
          onPress={this.clickedOnPlus}
          size={40}
          title='+'
        />
        <Image
        source={this.props.image}
          style={styles.elementDisplayed}
          borderColor={this.props.borderColor}
          borderWidth={this.props.borderWidth}
        />
        <Icon
          name='minus'
          color='grey'
          iconStyle={styles.plusMinus}
          onPress={this.clickedOnMinus}
          size={40}
        />
        <Text style={styles.text}>{this.state.counter}</Text>
      </View>
    );
  }
  clickedOnPlus() {
    Vibration.vibrate(10)
    this.props.elementChanged(this.state.counter + 1)
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    })
  }

  clickedOnMinus() {
    Vibration.vibrate(10)
    this.props.elementChanged(this.state.counter -1)
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      }
    })
  }
}

const styles = StyleSheet.create({
  elementDisplayed: {
    flex: 0,
    borderRadius: 25,
    alignSelf:'center',
    width: 30,
    height: 30
  },
  elementContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
   },
  plusMinus: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    flex: 1,
    fontSize: 20
  }
})
// skip this line if using Create React Native App
AppRegistry.registerComponent('SpiritIsland', () => Element);