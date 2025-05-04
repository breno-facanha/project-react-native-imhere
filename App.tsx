import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Fragment } from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventname}> 
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Domingo, 04 de Maio de 2025
      </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao}>Olá mundo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao}>Olá mundo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventname:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10
  },
  textBotao:{
    color: 'white', 
    fontWeight: 'bold'
  }
});
