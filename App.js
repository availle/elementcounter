import React from 'react';
import { StyleSheet, FlatList, View, Picker } from 'react-native';
import ElementComponent from './ElementComponent';
import PowerComponent from './PowerComponent';
import Spirits from './Spirits.json'
import Power from './model/Power';
import wilds from './assets/Wilds.gif'
import air from './assets/Air.gif'
import earth from './assets/Earth.gif'
import fire from './assets/Fire.gif'
import moon from './assets/Moon.gif'
import water from './assets/Water.gif'
import nature from './assets/Nature.gif'
import sun from './assets/Sun.gif'

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
        return {pow: new Power(power.requirements, power.description) }
      })
    })
    this.state = {
      spirit: 'Serpent Slumbering Beneath the Island',
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
          <ElementComponent image={sun}  elementChanged={(count) => { this.elementChanged('sun', count) }}></ElementComponent>
          <ElementComponent image={moon}  elementChanged={(count) => { this.elementChanged('moon', count) }}></ElementComponent>
          <ElementComponent image={fire}  elementChanged={(count) => { this.elementChanged('fire', count) }}></ElementComponent>
          <ElementComponent image={air}  elementChanged={(count) => { this.elementChanged('air', count) }}></ElementComponent>
          <ElementComponent image={water}  elementChanged={(count) => { this.elementChanged('water', count) }}></ElementComponent>
          <ElementComponent image={earth}  elementChanged={(count) => { this.elementChanged('earth', count) }}></ElementComponent>
          <ElementComponent image={nature}  elementChanged={(count) => { this.elementChanged('nature', count) }}></ElementComponent>
          <ElementComponent image={wilds} elementChanged={(count) => { this.elementChanged('wild', count) }}></ElementComponent>
        </View>
        <Picker
          selectedValue={this.state.spirit}
          style={{ height: 50, width: '100%' }}
          onValueChange={this.spiritChanged}>
          {this.mapSpirits()}
        </Picker>
        <FlatList
          data = {this.spirits[this.state.spirit]}
          extraData={this.state}
          renderItem = {({item}) => {
            return <PowerComponent power={item.pow} elements={this.state.elements}></PowerComponent>
          }}
          keyExtractor={(_, index) => index.toString()}
        />
      </View >
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
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 165,
  },
  powers: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'column'
    }
});
