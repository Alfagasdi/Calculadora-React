import React, { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

import ButtomComponent from './components/ButtonComponent'
import Display from './components/Display'
import { botoes, buttonType } from './components/buttons'


function App(): React.JSX.Element {

    const listaDeBotoes = botoes

    const [display, setDisplay] = useState('0')
    const [value, setValue] = useState([0, 0])
    const [current, setCurrent] = useState(0)
    const [operation, setOperation] = useState('')
    const [clearDisplay, setClearDisplay] = useState(false)

    function showButtons() {
        return listaDeBotoes.map((b) => {
            return <ButtomComponent key={b.valor} keys={b} onClick={performClick} />
        })
    }

    function performClick(newValue: buttonType) {
        if (newValue.tipo == 'operador') {
            callOperation(newValue.valor)
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

    function updateDisplay(newState: string) {
        console.log(newState, {clearDisplay})
        const values = [...value]
        let newDisplay = value[current].toString()
        if (clearDisplay) {
            setDisplay(newState)
            values[current] = parseFloat(newState)
            setValue(values)
            setClearDisplay(false)
        }
        else if (newState === '.' && display.includes('.')) {
            return
        }
        else if (display === '0' && newState !== '.') {
            newDisplay = newState
            values[current] = parseFloat(newDisplay)
            setValue(values)
            setDisplay(newDisplay)
        } else {
            newDisplay = display + newState
            values[current] = parseFloat(newDisplay)
            setValue(values)
            setDisplay(newDisplay)
        }
    }

    function cleanDisplay() {
        setDisplay('0')
        setValue([0, 0])
        setCurrent(0)
    }

    function callOperation(operator: string) {
        const avoidEquals = operator.includes('=')
        const newOperator = avoidEquals ? operation : operator
        const newPosition = avoidEquals ? 0 : 1
        if (current === 0) {
            setClearDisplay(true)
            setCurrent(1)
            setOperation(newOperator)
        }
        else {
            const getValue = [...value]
            try {
                getValue[0] =
                    eval(`${getValue[0]} ${operation} ${getValue[1]}`)
                setDisplay(getValue[0].toString())
            } catch (error) {
                console.warn(error)
            }
            getValue[1] = 0
            setValue(getValue)
            setCurrent(newPosition)
            setClearDisplay(!avoidEquals)

        }
    }
    function showResult() {
        callOperation('=')
    }
    return (
        <SafeAreaView style={styles.base}>
            <Display display={display} />
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
