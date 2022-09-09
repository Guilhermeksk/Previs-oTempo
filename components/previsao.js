import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Tempo(props) {
  let data = props.data;

  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Cidade: {data.city_name}</Text>
        <Text style={styles.texto}>Descrição: {data.description}</Text>
        <Text style={styles.texto}>Data: {data.date}</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    marginTop: 10
  },
});