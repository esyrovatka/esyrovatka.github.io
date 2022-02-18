import * as React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PickersDay from "@mui/lab/PickersDay";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Badge, Box, TextField } from "@mui/material/";
import { useDispatch } from "react-redux";
import { getCurrData } from "../../redux/action";
import styled from "styled-components";

const CalendarComponent = ({ workoutData }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    dispatch(getCurrData(new Date()));
  }, [dispatch]);

  const changeData = () => (newValue) => {
    setValue(newValue);
    dispatch(getCurrData(newValue));
  };
  return (
    <Calendar>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          renderInput={(params) => <TextField {...params} />}
          value={value}
          onChange={changeData(value)}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelect =
              workoutData &&
              !DayComponentProps.outsideCurrentMonth &&
              workoutData.find(
                (item) => item.toLocaleDateString() === day.toLocaleDateString()
              );
            const disabledDay =
              !isSelect && day < new Date(Date.now() - 1000 * 60 * 60 * 24);
            return (
              <Badge
                key={String(day)}
                overlap="circular"
                badgeContent={isSelect && "🌚"}>
                <PickersDay
                  className="calendar-day"
                  {...DayComponentProps}
                  disabled={disabledDay}
                  sx={{ background: isSelect && "#2d9cdb" }}
                />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </Calendar>
  );
};
const Calendar = styled(Box)`
  margin: 0 auto;
  width: 40%;
  max-width: 350px;
  @media (max-width: 780px) {
    max-width: 100%;
  }
  .css-1snvurg-MuiPickerStaticWrapper-root {
    // color: #2d9cdb;
    background-color: #fff;
    border-radius: 25px;
    .css-195y93z-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected) {
      border: 1px solid #2d9cdb;
    }
    .css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected,
    .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
      // background-color: #2d9cdb;
    }
  }
`;

CalendarComponent.defaultProps = {
  workoutData: [],
};

CalendarComponent.propTypes = {
  workoutData: PropTypes.array,
};
export default CalendarComponent;
