import React, {useEffect, useState} from 'react';
import { Container, Icon, Button, Text, Right, Thumbnail, Card, CardItem, Body} from 'native-base';
import { SceneTitle } from '../components/textComponents';
import {useSafeArea} from "react-native-safe-area-context";

export default function Profile() {
   let [profile, setProfile] = useState({
     name:'John Doe',
    image:'https://lh3.googleusercontent.com/proxy/-wlM5QbiCG9noRJi0sDe0j-XOQX2zy_XikY5P8xRbvx85U7FiatP5FuwNVzjZ71-uj-xMwnrjgVURqjmeEQ'
  });
  return (
    <Container
      style={{padding:20}}
      contentContainerStyle={styles.container}>
      <SceneTitle
        style={{paddingTop:30}}
      > My profile </SceneTitle>
      <Card>
        <CardItem >
          <Thumbnail
            large
            source={{uri: profile.image}} />
          <Body style={{
            padding:10,
            alignItems:'flex-end'
          }} >
            <Text>
              {profile.name}
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

