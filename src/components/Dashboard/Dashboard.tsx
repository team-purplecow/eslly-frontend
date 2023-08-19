import { FileDownloadOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import Image from 'next/image';
import { useRef } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import junctionCircle from 'src/assets/junction-circle.png';
import { colorSet } from 'src/shared/color';
import Controller from '../Common/Icon/Controller';
import { Toggle } from '../Common/Toggle';
import { doughnutData, doughnutOptions, lineData, lineOptions } from './Dashboard.const';
import {
  DashboardBoothBox,
  DashboardBox,
  DashboardContainer,
  DashboardDoughnutDtBlock,
  DashboardPositionNumberBox,
  DashboardSection,
} from './Dashboard.styled';
Chart.register(CategoryScale);
Chart.register(zoomPlugin);

export const Dashboard = () => {
  const selectRef = useRef<HTMLSelectElement>(null);
  return (
    <DashboardContainer>
      <DashboardSection>
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
                <Line options={lineOptions} data={lineData} />
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
        <DashboardSection direction='column'>
          <DashboardBox
            width='515px'
            height='624px'
            style={{ gap: 24, alignItems: 'center', paddingTop: 52, justifyContent: 'flex-start' }}
          >
            <Image src={junctionCircle} alt='' />
            <div>
              <h2 style={{ fontSize: 32, color: colorSet.black90 }}>JUNCTION ASIA 2023</h2>
              <p
                style={{
                  marginTop: 11,
                  fontSize: 24,
                  color: colorSet.black70,
                }}
              >
                Event Period <b>23.08.18. ~ 08.20.</b>
              </p>
            </div>
            <dl style={{ margin: 0, width: '100%', padding: '0 26px', fontSize: 28 }}>
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <dt style={{ opacity: 0.6 }}>Total</dt>
                <dd>
                  <b>3,201</b>
                </dd>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <dt
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <select
                    ref={selectRef}
                    style={{
                      appearance: 'none',
                      border: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      opacity: 0.6,
                    }}
                  >
                    <option value='7'>Recent 7 days</option>
                    <option value='14'>Recent 14 days</option>
                    <option value='28'>Recent 1 month</option>
                  </select>
                  <Controller onClick={() => selectRef.current.click()} />
                </dt>
                <dd>
                  <b>106</b>
                </dd>
              </div>
            </dl>
          </DashboardBox>
          <DashboardBox
            width='515px'
            height='202px'
            style={{ gap: 30, flexDirection: 'row', justifyContent: 'flex-start' }}
          >
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 23, width: '100%' }}>
              <Toggle label={['Gen', 'Age']} style={{ marginLeft: 'auto' }} />
              <dl
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  width: 166,
                  margin: 0,
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <DashboardDoughnutDtBlock backgroundColor={colorSet.point}>
                    man
                  </DashboardDoughnutDtBlock>
                  <dd style={{ margin: 0, fontSize: 28, fontWeight: 'bold' }}>66%</dd>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <DashboardDoughnutDtBlock backgroundColor={colorSet.point20}>
                    woman
                  </DashboardDoughnutDtBlock>
                  <dd style={{ margin: 0, fontSize: 28, color: colorSet.black50 }}>34%</dd>
                </div>
              </dl>
            </div>
          </DashboardBox>
        </DashboardSection>
      </DashboardSection>
    </DashboardContainer>
  );
};
