import React, { useState, useEffect } from "react";
import { Modal } from "react-native";
import {
  View,
  Title,
  Text,
  Form,
  Button,
  Item,
  Input,
  Label
} from "native-base";

const NewTransaction = ({ bucketId, isActive, setVisible }) => {
  const onClose = () => {
    setVisible(false);
  };
  const [data, setData] = useState({
    bucketId
  });
  const onAmountChanged = text => {
    if (text.length) {
      let amount = text.replace(/[^0-9]/g, "");
      setData({
        ...data,
        amount
      });
    }
  };
  const onSubmit = () => {
    // TODO
    setVisible(false);
  };

  return (
    <Modal visible={isActive} animationType="slide" onRequestClose={onClose}>
      <View style={styles.main}>
        <Title>New transaction</Title>
        <Form>
          <Item style={styles.formItem}>
            <Label>Concept</Label>
            <Input placeholder={"Concept"} />
          </Item>
          <Item style={styles.formItem}>
            <Label>Amount</Label>
            <Input
              keyboardType={'numeric'}
              onChange={text => onAmountChanged(text)}
              placeholder={"Amount"}
              value={data.amount}
            />
          </Item>
          <Item style={styles.formItem}>
            <Label>Description</Label>
            <Input placeholder={"Description"} />
          </Item>
        </Form>
        <Button onPress={onSubmit}>
          <Text>Submit</Text>
        </Button>
      </View>
    </Modal>
  );
};
const styles = {
  main: {
    paddingVertical: 40,
    // paddingBottom:80,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  formItem: {
    // flex:1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: 80
  }
};
export default NewTransaction;
