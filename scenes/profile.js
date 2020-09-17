import React, {useEffect} from 'react';
import { Container, Icon, Button, Text, Right, Thumbnail, Card, CardItem, Body} from 'native-base';
import { SceneTitle } from '../components/textComponents';

export default function Profile() {
  return (
    <Container
      style={{padding:20}}
      contentContainerStyle={styles.container}>
      <SceneTitle
        style={{paddingTop:30}}
      > My profile </SceneTitle>
      <Card>
        <CardItem >

          <Body style={{
            padding:10,
            alignItems:'flex-end'
          }} >
            <Text>
              Name
            </Text>
          <Text>
            Location
          </Text>
          </Body>
          <Thumbnail
            source={{uri: 'https://pmcwwd.files.wordpress.com/2018/03/rexfeatures_9360029v.jpg?crop=0px%2C94px%2C3550px%2C2370px&resize=640%2C415'}} />
        </CardItem>
      </Card>
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

