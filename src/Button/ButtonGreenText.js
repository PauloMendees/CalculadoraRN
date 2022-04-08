import React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import Style from './style'

export default function ButtonGreenText(props){
    return(
        <TouchableHighlight
            style={Style.btnGreenText}
            onPress={() => {
                props.setOperation(props.label)
                props.setClearDisplay(true)
                if(props.current === 0){
                    props.setCurrent(1)
                }
                if(props.current === 1){
                    props.setCurrent(0)
                }
            }}
        >
            <Text style={Style.textGreen}>{props.label}</Text>
        </TouchableHighlight>
    )
}