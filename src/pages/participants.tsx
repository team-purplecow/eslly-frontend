import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Filter } from 'src/components/ParticipantsList/Filter';
import {
  FilterContainer,
  ParticipantsContainer,
  ParticipantsList,
  TableContainer,
  TableHeader,
  TableTitle,
} from 'src/components/ParticipantsList/ParticipantsTable';

const FILTERS_GENDER = [
  { name: 'Gender', value: 'gender' },
  { name: 'Woman', value: 'woman' },
  { name: 'Man', value: 'man' },
  { name: 'Others', value: 'others' },
];

const FILTERS_AGE = [
  { name: 'Age', value: 'age' },
  { name: '10-20', value: '1020' },
  { name: '20-30', value: '2030' },
  { name: '30-40', value: '3040' },
];

const FILTERS_POSITION = [
  { name: 'Position', value: 'position' },
  { name: 'Participant', value: 'Participant' },
  { name: 'Sponsor', value: 'Sponsor' },
  { name: 'Host', value: 'Host' },
];

const Participants: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  participantsList,
}) => {
  const router = useRouter();

  return (
    <ParticipantsContainer>
      <TableContainer>
        <TableHeader>
          <TableTitle>Participant</TableTitle>
          <FilterContainer>
            <Filter filters={FILTERS_GENDER} /> <Filter filters={FILTERS_AGE} />
            <Filter filters={FILTERS_POSITION} />
          </FilterContainer>
        </TableHeader>
        <ParticipantsList
          participantsList={
            router.query.name
              ? participantsList.filter((participant) =>
                  participant.name
                    .toLowerCase()
                    .includes(router.query.name.toString().toLowerCase())
                )
              : participantsList
          }
        />
      </TableContainer>
    </ParticipantsContainer>
  );
};

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
