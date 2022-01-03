/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MeterWrapper = styled.div`
   width: 370px;
   height: 24px;
   border-radius: 8px;
   background: hsla(0, 0%, 50%, 0.15);
   box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;
   position: relative;
   &:after {
     top: 30px;
     position: absolute;
   }
`;

const Progress = styled.div`
  position: absolute;
  width: ${p => (362 * p.value / 100)}px;
  height: 16px;
  background: #4747EB;
  border-radius: 4px ${p=>(p.value>=99 ? 4*(p.value-99) : 0)}px ${p=>p.value>=99 ? 4*(p.value-99) : 0}px 4px;
  background: hsla(240, 80%, 60%, 1);
  top: 4px;
  left: 4px;
`;

const ProgressBar = ({ value, size }) => {
  const adjustedValue = Math.min(100, Math.max(0, value));
  return <MeterWrapper role="progressbar" aria-valuenow={adjustedValue} aria-valuemin="0" aria-valuemax="100">
    <Progress value={adjustedValue} />
  </MeterWrapper>;
};

export default ProgressBar;
