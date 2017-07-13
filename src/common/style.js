/**
 * Created by wangji on 6/21/2017.
 */

import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    button: {
        height: 36,

        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    loginInput: {
        height: 42,
        borderColor: 'gray',
        borderWidth: 1,

        marginTop:2,
        marginLeft:5,
        marginRight:5,

    },

    rowItem:{
        flex: 1,
        flexDirection: 'column',

        marginLeft:5,
        marginRight:5,
        marginTop:5,
    },
    rowInsideItem:{
        flex: 1,
        flexDirection: 'row',
    },

    rowSeparator:{
        height:1,
        backgroundColor:"black"
    },
    rowText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    rowStyle: {
        backgroundColor: '#333333',
        flex: 1,
        height: 100,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});