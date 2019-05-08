import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';
import RequirementsComponent from './RequirementsComponent'


export default class PowerComponent extends Component {
    render() {
        return (
            <View style={styles.rowContainer}>
                <View>
                    <View style={styles.requirementsColumn}>
                        <RequirementsComponent requirements={this.props.power.requirements} elements={this.props.elements}></RequirementsComponent>
                    </View>
                </View>
                <View>
                    <View style={styles.descriptionColumn}>
                        <Text style={this.props.power.powerActive(this.props.elements) ? styles.active : styles.inactive} title='description'>{this.props.power.description}</Text>
                    </View>
                </View>
            </View>
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
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        paddingBottom: 10
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    requirementsColumn: {
        flex: 1,
        width: Dimensions.get('window').width/3*1,
    },
    descriptionColumn: {
        flex: 1,
        width: Dimensions.get('window').width/3*2,
    }
});

AppRegistry.registerComponent('SpiritIsland', () => PowerComponent);

