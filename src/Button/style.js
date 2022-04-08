import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    btn: {
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        padding: 10,
        backgroundColor: '#1c1c1c',
        borderRadius: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 2,
    },
    btnGreen: {
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        padding: 10,
        backgroundColor: '#009100',
        borderRadius: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 2,
        marginBottom: 2
    },
    btnGreenText: {
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        padding: 0,
        backgroundColor: '#1c1c1c',
        borderRadius: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 2
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    textGreen: {
        marginTop: -4,
        fontSize: 35,
        textAlign: 'center',
        color: '#009100'
    },
    textRed: {
        marginTop: -4,
        fontSize: 35,
        textAlign: 'center',
        color: '#FA3347'
    }
})