import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import {
  Table,
  TableTh,
  UserTd,
  LightTd,
  TableBadge,
  TableTitle,
  TableContainer,
  RowWithBorder,
  FoodTd,
  FoodText,
} from './ParticipantsTable.styled';
import { TableBody } from '@mui/material';

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

const foodColor = {
  halal: '#FFD400',
  vegan: '#20AD20',
  normal: '#F96DD1',
};

const COLUMN_NAME = ['No.', 'Name', 'Position', 'Job', 'Phone', 'Food'];

export const ParticipantsList = () => {
  return (
    <TableContainer>
      <TableTitle>Participants</TableTitle>
      <Table>
        <TableBody>
          <tr>
            {COLUMN_NAME.map((name) => (
              <TableTh>{name}</TableTh>
            ))}
          </tr>
          {participantsList &&
            participantsList.map((item) => (
              <RowWithBorder key={item.id}>
                <LightTd>{item.id}</LightTd>
                <UserTd>
                  <span>{item.name}</span>
                </UserTd>
                <LightTd>{item.position}</LightTd>
                <LightTd>{item.job}</LightTd>
                <LightTd>{item.phone}</LightTd>

                <td>
                  <FoodTd>
                    <RadioButtonCheckedIcon style={{ color: foodColor[item.food] }} />
                    <FoodText>{item.food}</FoodText>
                  </FoodTd>
                </td>

                <td>
                  <TableBadge>Details</TableBadge>
                </td>
              </RowWithBorder>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
