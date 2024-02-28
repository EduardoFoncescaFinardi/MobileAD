import {SectionList, View, Text} from 'react-native';

const DATA = [
  {
    id:1,
    title: 'Main dishes',
    data: ['Pizza', 'Burguer', 'Risotto']
  },
  {
    id:2,
    title:'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
  },
  {
    id:3,
    title:'Drinks',
    data:['Water', 'Beer', 'Coke']
  }
];

const Header = ({title}: {title: string}) => {
  return (
    <View>
      <Text style = {{fontSize:20, fontWeight: 'bold'}}>
        {title}
      </Text>
    </View>  
  )
}

const Item = ({title}: {title:string}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>  
  )
}

const MySectionList = () => {
  return(
    <SectionList
      sections={DATA}
      renderSectionHeader={item => <Header title={item.section.title} />}
      renderItem={({ item }) => <Item title={item} />}
    />
  )
}

export default MySectionList;