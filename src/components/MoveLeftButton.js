import React from 'react';
import { StyledMoveLeft } from './Styles/StyledMoveLeft';  
const MoveLeftButton = ({ callback }) => (
    <StyledMoveLeft onClick={callback} >⮐</StyledMoveLeft>
)

export default MoveLeftButton; 