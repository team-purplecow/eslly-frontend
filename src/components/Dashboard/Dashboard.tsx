import { FileDownloadOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import junctionCircle from 'src/assets/junction-circle.png';
import { colorSet } from 'src/shared/color';
import Controller from '../Common/Icon/Controller';
import { Toggle } from '../Common/Toggle';
import {
  doughnutData,
  doughnutOptions,
  exportJsonData,
  lineData,
  lineOptions,
} from './Dashboard.const';
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
  const lineRef = useRef(null);
  const [boothFlag, setBoothFlag] = useState<boolean>(false);
  const [statisticsFlag, setStatisticsFlag] = useState<boolean>(false);
  const { data: event } = useQuery(['event'], () =>
    fetch(`https://solumjunction.store/api/event/1`).then((res) => res.json())
  );
  const { data: percent } = useQuery(['percent'], () =>
    fetch(`https://solumjunction.store/api/users/percentage`).then((res) => res.json())
  );
  const { data: companies } = useQuery(['company'], () =>
    fetch(`https://solumjunction.store/api/company/list`).then((res) => res.json())
  );
  const { data: companiesToday } = useQuery(['companyToday'], () =>
    fetch(`https://solumjunction.store/api/company/listToday`).then((res) => res.json())
  );

  useEffect(() => {
    if (percent) {
      doughnutData.datasets[0].data = [percent.W, percent.M];
    }
  }, [percent]);

  useEffect(() => {
    const chart = lineRef.current;

    if (chart) {
      chart.data.datasets[0].data = statisticsFlag
        ? [9, 13, 10, 7]
        : [9, 13, 10, 7, 7, 10, 14, 16, 15, 20, 27];
      chart.update();
    }
  }, [statisticsFlag]);

  const mockData = [
    {
      enterpriseName: 'SoluM',
      dailyVisitor: 41,
      monthlyVisitor: 123,
    },
  ];

  if (!event || !percent || !companies)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        loading...
      </div>
    );

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
                {event.total}
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
                  <strong>{event.positionInfo.PARTICIPANT}</strong>
                </DashboardPositionNumberBox>
                <DashboardPositionNumberBox>
                  <small>sponsors</small>
                  <strong>{event.positionInfo.SPONSOR}</strong>
                </DashboardPositionNumberBox>
                <DashboardPositionNumberBox>
                  <small>hosts</small>
                  <strong>{event.positionInfo.HOST}</strong>
                </DashboardPositionNumberBox>
              </div>
            </DashboardBox>
          </DashboardSection>
          <DashboardSection>
            <DashboardBox height='390px' style={{ gap: 36 }}>
              <h2>
                Statistics <small>2023.08.19. 기준</small>
                <Toggle
                  label={['Total', 'Today']}
                  style={{ marginLeft: 'auto' }}
                  onChecked={setStatisticsFlag}
                />
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  height: 'calc(100% - 30px - 36px)',
                }}
              >
                <Line ref={lineRef} options={lineOptions} data={lineData} />
              </div>
            </DashboardBox>
          </DashboardSection>
          <DashboardBox height='202px' style={{ gap: 10 }}>
            <h2>
              Booth <small style={{ fontSize: 26, fontWeight: 'bold' }}>16</small>
              <Toggle
                label={['Total', 'Today']}
                style={{ marginLeft: 'auto' }}
                onChecked={setBoothFlag}
              />
            </h2>
            <div style={{ display: 'flex', gap: 10 }}>
              {(boothFlag ? companiesToday : companies).map((item) => (
                <DashboardBoothBox key={'dashboard-' + item.title}>
                  <h3>
                    {item.title}
                    <SvgIcon
                      component={FileDownloadOutlined}
                      sx={{ fontSize: 24, cursor: 'pointer' }}
                      onClick={() => exportJsonData(mockData)}
                    />
                  </h3>
                  <strong>{item.number}</strong>
                </DashboardBoothBox>
              ))}
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
            <dl
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
                width: '100%',
                padding: '0 26px',
                fontSize: 28,
                gap: 18,
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <dt style={{ opacity: 0.6 }}>Total</dt>
                <dd>
                  <b>{event.total}</b>
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
                  width: 180,
                  margin: 0,
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <DashboardDoughnutDtBlock backgroundColor={colorSet.point}>
                    woman
                  </DashboardDoughnutDtBlock>
                  <dd style={{ margin: 0, fontSize: 28, fontWeight: 'bold' }}>{percent.W}%</dd>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <DashboardDoughnutDtBlock backgroundColor={colorSet.point20}>
                    man
                  </DashboardDoughnutDtBlock>
                  <dd style={{ margin: 0, fontSize: 28, color: colorSet.black50 }}>{percent.M}%</dd>
                </div>
              </dl>
            </div>
          </DashboardBox>
        </DashboardSection>
      </DashboardSection>
    </DashboardContainer>
  );
};
