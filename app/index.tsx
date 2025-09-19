import { FlatList, StyleSheet, Text, View } from "react-native";
import Balance from "./Balance";
import Header from "./Header";
import Moviments from "./Moviments";

const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '300,00',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.000,00',
    date: '10/09/2022',
    type: 1
  },
  {
    id: 3,
    label: 'Pix Cliente Y',
    value: '1.800,00',
    date: '10/09/2022',
    type: 1
  },
  {
    id: 4,
    label: 'Conta de Água',
    value: '300,00',
    date: '17/09/2022',
    type: 0
  }
]

export default function Index() {
    
  return (
    <View style={styles.container}>
      <Header name="Matheus Marcondes"/>
      
      <Balance saldo="300.000,00" gasto="-15.000,00" />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Moviments data={item}/> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title:{   
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
})