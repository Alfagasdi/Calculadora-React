import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

import { buttonType } from './buttons'

function ButtomComponent(props: { keys: buttonType, onClick: any }): React.JSX.Element {

    let estiloDosBotos = styles.buttons
    if (props.keys.tipo.includes('operador')) { estiloDosBotos = (styles.operation) }
    if (props.keys.tipo.includes('numerico')) { estiloDosBotos = (styles.numeric) }
    if (props.keys.tipo == 'resultado') { estiloDosBotos = (styles.result) }
    if (props.keys.tipo == 'limpar') { estiloDosBotos = (styles.clean) }
    return (
        <TouchableHighlight onPress={() => { props.onClick(props.keys) }}>
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
        borderRadius: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#777'
    },
    operation: {
        fontSize: 36,
        fontWeight: 'bold',
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width / 4) - 4,
        padding: 20,
        margin: 2,
        borderRadius: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#777',
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    numeric: {
        fontSize: 36,
        fontWeight: 'bold',
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width / 4) - 4,
        padding: 20,
        margin: 2,
        borderRadius: 20,
        textAlign: 'center',
        borderColor: '#777',
        borderWidth: 1,
        backgroundColor: '#d3d3d3',
        color: '#000',
    },
    result: {
        fontSize: 36,
        fontWeight: 'bold',
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width / 4) - 4,
        padding: 20,
        margin: 2,
        borderRadius: 20,
        textAlign: 'center',
        borderColor: '#777',
        borderWidth: 1,
        backgroundColor: '#00ff00',
        color: '#fff',
    },
    clean: {
        fontSize: 36,
        fontWeight: 'bold',
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width / 4) - 4,
        padding: 20,
        margin: 2,
        borderRadius: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#777',
        backgroundColor: '#ff5000',
        color: '#fff'
    }
})

export default ButtomComponent