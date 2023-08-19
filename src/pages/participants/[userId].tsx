import Image from 'next/image';

import {
  ParticipantsContainer,
  TableContainer,
  TableHeader,
  TableTitle,
} from 'src/components/ParticipantsList/ParticipantsTable';
import background from 'src/assets/image/background.png';
import styled from '@emotion/styled';
import { colorSet } from 'src/shared/color';

const NameTagContainer = styled.div`
  position: relative;
  height: 800px;
  width: 690px;
`;

const NameOverlay = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  background: linear-gradient(to bottom, rgb(101 100 100 / 17%), rgba(0, 0, 0, 0.87));

  .text {
    width: 100%;
    position: absolute;
    text-align: center;
    z-index: 1;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
    h1 {
      text-align: center;
      background-color: ${colorSet.point};
      padding: 1em 0 1em 0;
    }
    h3 {
      margin: 30px 0;
      font-size: 22px;
      padding: 0 50px;
    }
    h2 {
      margin: 80px 0;
      font-size: 28px;
      padding: 0 50px;
      opacity: 0.6;
    }
  }
`;

const OpacityContainer = styled.div`
  width: 70%;
  margin: 30px 0;
  font-size: 56px;
  padding: 1em;
  border-radius: 1em;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.2);
`;

const BingoOverlay = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background: linear-gradient(to bottom, rgb(101 100 100 / 17%), rgba(0, 0, 0, 0.87));
`;

const Bingo = styled.div<{ isVisited?: boolean }>`
  display: flex;
  width: 25%;
  aspect-ratio: 1;
  padding: 1em;
  border: 1px dotted #ffffff;
  text-align: center;
  justify-content: center;
  ${({ isVisited }) => isVisited && `background-color: ${colorSet.point90}`};
`;

//please generate 16 unigue list
const mockBingo = [
  { name: 'APPLE', isVisited: false },
  { name: 'SAMSUNG', isVisited: false },
  { name: 'ARIRANG', isVisited: true },
  { name: 'SOLUM', isVisited: false },
  { name: 'APPLE2', isVisited: false },
  { name: 'SAMSUNG2', isVisited: false },
  { name: 'ARIRANG2', isVisited: false },
  { name: 'SOLUM2', isVisited: false },
  { name: 'APPLE3', isVisited: true },
  { name: 'SAMSUNG3', isVisited: false },
  { name: 'ARIRANG3', isVisited: false },
  { name: 'SOLUM3', isVisited: false },
  { name: 'APPLE4', isVisited: false },
  { name: 'SAMSUNG4', isVisited: false },
  { name: 'ARIRANG4', isVisited: false },
  { name: 'SOLUM4', isVisited: false },
];

const ParticipantsDetail = ({ userId }) => (
  <ParticipantsContainer>
    <TableContainer>
      <TableHeader>
        <TableTitle>Participant {userId}</TableTitle>
      </TableHeader>
      <div style={{ display: 'flex' }}>
        <NameTagContainer>
          <NameOverlay>
            <div className='text'>
              <h3>SOLUM</h3>
              <h1>PARTICIPANT</h1>
              <h2>Designer</h2>
              <OpacityContainer>KIM SEOYONG</OpacityContainer>
            </div>
          </NameOverlay>
          <Image
            src={background}
            alt='메인 배경 이미지'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
          />
        </NameTagContainer>

        <NameTagContainer>
          <BingoOverlay>
            {mockBingo.map((item) => (
              <Bingo style={{ color: 'white' }} isVisited={item.isVisited}>
                {item.name}
              </Bingo>
            ))}
          </BingoOverlay>
          <Image
            src={background}
            alt='메인 배경 이미지'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
          />
        </NameTagContainer>
      </div>
    </TableContainer>
  </ParticipantsContainer>
);

ParticipantsDetail.getInitialProps = (context) => {
  const { userId } = context.query;

  return {
    userId,
  };
};

export default ParticipantsDetail;
