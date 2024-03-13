import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';

const Teste2 = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setInputText(text)}
        value={inputText}
        placeholder="Digite aqui"
        onSubmitEditing={addItem} // Chamado quando o usuário pressiona "Enter"
      />
      <Button
        onPress={addItem}
        title="Adicionar"
      />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default Teste2;
