import React from 'react';
import { Photo } from '../../../components/photo/Photo.ts';
import mobilImg from '../../../assets/homePageImg/mobile-screens.png';
import { FlexContainer } from '../../../components/FlexContainer.ts';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle.ts';
import { S } from './StyledMobileApp.ts';
import { Text } from '../../../components/text/Text.ts';
import { Button } from '../../../components/button/Button.ts';
import { Icon } from '../../../components/icon/Icon.tsx';
import { theme } from '../../../styles/Theme.ts';

export const MobileApp: React.FC = () => {
  return (
    <S.MobileApp>
      <FlexContainer justify={'space-between'} wrap={'wrap'}>
        <S.ContentWrap>
          <SectionTitle id="app">
            <span>Download</span> our apps to start ordering
          </SectionTitle>
          <Text color={theme.colors.text.dark}>
            Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever
            you are
          </Text>
          <S.ButtonWrap>
            <Button padding={'12px 20px'} color={theme.colors.text.dark}>
              <Icon
                iconId={'apple'}
                width={'36px'}
                height={'36px'}
                viewBox={'0 0 36 36'}
                fill={theme.colors.text.dark}
              />
              <S.TitleButtonWrap>
                Available on the
                <Text weight={'600'}>App Store</Text>
              </S.TitleButtonWrap>
            </Button>
            <Button padding={'12px 20px'} color={theme.colors.text.dark}>
              <Icon
                iconId={'googlePlay'}
                width={'36px'}
                height={'36px'}
                viewBox={'0 0 36 36'}
                fill={theme.colors.text.dark}
              />
              <S.TitleButtonWrap>
                Available on
                <Text weight={'600'}>Google Play</Text>
              </S.TitleButtonWrap>
            </Button>
          </S.ButtonWrap>
        </S.ContentWrap>
        <S.ImgWrap>
          <Photo src={mobilImg} alt={'mobile'} width={'630px'} height={'630px'} />
        </S.ImgWrap>
      </FlexContainer>
    </S.MobileApp>
  );
};
