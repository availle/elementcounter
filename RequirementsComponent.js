import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text, Image } from 'react-native';
import wilds from './assets/Wilds.gif'
import air from './assets/Air.gif'
import earth from './assets/Earth.gif'
import fire from './assets/Fire.gif'
import moon from './assets/Moon.gif'
import water from './assets/Water.gif'
import nature from './assets/Nature.gif'
import sun from './assets/Sun.gif'

export default class RequirementsComponent extends Component {
    images = {
        sun: sun,
        moon: moon,
        fire: fire,
        air: air,
        water: water,
        earth: earth,
        nature: nature,
        wild: wilds
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.rowContainer}>

                {Object.keys(this.props.requirements).map((key, index) => {
                    return (
                        <View key={index} style='columnContainer'>
                            <Image
                                style={styles.elementDisplayed}
                                source={this.images[key]}
                            />
                            <Text style={styles.text}>{Math.max(parseInt(this.props.requirements[key]) - parseInt(this.props.elements[key]), 0)}</Text>
                            </View>
                    )
                })}
            </View>)
    }
}

const styles = StyleSheet.create({
    elementDisplayed: {
        flex: 0,
        borderRadius: 25,
        alignSelf: 'center',
        alignItems: 'center',
        width: 25,
        height: 25
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        fontSize: 15,
        alignSelf: 'center'
    }
})

AppRegistry.registerComponent('SpiritIsland', () => Requirements);