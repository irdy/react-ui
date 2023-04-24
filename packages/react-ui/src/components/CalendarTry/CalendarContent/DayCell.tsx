import * as React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled, {DefaultTheme, FlattenInterpolation, ThemeProps} from 'styled-components';
import { typography } from '#src/components/Typography';

const DAY_SIZE = 36;
const DAY_PADDING = '8px 0';
const DAY_MARGIN_BOTTOM = '4px';

export interface DayCellProps {
  date: Dayjs;
  selected?: Dayjs;
  onSelectDate?: (date: Dayjs) => void;
  disabled?: boolean;
  isHidden: boolean;
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
}

export const DayCellWrapper = styled.div<{
  today?: boolean;
  disabled?: boolean;
  outsideMonth?: boolean;
  selected?: boolean;
  highlightSpecialDayMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: ${DAY_SIZE}px;
  height: ${DAY_SIZE}px;
  padding: ${DAY_PADDING};
  margin-bottom: ${DAY_MARGIN_BOTTOM};
  text-align: center;
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid ${(p) => (p.today && !p.selected ? p.theme.color['Neutral/Neutral 90'] : 'transparent')};
    border-radius: 50%;
  }

  &:hover:after {
    ${(p) => (p.disabled || p.selected ? '' : `border: 1px solid ${p.theme.color['Primary/Primary 60 Main']};`)}
  }

  ${(p) => p.highlightSpecialDayMixin}

  ${(p) =>
    p.disabled &&
    `
      color: ${p.theme.color['Neutral/Neutral 30']};
    `}

  ${(p) =>
    p.outsideMonth &&
    `
      color: ${p.theme.color['Neutral/Neutral 30']};
      opacity: 0;
      pointer-events: none;
    `}

  ${(p) =>
    !p.disabled &&
    p.selected &&
    `
      color: ${p.theme.color['Special/Static White']};
      background: ${p.theme.color['Primary/Primary 60 Main']};
      border-radius: 50%;
      &:hover {
        background: ${p.theme.color['Primary/Primary 70']};
      }
    `}
`;
export const DayCell = ({ date, selected, disabled, onSelectDate, isHidden, highlightSpecialDay }: DayCellProps) => {
  const handleClick = () => {
    if (!disabled) {
      onSelectDate?.(date);
    }
  };

  return (
    <DayCellWrapper
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'day')}
      outsideMonth={isHidden}
      selected={date.isSame(selected, 'date')}
      disabled={disabled}
      onClick={handleClick}
      highlightSpecialDayMixin={highlightSpecialDay?.(date)}
    >
      {date.date()}
    </DayCellWrapper>
  );
};
