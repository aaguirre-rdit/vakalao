import React, {useEffect} from 'react';
import { Container, Icon, Button, Text} from 'native-base';
import { SceneTitle } from '../components/textComponents';

export default function Profile() {
  return (
    <Container
      style={{padding:20}}
      contentContainerStyle={styles.container}>
      <SceneTitle
        style={{paddingTop:30}}
      > My profile </SceneTitle>
    </Container>
  )
};

const styles = {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  },
};

