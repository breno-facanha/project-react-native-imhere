import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native';

import { Participant } from '../../components/Participant';

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

      <View style={styles.form}>
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
      </View>

      <Participant name="Breno"/>
      <Participant name="Samara"/>
      <Participant name="Sofia"/>
      <Participant name="Bento"/>
      
      <StatusBar style="auto" />
    </View>
  );
}