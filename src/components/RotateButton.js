import React from 'react';
import { StyledRotateButton } from './Styles/StyledRotateButton';
const RotateButton = ({ callback }) => (
    <StyledRotateButton onClick={callback} >Rotate</StyledRotateButton>
)

export default RotateButton; 