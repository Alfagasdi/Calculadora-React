import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

import { buttonType } from './buttons'

function ButtomComponent(props: {keys: buttonType, onClick: any}): React.JSX.Element {

    const estiloDosBotos = [styles.buttons]
    if(props.keys.tipo == 'operador'){estiloDosBotos.push(styles.operation)}
    if(props.keys.tipo == 'numerico'){estiloDosBotos.push(styles.numeric)}
    if(props.keys.tipo == 'resultado'){estiloDosBotos.push(styles.result)}
    if(props.keys.tipo == 'limpar'){estiloDosBotos.push(styles.clean)}
    return (
        <TouchableHighlight onPress={() =>{props.onClick(props.keys)}}>
            <Text style={estiloDosBotos}>
                {props.keys.valor}
            </Text>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    buttons: {
        fontSize: 36,
        fontWeight: 'bold',
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width / 4) - 4,
        padding: 20,
        margin: 2,
        borderRadius:20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#777',
    },
    operation:{
        color:'#fff',
        backgroundColor:'#fa8231'
    },
    numeric:{
        backgroundColor: '#d3d3d3',
        color:'#000',
    },
    result:{
        backgroundColor: '#00ff00',
        color:'#fff',
    },
    clean:{
        backgroundColor: '#ff5000',
        color:'#fff'
    }
})

export default ButtomComponent