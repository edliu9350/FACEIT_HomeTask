import styled from 'styled-components';
import theme from '../../../theme';

export const StyledTournament = styled.div`
  box-sizing: border-box;
  background: ${theme.palette.background.base};
  padding: ${theme.spacing(4)};
  width: calc(33.33% - 16px);
  border-radius: ${theme.spacing(1)};
  color: ${theme.palette.text.primary};

  @media (max-width:959px) {
    width: calc(50% - 12px);
    min-width:175px;
  }
`;


export const StyledButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  margin: ${theme.spacing(2)} ${theme.spacing(2)} 0 0;
`;