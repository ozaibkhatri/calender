
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import * as React from 'react';

export default function DateRangeCalendarCalendarsProp() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
          <DemoItem>
            <DateRangeCalendar calendars={1} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
