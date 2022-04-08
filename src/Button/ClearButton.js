import React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import Style from './style'

export default function ClearButton(props){
    return(
        <TouchableHighlight
            style={Style.btnGreenText}
            onPress={() => {
                props.setDisplayNumber('0')
                props.setOperation(null)
                props.setValues([0, 0])
                props.setCurrent(0)
                props.setClearDisplay(false)
            }}
        >
            <Text style={Style.textRed}>{props.label}</Text>
        </TouchableHighlight>
    )
}