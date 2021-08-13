import styled from 'styled-components';
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  
aside{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%
  height: 100vh;
  min-height: 100vh;
}

 
`;

