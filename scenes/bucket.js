import React, { useState, useEffect } from "react";
import {
  Container,
  Text,
  Fab,
  Button,
  Spinner,
  Title,
  Icon,
  View
} from "native-base";
import { ScrollView } from "react-native";
import { primaryColor, white } from "../assets/colors";
const BucketView = props => {
  const { navigation, route } = props;
  const { bucketId } = route.params;
  const [bucket, setBucket] = useState();
  const [isReady, setReady] = useState(false);
  const [newTransOpen, setNewTransOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBucket({
        id: bucketId,
        name: "Bucket " + bucketId,
        users: ["John Doe", "Mary Jane", "Galbi"],
        transactions: [
          {
            user: ["John Doe"],
            amount: -20
          },
          {
            user: ["Mary Jane"],
            amount: +50
          },
          {
            user: ["Galbi"],
            amount: +100
          }
        ]
      });
      setReady(true);
    }, 2000);
  });
  return (
    <View style={{ flex: 1 }}>
      {isReady ? (
        <View style={{flex:1}}>

    <ScrollView contentContainerStyle={styles.container}>


        <Container style={styles.bucketMain}>
          <Title>Bucket {bucketId}</Title>
          <Text>{bucket.amount}</Text>
        </Container>

    </ScrollView>
          <Fab
            active={newTransOpen}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => setNewTransOpen(!newTransOpen)}
          >
            <Icon name="add" />

          </Fab>
        </View>
      ) : (
        <Spinner />
      )}
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex"
  },
  bucketMain: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: white,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 20,
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    elevation:-10
  },
  fab:{
    backgroundColor:primaryColor,
    color:white,
    // elevation:10,
    zIndex:10,

  }
};

export default BucketView;
