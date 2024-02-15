import { theme } from '../../styles/Theme.ts';
import styled from 'styled-components';

type SectionTitlePropsType = {
  align?: string;
  color?: string;
};
export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: ${(props) => props.color || theme.colors.text.dark};
  text-align: ${(props) => props.align || 'start'};
  margin-bottom: 40px;

  span {
    font-style: italic;
    color: ${theme.colors.text.accent};
  }

  @media ${theme.media.mobile} {
    font-size: 32px;
  }
`;
