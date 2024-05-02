import React from 'react';
import styled from './ud-form-datepicker.module.scss';
import UDInput from '../input/input';
import { ControlledMenu, useMenuState } from '@szhsin/react-menu';
import { UDCalendar } from './calendar';
import UDIcon from 'modules/ud-ui/icon';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';
import IMask from 'imask';

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(utc);

export type UDDatepickerProps = {
  value?: string;
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
  onChange?: (e: { target: { value: any } }) => void;
};

const UDDatepicker = React.forwardRef<HTMLInputElement, UDDatepickerProps>(
  (props, ref) => {
    const { value, minDate, maxDate, onChange, ...other } = props;
    const datepickerRef = React.useRef(null);
    const { toggleMenu, ...menuProps } = useMenuState();
    const [inputValue, setInputValue] = React.useState(
      value ? dayjs(value).format('DD.MM.YYYY') : undefined
    );

    const Mask = React.useMemo(
      () =>
        IMask.createMask({
          mask: Date,
          min: minDate?.toDate(),
          max: maxDate?.toDate()
        }),
      [minDate, maxDate]
    );

    const isDateInRange = (date: dayjs.Dayjs) => {
      if (minDate && maxDate) {
        return date.isBetween(minDate, maxDate, 'date', '[]');
      }

      if (minDate) {
        return !date.isBefore(minDate, 'date');
      }

      if (maxDate) {
        return !date.isAfter(maxDate, 'date');
      }

      return true;
    };

    const handleSelectDate = (date: string) => {
      onInputChange({ target: { value: date } });
      handleCloseCalendar();
    };

    const handleOpenCalendar = () => {
      toggleMenu(true);
    };

    const handleCloseCalendar = () => {
      toggleMenu(false);
    };

    const onInputChange = (e: { target: { value: any } }) => {
      Mask.resolve(e.target.value);
      setInputValue(Mask.value);
      e.target.value = Mask.value
        ? dayjs(Mask.value, 'DD.MM.YYYY').utc(true)
        : '';
      onChange && onChange(e);
    };

    return (
      <div ref={datepickerRef} className={styled.datepicker}>
        <UDInput
          value={inputValue}
          ref={ref}
          onChange={onInputChange}
          placeholder="Выбрать"
          iconComponentAfter={
            <UDIcon
              icon="line-calendar"
              className={styled.datepickerIcon}
              onClick={handleOpenCalendar}
            />
          }
          {...other}
        />

        <ControlledMenu
          {...menuProps}
          anchorRef={datepickerRef}
          boundingBoxPadding="24"
          offsetY={8}
          onClose={handleCloseCalendar}
        >
          <UDCalendar
            date={value}
            isDateInRange={isDateInRange}
            onChange={handleSelectDate}
            onClose={handleCloseCalendar}
          />
        </ControlledMenu>
      </div>
    );
  }
);

export default UDDatepicker;
