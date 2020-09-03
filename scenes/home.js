import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bucket from '../components/bucketContainer';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Kaixo!</Text>
      <Bucket
        data={{
          title:'Bucket 1',
          amount:-325.4,
          currency:'$'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
});
