import React, {useState} from 'react';
import { Modal } from 'react-native';
import { Input, Item, Text, Button, Icon, Content } from 'native-base';
import { InstructionText, SceneTitle } from '../components/textComponents';
const  SyncBucketModal = (props)=> {
  const [bucketKey,setKey] = useState(null);
  return(
    <Modal
      animationType="slide"
      visible={props.modalVisible}
      onRequestClose={() => {
        props._setModalVisible(false)
      }}
    >
      <Content contentContainerStyle={styles.container}>
        <SceneTitle style={{paddingTop:50}}>Synchronize with bucket</SceneTitle>
        <Content contentContainerStyle={{flex:4, alignItems:'center',justifyContent:'center'}}>
        <InstructionText>
          Enter the key of an existing bucket
        </InstructionText>
        <Item>
          <Input
            onBlur={(text)=>setKey(text)}
            //defaultValue={'Bucket Key'}
            placeholder={'Bucket Key'}/>
        </Item>
        </Content>
        <Content contentContainerStyle={styles.buttonContainer}>
        <Button
          onPress={()=>props.setModalVisible(false)}
          transparent light>
          <Text>Close</Text>
        </Button>
        <Button
          style={{backgroundColor:'#00838f'}}
          rounded primary>
          <Text>Sync</Text>
        </Button>
        </Content>
      </Content>
    </Modal>
  )
};
const styles = {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    flex:1,
    padding:30
  }
};
export default SyncBucketModal;
