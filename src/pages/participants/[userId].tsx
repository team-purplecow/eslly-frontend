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
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

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

const ParticipantsDetail: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  userId,
  isVisited,
}) => {
  const mockBingo = [
    { name: 'APPLE', isVisited: false },
    { name: 'GROUPBY', isVisited: false },
    { name: 'ARIRANG', isVisited: true },
    { name: 'SOLUM', isVisited: isVisited },
    { name: 'CNT Tech', isVisited: false },
    { name: 'Ground K', isVisited: false },
    { name: 'HELPRO', isVisited: false },
    { name: 'SAMSUNG', isVisited: false },
    { name: 'NoriS', isVisited: true },
    { name: 'NAVER', isVisited: false },
    { name: 'bto', isVisited: false },
    { name: 'QUPANG', isVisited: false },
    { name: 'KEPLY', isVisited: false },
    { name: 'AGROSDYNE', isVisited: false },
    { name: 'Shinhan Card', isVisited: false },
    { name: 'JAKA', isVisited: false },
  ];

  return (
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
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;

  const visitedList = await fetch(
    `https://solumjunction.store/api/visit/company/${userId}?companyName=NAVER'`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      return [];
    });

  const isVisited = visitedList.companyVisitList.some((item) => item.companyName === 'SOLUM');

  return {
    props: { userId, isVisited },
  };
};

export default ParticipantsDetail;
