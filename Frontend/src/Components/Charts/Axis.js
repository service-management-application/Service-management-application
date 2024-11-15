// Axis.js
import React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const sample = [1, 10, 30, 50, 70, 90, 100];

export default function Axis() {
  return (
    <Box sx={{ width: '100%' }}> {/* Responsive container */}
      <LineChart
        xAxis={[{ data: sample }]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear' },
          { id: 'logAxis', scaleType: 'log' },
        ]}
        series={[
          { yAxisId: 'linearAxis', data: sample, label: 'linear' },
          { yAxisId: 'logAxis', data: sample, label: 'log' },
        ]}
        leftAxis="linearAxis"
        rightAxis="logAxis"
        height={400} /* Only height set */
      />
    </Box>
  );
}
