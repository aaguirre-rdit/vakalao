import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const SceneTitle  = styled(Text)`
  text-align:left !important;
  font-size:18px;
  font-weight:bold;
  color:#560027;
`;
const InstructionText = styled(Text)`
  font-size:15px;
  font-weight:400;
  color: #333;
  lineHeight:20px;
`;
module.exports ={
  SceneTitle,
  InstructionText
};
