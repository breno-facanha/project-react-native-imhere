import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native';
import { Fragment } from 'react'
import { styles } from './style';

export default function Home() {

    function handeParticipantAdd(){
        console.log('vc clicou no botão de adicionar')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventname}> 
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Domingo, 04 de Maio de 2025
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'  
        placeholderTextColor="#6B6B6B"
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={handeParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>

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