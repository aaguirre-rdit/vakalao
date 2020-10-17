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
  Label,
  Picker,
  Icon
} from "native-base";

const NewTransaction = ({ bucketId, isActive, setVisible }) => {
  const [data, setData] = useState({
    bucketId
  });
  const onClose = () => {
    setVisible(false);
    setData({
      bucketId
    });
  };
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
    setData({
      bucketId
    });
  };
  const onChangeType = value => {
    if (value.length) {
      setData({
        ...data,
        type: value
      });
    }
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
              keyboardType={"numeric"}
              onChange={text => onAmountChanged(text)}
              placeholder={"Amount"}
              value={data.amount}
            />
          </Item>
          <Item style={styles.formItem}>
            <Label>Transaction type</Label>
            <Picker
              placeholder="Select type"
              style={{
                width: "100%",
                paddingRight: 10
              }}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              iosIcon={<Icon name="arrow-down" />}
              onValueChange={onChangeType}
              selectedValue={data.type}
            >
              <Picker.Item label={"Groceries"} value={"grocery"} />
              <Picker.Item label={"Shopping"} value={"shop"} />
              <Picker.Item label={"Rent"} value={"rent"} />
              <Picker.Item label={"Utilities"} value={"utility"} />
              <Picker.Item label={"Misc."} value={"misc"} />
            </Picker>
          </Item>
          <Item style={styles.formItem}>
            <Label>Description</Label>
            <Input placeholder={"Description"} />
          </Item>
        </Form>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Button onPress={onSubmit}>
            <Text>Submit</Text>
          </Button>
          <Button onPress={onClose} transparent>
            <Text>Cancel</Text>
          </Button>
        </View>
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
