import { FileDownloadOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'react-chartjs-2';
import { Toggle } from '../Common/Toggle';
import { data, options } from './Dashboard.const';
import {
  DashboardBoothBox,
  DashboardBox,
  DashboardContainer,
  DashboardPositionNumberBox,
  DashboardSection,
} from './Dashboard.styled';
Chart.register(CategoryScale);
Chart.register(zoomPlugin);

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSection direction='column'>
        <DashboardSection>
          <DashboardBox width='376px' height='208px'>
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
          </DashboardBox>
          <DashboardBox width='553px' height='208px'>
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
          </DashboardBox>
        </DashboardSection>
        <DashboardSection>
          <DashboardBox height='390px' style={{ gap: 36 }}>
            <h2>
              Statistics <small>2023.08.19. 기준</small>
              <Toggle label={['Total', 'Today']} style={{ marginLeft: 'auto' }} />
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: 'calc(100% - 30px - 36px)',
              }}
            >
              <Line options={options} data={data} />
            </div>
          </DashboardBox>
        </DashboardSection>
        <DashboardBox height='202px' style={{ gap: 10 }}>
          <h2>
            Booth <small style={{ fontSize: 26, fontWeight: 'bold' }}>9</small>
            <Toggle label={['Total', 'Today']} style={{ marginLeft: 'auto' }} />
          </h2>
          <div style={{ display: 'flex', gap: 10 }}>
            <DashboardBoothBox>
              <h3>
                SOLUM
                <SvgIcon component={FileDownloadOutlined} sx={{ fontSize: 24 }} />
              </h3>
              <strong>2,011</strong>
            </DashboardBoothBox>
            <DashboardBoothBox>
              <h3>
                APPLE
                <SvgIcon component={FileDownloadOutlined} sx={{ fontSize: 24 }} />
              </h3>
              <strong>1,900</strong>
            </DashboardBoothBox>
            <DashboardBoothBox>
              <h3>
                SAMSUNG
                <SvgIcon component={FileDownloadOutlined} sx={{ fontSize: 24 }} />
              </h3>
              <strong>1,827</strong>
            </DashboardBoothBox>
            <DashboardBoothBox>
              <h3>
                ARIRANG
                <SvgIcon component={FileDownloadOutlined} sx={{ fontSize: 24 }} />
              </h3>
              <strong>987</strong>
            </DashboardBoothBox>
          </div>
        </DashboardBox>
      </DashboardSection>
    </DashboardContainer>
  );
};
