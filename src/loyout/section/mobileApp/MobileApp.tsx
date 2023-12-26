import React from 'react';
import styled from "styled-components";
import {Photo} from "../../../components/photo/Photo.ts";
import mobilImg from "../../../assets/homePageImg/mobile-screens.png";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.ts";
import {Text} from "../../../components/text/Text.ts";
import {Button} from "../../../components/button/Button.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

export const MobileApp: React.FC = () => {
    return (
        <StyledMobileApp>
            <FlexContainer justify={"space-between"} wrap={"wrap"}>
                <ContentWrap>
                    <SectionTitle id="app"><span>Download</span> our apps to start ordering</SectionTitle>
                    <Text color={theme.colors.text.dark}>Download the Resource app today and experience the comfort of
                        ordering your favorite coffee
                        from wherever you are</Text>
                    <ButtonWrap>
                        <Button padding={"12px 20px"} color={theme.colors.text.dark}>
                            <Icon iconId={"apple"}
                                  width={"36px"}
                                  height={"36px"}
                                  viewBox={"0 0 36 36"}
                                  fill={theme.colors.text.dark}/>
                            <TitleButtonWrap>
                                Available on the
                                <Text weight={"600"}>App Store</Text>
                            </TitleButtonWrap>
                        </Button>
                        <Button padding={"12px 20px"} color={theme.colors.text.dark}>
                            <Icon iconId={"googlePlay"}
                                  width={"36px"}
                                  height={"36px"}
                                  viewBox={"0 0 36 36"}
                            fill={theme.colors.text.dark}/>
                            <TitleButtonWrap>
                                Available on
                                <Text weight={"600"}>Google Play</Text>
                            </TitleButtonWrap>
                        </Button>
                    </ButtonWrap>
                </ContentWrap>
<ImgWrap>
                    <Photo src={mobilImg}
                           alt={"mobile"}
                           width={"630px"}
                           height={"630px"}
                    />
</ImgWrap>
            </FlexContainer>

        </StyledMobileApp>
    );
};

const StyledMobileApp = styled.section`
  ${FlexContainer} {
    gap: 100px;
    @media ${theme.media.desktop} {
      justify-content: center;
    }
    @media ${theme.media.mobile} {
      gap: 40px;
    }
  }
`
 const ImgWrap = styled.div`
 @media screen and (max-width: 712px) {
   ${Photo} {
     width: 348px;
     height: 348px;
   }
 }
 `
 


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
`
const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  
${Button} {
  font-size: 10px;
  font-weight: 600;
  line-height: 140%;
  display: flex;
  justify-content: start;
  column-gap: 8px;
  border-color: ${theme.colors.border.dark};
 &:hover{
   svg{
     fill: ${theme.colors.text.light};
   }
 }
}
  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`
const TitleButtonWrap = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  
  ${Text}{
    color: currentColor;
  }
`