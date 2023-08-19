import { colorSet } from 'src/shared/color';

export const options = {
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

export const data = {
  labels: Array.from({ length: new Date().getDate() - 1 }, (_, i) => i + 1),
  datasets: [
    {
      label: 'Visitors',
      fill: true,
      backgroundColor: (context) => {
        const backgroundColors = ['rgba(147, 50, 224, 0.60)', 'rgba(178, 99, 240, 0.00)'];
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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderWidth: 2,
      borderColor: colorSet.point,
    },
  ],
};
