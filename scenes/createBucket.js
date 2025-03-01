import React, {useEffect, useState} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, Form, Item, Input, Label, Picker, Icon, Button } from "native-base";

import {SceneTitle} from '../components/textComponents'
import SyncBucketModal from '../components/SyncBucketModal';

export default function CreateBucket() {
  const [newBucket, setBucket] = useState({
  });
  const [modalVisible, setModalVisible] = useState(false);
  const updateValue = (value,key) => {
    let updated = newBucket;
    updated[key] = value;
    setBucket({updated});
  };

  return (
    <Content contentContainerStyle={styles.container}>
      <SceneTitle>New bucket</SceneTitle>
      <SyncBucketModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <Form>
        <Item
          style={styles.item}
          floatingLabel>
          <Label>Bucket Name</Label>
          <Input
            onBlur={(text) => updateValue(text, 'name')}
          />
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
      <Button
        style={styles.submitBtn}
        rounded
        primary

      >
        <Text
          style={styles.submitBtnText}
        >Submit</Text>
      </Button>
      </Form>
      <Text
        style={{
          marginTop: 40,
          textAlign:'center'
        }}
      >or</Text>
      <Button
        rounded
        primary
        onPress={()=>setModalVisible(true)}
        style={
          {...styles.submitBtn,
          width:200,
          backgroundColor:'#00838f'}}>
        <Text
          style={styles.submitBtnText}
        >Add existing bucket</Text>
      </Button>

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
    paddingRight:30,
    paddingTop:50
  },
  item:{
    height:60
  },
  submitBtn:{
    backgroundColor:'#bc477b',
    width:100,
    alignSelf:'center',
    marginTop:40,
    display:'flex',
    justifyContent:'center'
  },
  submitBtnText:{
    color:'#fff',
    textAlign:'center',
    fontSize:16,
    fontWeight: '500',
    margin:'auto'

  }
});
