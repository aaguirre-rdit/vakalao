import React, { useState, useEffect } from 'react';
import {Container, Text} from "native-base";

const BucketView = props => {
  const {navigation, route} = props;
  const { bucketId } = route.params;
  return (
    <Container
      style={styles.container}
    >
      <Text>
        {bucketId}
      </Text>
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

export default BucketView;
