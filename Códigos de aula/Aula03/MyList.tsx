import {FlatList, View, Text} from 'react-native';

const DATA = Array.from({ length: 30}, (x, index) => {
  return {id: index, title: `Item ${index}`}
});

const Item = ({title}: {title: string}) => {
  return (
    <View>
      <Text>Meu nome</Text>
      <Text>{title}</Text>
    </View>  
  )
}

const MyList = () => {
  return (
    <FlatList
      data = {DATA}
      keyExtractor = {(item) => item.id.toString()}
      renderItem = {({ item }) => <Item title = {item.title} />}
      />
  )
}

export default MyList;