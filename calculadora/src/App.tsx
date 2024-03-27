import React, { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

import ButtomComponent from './components/ButtonComponent'
import Display from './components/Display'
import { botoes, buttonType } from './components/buttons'


function App(): React.JSX.Element {

    const listaDeBotoes = botoes

    const [state, setState] = useState('0')
    function showButtons() {
        return listaDeBotoes.map((b) => {
            return <ButtomComponent key={b.valor} keys={b} onClick={performClick} />
        })
    }

    function performClick(newValue: buttonType) {
        if (newValue.tipo == 'operador') {
            setOperation()
        }
        if (newValue.tipo == 'limpar') {
            cleanDisplay()
        }
        if (newValue.tipo == 'numerico') {
            updateDisplay(newValue.valor)
        }
        if (newValue.tipo == 'resultado') {
            showResult()
        }
    }

    function updateDisplay(newState: any) {
        setState(state + newState)
    }

    function cleanDisplay() {
        setState('0')
    }
    function setOperation() {
        console.warn("TODO")
    }
    function showResult() {
        console.warn("TODO")
    }
    return (
        <SafeAreaView style={styles.base}>
            <Display display={state} />
            <View style={styles.keyBoard}>
                {showButtons()}
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    keyBoard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#000'
    }
})

export default App
