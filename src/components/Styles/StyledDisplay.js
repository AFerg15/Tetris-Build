import styled from 'styled-components';

export const StyledDisplay = styled.div`
  align-items: center; 
  margin: 0 0 20px 0;
  width: 100%;
  border: 4px solid #333;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1px;
`;