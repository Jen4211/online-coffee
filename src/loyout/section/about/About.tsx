import React from 'react';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle.ts';
import { Photo } from '../../../components/photo/Photo.ts';
import { S } from './StyledAbout.ts';
import about1 from '../../../assets/homePageImg/about-1.webp';
import about2 from '../../../assets/homePageImg/about-2.webp';
import about3 from '../../../assets/homePageImg/about-3.webp';
import about4 from '../../../assets/homePageImg/about-4.webp';

type PhotoType = {
  src: string;
  width: string;
  height: string;
};

const firstDataPhotos: Array<PhotoType> = [
  { src: about1, width: '660px', height: '590px' },
  { src: about2, width: '660px', height: '430px' },
];

const secondDataPhotos: Array<PhotoType> = [
  { src: about3, width: '660px', height: '430px' },
  { src: about4, width: '660px', height: '590px' },
];
const mobileDataPhotos: Array<PhotoType> = [
  { src: about1, width: '660px', height: '590px' },
  { src: about4, width: '660px', height: '590px' },
];

export const About: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 770;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <S.About>
      <SectionTitle id="about">
        Resource is <span>the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch
        up with friends, or get some work done.
      </SectionTitle>
      <S.Gallery>
        {width < breakpoint ? (
          <S.BoxPhoto>
            {mobileDataPhotos.map((p, index) => {
              return (
                <S.PhotoContainer key={index}>
                  <Photo src={p.src} alt={'photo'} key={index} radius={'20px'} width={p.width} height={p.height} />
                </S.PhotoContainer>
              );
            })}
          </S.BoxPhoto>
        ) : (
          <>
            <S.BoxPhoto>
              {firstDataPhotos.map((p, index) => {
                return (
                  <S.PhotoContainer key={index}>
                    <Photo src={p.src} alt={'photo'} key={index} radius={'20px'} width={p.width} height={p.height} />
                  </S.PhotoContainer>
                );
              })}
            </S.BoxPhoto>
            <S.BoxPhoto>
              {secondDataPhotos.map((p, index) => {
                return (
                  <S.PhotoContainer key={index}>
                    <Photo src={p.src} alt={'photo'} key={index} radius={'20px'} width={p.width} height={p.height} />
                  </S.PhotoContainer>
                );
              })}
            </S.BoxPhoto>
          </>
        )}
      </S.Gallery>
    </S.About>
  );
};
