import React, { useState, useEffect } from "react";
import { Container, Text, Fab, Button, Spinner } from "native-base";

const BucketView = props => {
  const { navigation, route } = props;
  const { bucketId } = route.params;
  const [bucket, setBucket] = useState();
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBucket({
        id: bucketId,
        name: "Bucket " + bucketId,
        users: ["John Doe", "Mary Jane", "Galbi"],
        transactions: [
          {
            user: ["John Doe"],
            amount: -20
          },
          {
            user: ["Mary Jane"],
            amount: +50
          },
          {
            user: ["Galbi"],
            amount: +100
          }
        ]
      });
      setReady(true);
    }, 2000);
  });
  return (
    <Container style={styles.container}>
      {isReady?
      <Text>{bucketId}</Text>
        :
        <Spinner/>
      }
    </Container>
  );
};
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  }
};

export default BucketView;
