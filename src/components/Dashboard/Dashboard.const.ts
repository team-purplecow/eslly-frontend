import { ComponentProps } from 'react';
import { Line } from 'react-chartjs-2';
import { colorSet } from 'src/shared/color';

export const options: ComponentProps<typeof Line>['options'] = {
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

export const data = {
  labels: Array.from({ length: new Date().getDate() - 1 }, (_, i) => i + 1).slice(-11),
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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 9, 13, 10, 7, 7, 10, 14, 16, 15, 20, 27].slice(-11),
      borderWidth: 2,
      borderColor: colorSet.point,
    },
  ],
};
