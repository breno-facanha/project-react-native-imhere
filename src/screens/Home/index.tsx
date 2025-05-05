import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Alert  } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './style';
import { useState } from 'react';

export default function Home() {
    const[participants, setParticipants] = useState<string[]>([])
    const[participantsName, setParticipantsName] = useState('')




    function handeParticipantAdd(){
        if(participants.includes(participantsName)){
            return Alert.alert("Participante já existe", "Já existe um participante na lista com esse nome")
        }

        setParticipants(prevState => [...prevState, participantsName])
        setParticipantsName('')
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Participante Deletado")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log(`Você clicou em remover participante ${name}`)
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
            onChangeText={text => setParticipantsName(text)}
            value={participantsName}
        />

        <TouchableOpacity style={styles.button} onPress={handeParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>

      {/* <Participant name="Breno" onRemove={() => handleParticipantRemove('Breno')}/> */}
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={( {item} ) => (
            <Participant 
                    key = {item}
                    name={item}
                    onRemove={() => handleParticipantRemove(item)}
                />
        )}
        showsVerticalScrollIndicator={false} 
        ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
                Ninguém chegou ao evento ainda ? Adicione os participantes  a sua lista de presença.
            </Text>
        )}
      />
      
      
    </View>
  );
}