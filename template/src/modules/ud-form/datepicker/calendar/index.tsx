import React from 'react';
import dayjs from 'dayjs';
import styled from './ud-form-calendar.module.scss';
import UDIcon from 'modules/ud-ui/icon';
import cn from 'classnames';

type UDCalendarProps = {
  date?: string;
  isDateInRange: (date: dayjs.Dayjs) => boolean;
  onChange: (date: string) => void;
  onClose: () => void;
};

export const UDCalendar: React.FC<UDCalendarProps> = (props) => {
  const { date, isDateInRange, onChange, onClose } = props;

  const initialDate = React.useMemo(
    () => (date && dayjs(date).isValid() ? dayjs(date) : dayjs()),
    [date]
  );

  const [year, setYear] = React.useState(initialDate.year());
  const [month, setMonth] = React.useState(initialDate.month());

  React.useEffect(() => {
    setYear(initialDate.year());
    setMonth(initialDate.month());
  }, [initialDate]);

  const gotoNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const gotoPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const gotoNextYear = () => {
    setYear(year + 1);
  };

  const gotoPrevYear = () => {
    setYear(year - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.shiftKey ? gotoNextYear() : gotoNextMonth();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.shiftKey ? gotoPrevYear() : gotoPrevMonth();
  };

  const checkWeekend = (day: number) => (day + 1) % 7 === 6 || day % 7 === 6;

  const renderMonthAndYear = React.useCallback(
    () => (
      <React.Fragment>
        {dayjs().month(month).format('MMMM')} {year}
      </React.Fragment>
    ),
    [month, year]
  );

  const renderWeek = React.useCallback(
    () => (
      <React.Fragment>
        {[...Array.from({ length: 6 }, (_, i) => i + 1), 0].map((d, idx) => (
          <span
            key={d}
            className={cn(styled.calendarGridCell, {
              [styled.calendarWeekend]: checkWeekend(idx)
            })}
          >
            {dayjs().day(d).format('dd')}
          </span>
        ))}
      </React.Fragment>
    ),
    []
  );

  const renderDays = React.useCallback(() => {
    const firstRowOffset = dayjs(new Date(year, month, 0)).day();

    const dummyDays = Array(firstRowOffset).fill(0);

    const monthDays = Array.from(
      { length: dayjs().month(month).daysInMonth() },
      (_, i) => i + 1
    );

    return [...dummyDays, ...monthDays].map((day, idx) => {
      const currentDate = dayjs(new Date(year, month, day));
      const isDateSelected =
        date &&
        dayjs(date).isSame(currentDate, 'day') &&
        (!isDateInRange || isDateInRange(currentDate));

      const calendarDayClassNames = cn(styled.calendarGridCell, {
        [styled.calendarGridCellSelected]: isDateSelected,
        [styled.calendarWeekend]: checkWeekend(idx),
        [styled.calendarGridCellDisabled]:
          isDateInRange && !isDateInRange(currentDate)
      });

      return (
        <span
          key={idx}
          className={calendarDayClassNames}
          onClick={() =>
            day && onChange(dayjs(currentDate).format('DD.MM.YYYY'))
          }
        >
          {day || ''}
        </span>
      );
    });
  }, [month, year, date, isDateInRange, onChange]);

  return (
    <div className={styled.calendar}>
      <div className={styled.calendarHeader}>
        <UDIcon icon="line-caret-left" size={18} onClick={handlePrev} />
        {renderMonthAndYear()}
        <UDIcon icon="line-caret-right" size={18} onClick={handleNext} />
      </div>

      <div className={styled.calendarGrid}>
        {renderWeek()}
        {renderDays()}
      </div>

      <UDIcon
        icon="line-cross"
        className={styled.calendarClose}
        onClick={onClose}
      />
    </div>
  );
};
