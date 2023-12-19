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
            <FlexContainer justify={"space-between"}>
                <ContentWrap>
                    <SectionTitle><span>Download</span> our apps to start ordering</SectionTitle>
                    <Text color={theme.colors.text.dark}>Download the Resource app today and experience the comfort of
                        ordering your favorite coffee
                        from wherever you are</Text>
                    <ButtonWrap>
                        <Button padding={"12px 20px"} color={theme.colors.text.dark}>
                            <Icon iconId={"apple"}
                                  width={"36px"}
                                  height={"36px"}
                                  viewBox={"0 0 36 36"}/>
                            <TitleButtonWrap>
                                Available on the
                                <Text weight={"600"}>App Store</Text>
                            </TitleButtonWrap>
                        </Button>
                        <Button padding={"12px 20px"} color={theme.colors.text.dark}>
                            <Icon iconId={"googlePlay"}
                                  width={"36px"}
                                  height={"36px"}
                                  viewBox={"0 0 36 36"}/>
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
    column-gap: 100px;
  }
`
const ImgWrap = styled.div`
    

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
  column-gap: 20px;
${Button} {
  font-size: 10px;
  font-weight: 600;
  line-height: 140%;
  display: flex;
  justify-content: start;
  column-gap: 8px;
}
`
const TitleButtonWrap = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`