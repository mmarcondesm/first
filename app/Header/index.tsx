import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
/* Declaração de variável StatusBarHeight onde está a condicional de tamanho
do  */
export default function Header({name}) {


return(
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.username}>Matheus Marcondes</Text>

            <TouchableOpacity activeOpacity={0.9} style={styles.buttonuser}>
                <Feather name='user' size={27} color="#fff"/>
                

            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonuser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignContent: 'center',
        paddingStart: 9,
        borderRadius: 44/2
    }
})