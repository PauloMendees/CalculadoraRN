import React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import Style from './style'

export default function GreenButton(props){
    return(
        <TouchableHighlight
            style={Style.btnGreen}
            onPress={() => {
                if(props.operation === '+'){
                    props.setCurrent(0)
                    props.setDisplayNumber(props.values[0] + props.values[1])
                    props.setCurrent(1)
                  }
              
                  if(props.operation === '-'){
                    props.setCurrent(0)
                    props.setDisplayNumber(props.values[0] - props.values[1])
                    props.setCurrent(1)
                  }
              
                  if(props.operation === '/'){
                    props.setCurrent(0)
                    props.setDisplayNumber(props.values[0] / props.values[1])
                    props.setCurrent(1)
                  }
              
                  if(props.operation === 'X'){
                    props.setCurrent(0)
                    props.setDisplayNumber(props.values[0] * props.values[1])
                    props.setCurrent(1)
                  }
            }}
        >
            <Text style={Style.text}>{props.label}</Text>
        </TouchableHighlight>
    )
}