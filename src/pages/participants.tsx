import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Filter } from 'src/components/ParticipantsList/Filter';
import {
  ParticipantsContainer,
  ParticipantsList,
  TableContainer,
  TableHeader,
  TableTitle,
} from 'src/components/ParticipantsList/ParticipantsTable';

const FILTERS = [
  { name: 'Gender', value: 'gender' },
  { name: 'Age', value: 'age' },
  { name: 'Job', value: 'job' },
  { name: 'Position', value: 'position' },
];

const Participants: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  participantsList,
}) => (
  <ParticipantsContainer>
    <TableContainer>
      <TableHeader>
        <TableTitle>Participant</TableTitle>
        <Filter filters={FILTERS} />
      </TableHeader>
      <ParticipantsList participantsList={participantsList} />
    </TableContainer>
  </ParticipantsContainer>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const participantsList = await fetch(`https://solumjunction.store/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      return [];
    });

  return {
    props: { participantsList },
  };
};

export default Participants;
