import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { data, options } from './Dashboard.const';
import {
  DashboardBlock,
  DashboardContainer,
  DashboardPositionNumberBox,
  DashboardSection,
} from './Dashboard.styled';
Chart.register(CategoryScale);

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSection direction='column'>
        <DashboardSection>
          <DashboardBlock width='376px' height='208px'>
            <h2>Total Visit</h2>
            <div
              style={{
                marginBottom: '27px',
                textAlign: 'center',
                fontSize: '48px',
                fontWeight: 'bold',
              }}
            >
              3,201
            </div>
          </DashboardBlock>
          <DashboardBlock width='553px' height='208px'>
            <h2>Position</h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '13px 38px',
              }}
            >
              <DashboardPositionNumberBox>
                <small>participants</small>
                <strong>2,995</strong>
              </DashboardPositionNumberBox>
              <DashboardPositionNumberBox>
                <small>sponsors</small>
                <strong>104</strong>
              </DashboardPositionNumberBox>
              <DashboardPositionNumberBox>
                <small>hosts</small>
                <strong>102</strong>
              </DashboardPositionNumberBox>
            </div>
          </DashboardBlock>
        </DashboardSection>
        <DashboardSection>
          <DashboardBlock height='390px'>
            <h2>
              Statistics <small>2023.08.19. 기준</small>
            </h2>
            <div
              style={{
                width: '100%',
                height: 'calc(100% - 30px)',
              }}
            >
              <Line options={options} data={data} />
            </div>
          </DashboardBlock>
        </DashboardSection>
        <DashboardBlock height='202px'>
          <h2>
            Booth <small style={{ fontSize: 26, fontWeight: 'bold' }}>9</small>
          </h2>
        </DashboardBlock>
      </DashboardSection>
    </DashboardContainer>
  );
};
