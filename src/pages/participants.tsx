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

const participantsList = [
  {
    id: 1,
    name: 'James',
    position: 'Developer',
    job: 'Student',
    phone: '+821012341234',
    food: 'halal',
  },
  {
    id: 2,
    name: 'Alice',
    position: 'Designer',
    job: 'Professor',
    phone: '+821012341234',
    food: 'normal',
  },
  {
    id: 3,
    name: 'Sarah',
    position: 'Entrepreneur',
    job: 'Student',
    phone: '+821012341234',
    food: 'vegan',
  },
];

const Participants = () => (
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

export default Participants;
