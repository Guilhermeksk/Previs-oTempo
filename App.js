import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Tempo } from './components/previsao';
import Api from './components/Api';

export default function App() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Mongagua')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=e6fd4917&city_name=${cidade},SP`)
    setDados(response.data);
  
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoTitulo}>Previsão do tempo</Text>
        <View style={styles.imgs}>
        <Image
      style={styles.imgg}
      source={{
        uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075987.png',
      }}
      />
      </View>
      </View>
      <View style={styles.blocos}>
        <Text style={styles.texto}>cidade: </Text>
        <TextInput
          placeholder='digita sua cidade '
          style={styles.input}
          value={cidade}
          onChangeText={(cidade) => setCidade(cidade)}          
        />
      </View>
      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.blocos}>
        <Tempo  data={dados}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoTitulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#34495E',
  },
  imgg:{
    width: 180,
    height: 100,
    margin: 5,
    borderRadius: 20,
  },
  imgs: {
    alignItems: 'center',
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#34495E',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#34495E'
  },
  btn: {
    width: 265,
    height: 45,
    backgroundColor: '#34495E',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  btnTexto: {
    fontSize: 30,
    color: '#FFF'
  }
});