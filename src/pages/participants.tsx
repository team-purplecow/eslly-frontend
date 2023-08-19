import styled from '@emotion/styled';
import { ParticipantsList } from 'src/components/ParcitipantsList/ParticipantsTable';

const ParticipantsContainer = styled.div`
  flex: 2;
  padding: 2em;
  background-color: #f1f2f4;
`;

const Participants = () => (
  <ParticipantsContainer>
    <ParticipantsList />
  </ParticipantsContainer>
);

export default Participants;
