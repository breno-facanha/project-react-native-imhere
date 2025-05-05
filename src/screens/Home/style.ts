import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  input:{
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: 16,
    fontSize: 16,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10
  },
  textBotao:{
    color: 'white', 
    fontWeight: 'bold'
  },
  buttonText:{
    color: 'white',
    fontSize: 24,
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
