import React from 'react';
import { StyledMoveRight } from './Styles/StyledMoveRight';  
const MoveRightButton = ({ callback }) => (
    <StyledMoveRight onClick={callback} > ⮑ </StyledMoveRight>
)

export default MoveRightButton; 