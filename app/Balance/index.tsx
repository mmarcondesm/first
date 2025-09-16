import React, { StyleSheet, Text, View } from "react-native";


export default function Balance({saldo, gasto}) {
    return(
        <View style={styles.container}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View  style={styles.item}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
            </View>

            <View  style={styles.item}> 
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gasto}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
    },
    itemTitle:{
        fontSize: 20,
        color: '#181212ff',
    }, 
    content:{
        flexDirection: 'row',
        alignContent: 'center'
    },
    currencySymbol:{
        color: '#181212ff',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71',
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c'
    }
})