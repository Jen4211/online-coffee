import styled from 'styled-components';
import { theme } from '../../../styles/Theme.ts';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle.ts';
import { FlexContainer } from '../../../components/FlexContainer.ts';
import { Button } from '../../../components/button/Button.ts';

const Refresh = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${theme.colors.border.dark};

  svg {
    stroke: ${theme.colors.text.dark};
  }

  &:hover {
    svg {
      stroke: ${theme.colors.text.light};
    }
  }
`;
const RefreshWrap = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
`;

const DrinkMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${SectionTitle} {
    max-width: 800px;
    text-align: center;
  }

  ${FlexContainer} {
    gap: 40px;
  }

  @media ${theme.media.mobile} {
    ${Refresh} {
      display: flex;
    }

    ${RefreshWrap} {
      display: flex;
    }
  }
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: ${theme.colors.border.light};
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  margin-bottom: 40px;

  ${Button} {
    display: flex;
    align-items: center;
    column-gap: 8px;
    border-color: ${theme.colors.border.light};

    &:hover {
      ${IconWrap} {
        background-color: ${theme.colors.background.body};
      }
    }
  }
`;
const CardContainer = styled.div`
  max-width: 310px;
  width: 100%;
  max-height: 506px;
  height: 100%;
  border-radius: 40px;
  border: 1px solid ${theme.colors.border.light};
`;
const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 194px;
`;
const TextWrap = styled.div``;

const Title = styled.h3`
  margin-bottom: 12px;
`;
const Price = styled.h3``;
export const S = {
  Refresh,
  RefreshWrap,
  DrinkMenu,
  ButtonContainer,
  CardContainer,
  ContentContainer,
  TextWrap,
  Title,
  Price,
};
