import React from 'react';
import {Card, CardItem, Text, Body} from 'native-base';
import {TouchableOpacity} from "react-native";
import styled from 'styled-components';
const Amount = styled(Text)`
  
`;
const Bucket = ({data}) => {

  return(
    <Card style={styles.card} >
      <TouchableOpacity
        onPress={()=>{alert('Hi')}}
      >
        <CardItem header>
          <Text style={styles.header}>{data.title}</Text>
        </CardItem>
        <CardItem>
          <Text>{`${data.amount} ${data.currency}`}</Text>
        </CardItem>
      </TouchableOpacity>
    </Card>
  )
};
const styles = {
  card:{
    width:'100%',

  },
  header:{
    fontWeight: 'bold',
    fontSize:18
  }

};
export default Bucket;
