import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import {
  Table,
  TableTh,
  UserTd,
  LightTd,
  TableBadge,
  RowWithBorder,
  FoodTd,
  FoodText,
  TableBody,
} from './ParticipantsTable.styled';
import Link from 'next/link';

const foodColor = {
  HALAL: '#FFD400',
  VEGAN: '#20AD20',
  NORMAL: '#F96DD1',
};

const COLUMN_NAME = ['No.', 'Name', 'Position', 'Job', 'Phone', 'Food'];

export const ParticipantsList = ({ participantsList }) => {
  return (
    <>
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
                <LightTd>{item.idx}</LightTd>
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
                  <Link href={`participants/${item.idx}`}>
                    <TableBadge>Details</TableBadge>
                  </Link>
                </td>
              </RowWithBorder>
            ))}
        </TableBody>
      </Table>
    </>
  );
};
