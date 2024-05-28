// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';
// import Header from './component/Header';
// import ListItem from './component/ListItem';
// import Form from './component/Form';

// export default function App(){

//   const [ListOfItems,SetfListOfItems] = useState([
//     {text: 'Купить молоко', key: '1'},
//     {text: 'Покушать дома', key: '2'},
//     {text: 'Посидеть', key: '3'},
//     {text: 'Поспать', key: '4'},
//     {text: 'Подумать', key: '5'},
//     {text: 'Покодить', key: '6'},
//   ])

//   const AddHandler = (text) => {
//     if (text.trim().length > 0) {
//       SetfListOfItems((list) => {
//         return [
//           { text: text, key: Math.random().toString(36).substring(7) },
//           ...list,
//         ];
//       });
//     } else {
//       Alert.alert('Ошибка', 'Введите текст задачи');
//     }
//   };
  
//   const DeleteHandler = (key) =>{
//     SetfListOfItems((list) =>{
//       return list.filter(ListOfItems => ListOfItems.key != key)
//     })
//   };

//   return(
//     <View>
//       <Header/>
//       <Form AddHandler={AddHandler}/>
//       <View>
//         <FlatList data={ListOfItems} renderItem={({item}) => (
//           <ListItem element={item} DeleteHandler={DeleteHandler} />
//         )}/>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({


// });