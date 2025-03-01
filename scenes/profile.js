import React, {useEffect, useState} from 'react';
import { Container, Icon, Button, Text, Right, Thumbnail, Card, CardItem, Body, Label, View} from 'native-base';
import { SceneTitle } from '../components/textComponents';
import {useSafeArea} from "react-native-safe-area-context";
import styled from 'styled-components';

const BoldLabel = styled(Label)`
  font-weight:bold;
  align-self:flex-start;
`;
export default function Profile() {
   let [profile, setProfile] = useState({
     name:'John Doe',
     email:'johndoe@gmail.com',
    image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'  });
  return (
    <View
      style={{padding:20, paddingTop:60,flex:1}}>


      <Card
        style={styles.card}
      >
        <SceneTitle
          style={{paddingTop:30}}
        > My profile </SceneTitle>
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

        </CardItem>
        <CardItem
          style={
            {
              flexDirection:'column',
              minHeight:80,
              justifyContent:'stretch'
            }
          }
        >
          <BoldLabel

          >
            Email
          </BoldLabel>
          <Body
            style={styles.cardBody}
          >
            <Text
            >
              {profile.email}
            </Text>
          <Button
            bordered light
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Change email
            </Text>
          </Button>
          </Body>
        </CardItem>
        <CardItem
          style={
            {
              flexDirection:'row',
              justifyContent:'center'
            }
          }
        >
          <Button
            full
            rounded
            bordered
            info
          >
            <Text>
              Change password
            </Text>
          </Button>
        </CardItem>
        <CardItem
          style={
            {
              flexDirection:'row',
              justifyContent:'center'
            }
          }
        >
          <Button

            bordered
            rounded
            danger
          >
            <Text>
              Delete account
            </Text>
          </Button>
        </CardItem>
      </Card>
    </View>
  )
};

const styles = {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  },
  card:{
    minHeight: 200,
    padding:5
  },
  cardBody:{
    paddingVertical:10,
    minHeight:80,
    marginBottom:5,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-between'
  },
  button:{
    height:30
  },
  buttonText:{
    fontSize:14,
  },
  bigBtn:{
    alignSelf:'center',
    margin:'auto'
  }
};

