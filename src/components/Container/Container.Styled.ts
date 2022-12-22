import styled from 'styled-components';
import theme from '../../theme';

export const StyledContainer = styled.div`
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;


  @media (max-width:959px) {
    padding:10px;
  }
`;

export const StyledFlexBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`


