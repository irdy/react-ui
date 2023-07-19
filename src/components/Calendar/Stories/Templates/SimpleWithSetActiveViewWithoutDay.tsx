import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Button, Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithSetActiveViewWithoutDayTemplate = ({ ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = React.useState<ViewScreenType | null>('MONTH');

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '25px' }}>
        Показываем только экраны выбора месяца и года
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '25px' }}>
        Если выставлен currentActiveViewImportant, то необходимо самому управлять открытием экранов
      </T>
      <div>
        <Button onClick={() => setSelected(new Date())}>set Date now</Button>
      </div>
      <br />
      <Calendar
        {...props}
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={(date: any) => {
          console.log(date, 'onIncreaseDecreaseDate');
          setSelected(date);
        }}
        onChange={(value: any) => {
          setSelected(value);
          console.log(value, 'onChange');
        }}
        onViewMonthSelect={() => {
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
      />
    </>
  );
};
