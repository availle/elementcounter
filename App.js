import React from 'react';
import { StyleSheet, Text, View, Span } from 'react-native';
import ElementComponent from './ElementComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.elementChanged = this.elementChanged.bind(this)
    this.powerActive = this.powerActive.bind(this)
    this.state = {
      elements: {
        sun: 0,
        moon: 0,
        fire: 0,
        air: 0,
        water: 0,
        earth: 0,
        nature: 0,
        wild: 0
      }
    }
  }
  render() {
    console.log(this.powerActive())
    return (
      <View style={styles.container}>
        <ElementComponent color='yellow' elementChanged={(count) => { this.elementChanged('sun', count) }}></ElementComponent>
        <ElementComponent color='white' borderColor='black' borderWidth={0.5} elementChanged={(count) => { this.elementChanged('moon', count) }}></ElementComponent>
        <ElementComponent color='orange' elementChanged={(count) => { this.elementChanged('fire', count) }}></ElementComponent>
        <ElementComponent color='purple' elementChanged={(count) => { this.elementChanged('air', count) }}></ElementComponent>
        <ElementComponent color='blue' elementChanged={(count) => { this.elementChanged('water', count) }}></ElementComponent>
        <ElementComponent color='grey' elementChanged={(count) => { this.elementChanged('earth', count) }}></ElementComponent>
        <ElementComponent color='green' elementChanged={(count) => { this.elementChanged('nature', count) }}></ElementComponent>
        <ElementComponent color='red' elementChanged={(count) => { this.elementChanged('wild', count) }}></ElementComponent>
      </View>
    );
  }

  // display: Power active/inactive
  // Power: has number of elements

  powerActive() {
    const powerRequirements = {
      air: 3,
      water: 1
    }
    for (key of Object.keys(powerRequirements)) {
      if(this.state.elements[key] < powerRequirements[key]){
        return false
      }
    }
    return true
  }


  elementChanged(item, count) {
    console.log('called ' + item + ' count ' + count)
    console.log(this.state)
    this.setState((prevState) => {
      const newState = prevState
      newState.elements[item] = count
      return newState
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '10%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: '10%'
  },
});
