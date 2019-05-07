import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';


export default class PowerComponent extends Component {
    render() {
        return (
                <Text style={this.props.power.powerActive(this.props.elements) ? styles.active :styles.inactive } title='description'>{this.props.power.description}</Text>
          );
    }

}

const styles = StyleSheet.create({
    active: {
        fontSize: 15,
        color: 'black'
    },
    inactive: {
        fontSize: 15,
        color: 'lightgrey'
    }
  });

  AppRegistry.registerComponent('SpiritIsland', () => PowerComponent);

  