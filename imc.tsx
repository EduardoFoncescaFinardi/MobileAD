import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const pesoFloat = parseFloat(peso);
      const alturaFloat = parseFloat(altura);
      
      const imc = pesoFloat / (alturaFloat * alturaFloat);
      setResultado (imc);
    } else {
        setResultado(null);
    }
  };

  return (
    <View>
      <Text >Peso (kg):</Text>
      <TextInput onChangeText={setPeso} value={peso} keyboardType="numeric"/>
      <Text>Altura (m):</Text>
      <TextInput onChangeText={setAltura} value={altura} keyboardType="numeric"/>
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {resultado && <Text>Seu IMC é: {resultado}</Text>}
    </View>
  );
};

export default CalculadoraIMC;
