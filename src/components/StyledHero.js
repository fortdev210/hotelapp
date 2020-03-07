import styled from 'styled-components';
import defaultImg from '../assets/images/room-1.jpeg';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHero;