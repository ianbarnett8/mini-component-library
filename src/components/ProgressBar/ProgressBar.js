/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MeterBase = styled.div`
   width: 370px;
   height: 12px;
   border-radius: 4px;
   background: hsla(0, 0%, 50%, 0.15);
   box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;
   position: relative;
`;

const LargeMeter = styled(MeterBase)`
   height: 24px;
   border-radius: 8px;
`;
const MediumMeter = styled(MeterBase)`
   height: 12px;
   border-radius: 4px;
`;
const SmallMeter = styled(MeterBase)`
   height: 8px;
   border-radius: 4px;
`;

const meters = {
  small: SmallMeter,
  medium: MediumMeter,
  large: LargeMeter
};

const Progress = styled.div`
  position: absolute;
  ${SmallMeter} & {
    height: 8px;
    width: ${p => (370 * (p.value / 100))}px;
  }
  ${MediumMeter} & {
    height: 12px;
    width: ${p => (370 * (p.value / 100))}px;
  }
  ${LargeMeter} & {
    height: 16px;
    top: 4px;
    left: 4px;
    width: ${p => (362 * (p.value / 100))}px;
  }
  background: #4747EB;
  border-radius: 4px ${p=>(p.value>=99 ? 4*(p.value-99) : 0)}px ${p=>p.value>=99 ? 4*(p.value-99) : 0}px 4px;
  background: hsla(240, 80%, 60%, 1);
`;

const ProgressBar = ({ value, size }) => {
  const adjustedValue = Math.min(100, Math.max(0, value));
  const Meter = meters[size] || MediumMeter;
  
  return <Meter size={size} role="progressbar" aria-valuenow={adjustedValue} aria-valuemin="0" aria-valuemax="100">
    <Progress value={adjustedValue} />
  </Meter>;
};

export default ProgressBar;
