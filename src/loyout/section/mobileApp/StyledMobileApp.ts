import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer.ts';
import { theme } from '../../../styles/Theme.ts';
import { Photo } from '../../../components/photo/Photo.ts';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle.ts';
import { Button } from '../../../components/button/Button.ts';
import { Text } from '../../../components/text/Text.ts';

const MobileApp = styled.section`
  ${FlexContainer} {
    gap: 100px;
    @media ${theme.media.desktop} {
      justify-content: center;
    }
    @media ${theme.media.mobile} {
      gap: 40px;
    }
  }
`;
const ImgWrap = styled.div`
  @media screen and (max-width: 712px) {
    ${Photo} {
      width: 348px;
      height: 348px;
    }
  }
`;

const ContentWrap = styled.div`
  max-width: 630px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  row-gap: 40px;

  ${SectionTitle} {
    margin-bottom: 0;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;

  ${Button} {
    font-size: 10px;
    line-height: 140%;
    display: flex;
    justify-content: start;
    column-gap: 8px;
    border-color: ${theme.colors.border.dark};

    &:hover {
      svg {
        fill: ${theme.colors.text.light};
      }
    }
  }

  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`;
const TitleButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  ${Text} {
    color: currentColor;
  }
`;

export const S = {
  MobileApp,
  ImgWrap,
  ContentWrap,
  ButtonWrap,
  TitleButtonWrap,
};
