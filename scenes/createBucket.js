import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content, Form, Item, Input, Label, Picker, Icon } from "native-base";

import {StatusBar} from "expo-status-bar";
import {SceneTitle} from '../components/textComponents'

export default function CreateBucket() {
  return (
    <Content contentContainerStyle={styles.container}>
      <SceneTitle>New bucket</SceneTitle>
      <Form>
        <Item
          style={styles.item}
          floatingLabel>
          <Label>Bucket Name</Label>
          <Input/>
        </Item>
      <Item
        floatingLabel
        style={styles.item}>
          <Label>Description</Label>
          <Input/>
      </Item>
        <Item
          picker
          >

          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: '87%', height:80 }}
            placeholder="Select currency"
            //placeholderStyle={{ color: "#bfc6ea" }}
            //placeholderIconColor="#007aff"
            //selectedValue={this.state.selected2}
            //onValueChange={this.onValueChange2.bind(this)}
          >
            <Picker.Item label="Euro" value="eur" />
            <Picker.Item label="Dollar" value="usd" />
            <Picker.Item label="Korean Won" value="krw" />
            <Picker.Item label="Japanese Yen" value="jpy" />
          </Picker>
        </Item>
      </Form>
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    display:'flex',
    padding:20,
    paddingRight:30
  },
  item:{
    height:60
  }
});
