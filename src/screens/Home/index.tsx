import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Fragment } from 'react'
import { styles } from './style';

export default function Home() {
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