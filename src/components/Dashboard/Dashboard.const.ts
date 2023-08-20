import { ComponentProps } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { colorSet } from 'src/shared/color';

export const lineOptions: ComponentProps<typeof Line>['options'] = {
  responsive: true,
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
      min: 0,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const lineData = {
  labels: Array.from({ length: 11 }, (_, i) => i + 9),
  datasets: [
    {
      label: 'Visitors',
      fill: true,
      backgroundColor: (context) => {
        const backgroundColors = ['rgba(147, 50, 224, 0.20)', 'rgba(178, 99, 240, 0.05)'];
        if (!context.chart.chartArea) return;
        const {
          ctx,
          data,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBackground.addColorStop(0, backgroundColors[0]);
        gradientBackground.addColorStop(1, backgroundColors[1]);
        return gradientBackground;
      },
      tension: 0.4,
      data: [9, 13, 10, 7, 7, 10, 14, 16, 15, 20, 27],
      borderWidth: 2,
      borderColor: colorSet.point,
    },
  ],
};

export const doughnutOptions: ComponentProps<typeof Doughnut>['options'] = {};

export const doughnutData: ComponentProps<typeof Doughnut>['data'] = {
  datasets: [
    {
      data: [66, 34],
      rotation: 90,
      //@ts-expect-error - chartjs type error
      cutout: '80%',
      backgroundColor: [colorSet.point, colorSet.point20],
    },
  ],
};

export const exportJsonData = (json_data) => {
  const json_array = json_data;

  let csv_string = '';
  const titles = Object.keys(json_array[0]);

  titles.forEach((title, index) => {
    csv_string += index !== titles.length - 1 ? `${title},` : `${title}\r\n`;
  });

  json_array.forEach((content, index) => {
    let row = ''; // 각 인덱스에 해당하는 '내용'을 담을 행

    for (let title in content) {
      row += row === '' ? `${content[title]}` : `,${content[title]}`;
    }
    csv_string += index !== json_array.length - 1 ? `${row}\r\n` : `${row}`;
  });

  let uri = 'data:text/csv;charset=utf-8,' + escape(csv_string);
  let link = document.createElement('a');
  link.href = uri;
  link.download = 'visiterInfo' + '.csv';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
