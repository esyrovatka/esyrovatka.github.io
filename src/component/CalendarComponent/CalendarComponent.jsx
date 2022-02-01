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
    <Calendar  >

    <LocalizationProvider dateAdapter={AdapterDateFns} style={{backgroundColor: 'red'}}>
      <StaticDatePicker
        renderInput={(params) => <TextField {...params} style={{backgroundColor: 'red'}}/>}
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
              <PickersDay className="calendar-day" {...DayComponentProps} disabled={disabledDay} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
    </Calendar>

  );
};
const Calendar = styled(Box)`
.css-1snvurg-MuiPickerStaticWrapper-root{
  color: #21c9a6;
  background-color: antiquewhite;
  .css-195y93z-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected){
    border: 1px solid #21c9a6;
  }
  .css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected, .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root.Mui-selected{
    background-color: #21c9a6 ;
  }
}
`

CalendarComponent.defaultProps = {
  workoutData: [],
};

CalendarComponent.propTypes = {
  workoutData: PropTypes.array,
};
export default CalendarComponent;
