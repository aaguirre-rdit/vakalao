import React, { useState, useEffect } from "react";
import {StyleSheet, Text, ScrollView, View, FlatList, TouchableOpacity} from "react-native";
import {SceneTitle} from '../components/textComponents';
import {Card, CardItem} from "native-base";

export default function Home() {
  const [buckets, setBuckets] = useState([
    {
      title: "Bucket 1",
      amount: -325.4,
      currency: "$",
      key:1
    },
    {
      title: "Bucket 2",
      amount: 200.4,
      currency: "$",
      key:1
    },
    {
      title: "Bucket 3",
      amount: 200.4,
      currency: "$",
      key:1
    },
    {
      title: "Bucket 4",
      amount: 200.4,
      currency: "$",
      key:1
    },
    {
      title: "Bucket 5",
      amount: 200.4,
      currency: "$",
      key:1
    },
    {
      title: "Bucket 6",
      amount: 200.4,
      currency: "$",
      key:1
    }
  ]);

  const renderItem = ({item}) => {
    return(
      <Card style={styles.card} >
        <TouchableOpacity
          onPress={()=>{alert('Hi')}}
        >
          <CardItem header>
            <Text style={styles.header}>{item.title}</Text>
          </CardItem>
          <CardItem>
            <Text>{`${item.amount} ${item.currency}`}</Text>
          </CardItem>
        </TouchableOpacity>
      </Card>
    )
  };
  return (
    <View style={{padding:20, paddingTop: 50, flex:1, display:'flex'}}>
      <SceneTitle style={styles.titleStyle}>Buckets</SceneTitle>
      <FlatList
        data={buckets}
        keyExtractor={bucket=> {console.log(bucket.key)}}
        renderItem={renderItem}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  titleStyle:{
    fontSize:18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  card:{
    width:'100%',

  },
  header:{
    fontWeight: 'bold',
    fontSize:18
  }

});
