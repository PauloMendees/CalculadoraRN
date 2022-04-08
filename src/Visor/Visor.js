import React from 'react';
import { SafeAreaView, Text } from 'react-native'
import Style from './style'

export default function Visor(props){
    return(
        <SafeAreaView style={Style.container}>
            <Text style={Style.text}>{props.displayNumber}</Text>
        </SafeAreaView>
    )
}