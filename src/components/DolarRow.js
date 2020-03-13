import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { formatDate } from '../helpers/functions';

export default class DolarRow extends Component {
    render() {
        const {
            dollar
        } = this.props;
        return (
            <View style={styles.item}>
                <View style={styles.row}>
                    <View style={styles.thirdView}>
                        <Text style={styles.subtitle}>Data</Text>
                        <Text style={styles.value}> {formatDate(dollar.date)} </Text>
                    </View>
                    <View style={styles.thirdView}>
                        <Text style={styles.subtitle}>Compra</Text>
                        <Text style={styles.value}> {dollar.bidvalue} </Text>
                    </View>
                    <View style={styles.thirdView}>
                        <Text style={styles.subtitle}>Venda</Text>
                        <Text style={styles.value}>{dollar.askvalue} </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.thirdView}>
                        <Text style={styles.subtitle}>Max.</Text>
                        <Text style={styles.value}> {dollar.maxbid} </Text>
                    </View>
                    <View style={styles.thirdView}>
                        <Text style={styles.subtitle}>Min.</Text>
                        <Text style={styles.value}> {dollar.minbid} </Text>
                    </View>
                    <View style={styles.thirdView}>
                        <Text style={styles.subtitle}>Var.</Text>
                        <Text  style={{...styles.value, color: (dollar.variationpercentbid > 0 ? '#20c634' : '#d5150b')}}> {dollar.variationpercentbid} <Text style={styles.subtitle}>%</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242424'
    },
    subtitle: {
      fontSize: 10,
      textAlign: 'left',
      color: '#afafaf',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center'
    },
    halfView: {
      width:'50%',
      
    },
    thirdView: {
      width:'33%'
    },
    value: {
      fontSize: 12,
      textAlign: 'left',
      color: '#FFFFFF',
    },
    item:{
        borderBottomColor:'#444',
        borderBottomWidth:1,
        margin:3,
        padding:3
    }
  });
  
