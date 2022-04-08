import React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import Style from './style'

export default function Button(props) {
    return (
        <TouchableHighlight
            style={Style.btn}
            onPress={(ev) => {
                if (props.displayNumber === '0' || props.clearDisplay) {
                    props.setDisplayNumber(props.label)
                    props.setClearDisplay(false)
                }
                else {
                    props.setDisplayNumber(`${props.displayNumber + props.label}`)
                    props.setClearDisplay(false)
                }
            }}
        >
            <Text style={Style.text}>{props.label}</Text>
        </TouchableHighlight>
    )
}