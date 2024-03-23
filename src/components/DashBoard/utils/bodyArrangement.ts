import { CSSProperties } from 'react';

import CalendarDividend from '../components/CalendarDividend/CalendarDividend';
import CalendarPL from '../components/CalendarPL/CalendarPL';
import PivotTable from '../components/PivotTable/PivotTable';
import RecentTransaction from '../components/RecentTransaction/RecentTransaction';
import TimeSeries from '../components/TimeSeries/TimeSeries';
import TotalPL from '../components/TotalPL/TotalPL';

interface BodyArrangement {
  [index: string]: unknown;
  Component: () => JSX.Element;
  style: CSSProperties;
}

export const bodyArrangement: BodyArrangement[] = [
  {
    Component: TotalPL,
    style: {
      gridArea: 'grid1',
    },
  },
  {
    Component: CalendarPL,
    style: {
      gridArea: 'grid2',
    },
  },
  {
    Component: CalendarDividend,
    style: {
      gridArea: 'grid3',
    },
  },
  {
    Component: RecentTransaction,
    style: {
      gridArea: 'grid4',
    },
  },
  {
    Component: TimeSeries,
    style: {
      gridArea: 'grid5',
    },
  },
  {
    Component: PivotTable,
    style: {
      gridArea: 'grid6',
    },
  },
].map((item) => {
  return {
    ...item,
    style: {
      ...item.style,
      padding: '0.5rem',
      borderRadius: '0.5rem',
      backgroundColor: '#f5f5f5',
      width: '100%',
      minWidth: '100%',
      height: '100%',
      minHeight: '100%',
      overflow: 'auto',
    },
  };
});
