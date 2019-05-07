import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import ElementComponent from './ElementComponent';
import PowerComponent from './PowerComponent';
import Spirits from './Spirits.json'
import Power from './model/Power';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.elementChanged = this.elementChanged.bind(this)
    this.spiritChanged = this.spiritChanged.bind(this)
    this.mapPowers = this.mapPowers.bind(this)
    this.mapSpirits = this.mapSpirits.bind(this)
    this.spirits = {}
    Object.keys(Spirits).map(spiritName => {
      this.spirits[spiritName] = Spirits[spiritName].map(power => { 
        return new Power(power.requirements, power.description) })
    })
    this.state = {
      spirit: 'Thunderspeaker',
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
    return (
      <View style={styles.outerContainer}>
        <View style={styles.elements}>
          <ElementComponent color='yellow' elementChanged={(count) => { this.elementChanged('sun', count) }}></ElementComponent>
          <ElementComponent color='white' borderColor='black' borderWidth={0.5} elementChanged={(count) => { this.elementChanged('moon', count) }}></ElementComponent>
          <ElementComponent color='orange' elementChanged={(count) => { this.elementChanged('fire', count) }}></ElementComponent>
          <ElementComponent color='purple' elementChanged={(count) => { this.elementChanged('air', count) }}></ElementComponent>
          <ElementComponent color='blue' elementChanged={(count) => { this.elementChanged('water', count) }}></ElementComponent>
          <ElementComponent color='grey' elementChanged={(count) => { this.elementChanged('earth', count) }}></ElementComponent>
          <ElementComponent color='green' elementChanged={(count) => { this.elementChanged('nature', count) }}></ElementComponent>
          <ElementComponent color='red' elementChanged={(count) => { this.elementChanged('wild', count) }}></ElementComponent>
        </View>
        <Picker
          selectedValue={this.state.spirit}
          style={{ height: 50, width: '100%' }}
          onValueChange={this.spiritChanged}>
        {this.mapSpirits()}
        </Picker>
        <View style={styles.powers}>
          {this.mapPowers()}
        </View>
      </View>
    );
  }

  mapPowers() {
    return this.spirits[this.state.spirit].map((pow, idx) => {
      return <PowerComponent key={idx} power={pow} elements={this.state.elements}></PowerComponent>
    })
  }

  mapSpirits() {
    return Object.keys(this.spirits).map((spirit, idx) => {
      return <Picker.Item key={idx} label={spirit} value={spirit} />
     })
  }

  spiritChanged(spiritName) {
    this.setState((prevState) => {
      const newState = prevState
      newState.spirit = spiritName
      return newState
    })
  }

  elementChanged(item, count) {
    this.setState((prevState) => {
      const newState = prevState
      newState.elements[item] = count
      return newState
    })
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  elements: {
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'

  },
  powers: {
    flex: 1,
    flexGrow: 1,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  }
});
