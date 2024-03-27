import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default (props: any) => {


    return (
        <View style={style.display}>
            <Text style={style.calculus}>{props.display}</Text>
            <Text>{props.result}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    display: {
        padding: 8,
        flex:1,
        justifyContent:'center',
        backgroundColor: '#000'
    },
    calculus: {
        fontSize: 40,
        textAlign: 'right',
        color:'#FFF'
    }
})