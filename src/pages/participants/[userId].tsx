import {
  ParticipantsContainer,
  TableContainer,
  TableHeader,
  TableTitle,
} from 'src/components/ParticipantsList/ParticipantsTable';

const ParticipantsDetail = ({ userId }) => (
  <ParticipantsContainer>
    <TableContainer>
      <TableHeader>
        <TableTitle>Participant {userId}</TableTitle>
      </TableHeader>
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
