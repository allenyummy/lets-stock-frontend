import { CSSProperties } from 'react';

import CalendarDividend from '../components/CalendarDividend/CalendarDividend';
import CalendarPL from '../components/CalendarPL/CalendarPL';
import PivotTable from '../components/PivotTable/PivotTable';
import RecentTransaction from '../components/RecentTransaction/RecentTransaction';
import TimeSeries from '../components/TimeSeries/TimeSeries';
import TotalPL from '../components/TotalPL/TotalPL';

interface BodyArrangement {
  [index: string]: unknown;
  keyIndex: string;
  Component: (args: any) => JSX.Element;
  style: CSSProperties;
  attribute: Record<string, unknown>;
}

export const bodyArrangement: BodyArrangement[] = [
  {
    keyIndex: 'totalPL',
    Component: TotalPL,
    style: {
      gridArea: 'totalPL',
    },
  },
  {
    keyIndex: 'calendarPL',
    Component: CalendarPL,
    style: {
      gridArea: 'calendarPL',
    },
  },
  {
    keyIndex: 'calendarDividend',
    Component: CalendarDividend,
    style: {
      gridArea: 'calendarDividend',
    },
  },
  {
    keyIndex: 'recentTransaction',
    Component: RecentTransaction,
    style: {
      gridArea: 'recentTransaction',
    },
  },
  {
    keyIndex: 'timeSeries',
    Component: TimeSeries,
    style: {
      gridArea: 'timeSeries',
    },
  },
  {
    keyIndex: 'pivotTable',
    Component: PivotTable,
    style: {
      gridArea: 'pivotTable',
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
    attribute: {
      expanded: false,
    },
  };
});

export enum BodyArrangementActionType {
  ATTRIBUTE_CHANGED = 'attribute-changed',
}

interface BodyArrangementAttributeChangedAction {
  type: BodyArrangementActionType.ATTRIBUTE_CHANGED;
  payload: {
    keyIndex: string;
    attribute: Record<string, unknown>;
  };
}

export const bodyArrangementReducer = (state: BodyArrangement[], action: BodyArrangementAttributeChangedAction) => {
  switch (action.type) {
    case BodyArrangementActionType.ATTRIBUTE_CHANGED:
      const { keyIndex, attribute } = action.payload;
      const nextState = bodyArrangement.map((item) => {
        if (item.keyIndex === keyIndex) {
          return {
            ...item,
            attribute: { ...item.attribute, ...attribute },
          };
        }
        return item
      });
      return nextState;
    default:
      throw new Error('Unexpected action');
  }
};
