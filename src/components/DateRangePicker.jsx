import React, { useState } from 'react';
import 'antd/dist/antd';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const CustomDateRangePicker = () => {
  const [dates, setDates] = useState([]);

  const handleDateChange = (values) => {
    // Process date values here
    console.log('Selected Dates:', values);
    setDates(values);
  };

  return (
    <div className="mt-2">
      <RangePicker onChange={handleDateChange} />
      
    </div>
  );
};

export default CustomDateRangePicker;
