import React, { StyleSheet, Text, View } from "react-native";


export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.Item}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>3.000.000,00</Text>
            </View>

            <View style={styles.Item}>
              <Text style={styles.itemTitle}>Gastos</Text>  
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>500.000,00</Text>
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
        color: '#DADADA',
    }, 
    content:{
        flexDirection: 'row',
        alignContent: 'center'
    },
    currentSymbol:{
        color: '#DADADA',
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