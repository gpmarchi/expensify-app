import React from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  handleFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={event => {
            this.props.dispatch(setTextFilter(event.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={event => {
            if (event.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (event.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={
            this.props.filters.startDate
              ? this.props.filters.startDate.toString()
              : ""
          }
          endDate={this.props.filters.endDate}
          endDateId={
            this.props.filters.endDate
              ? this.props.filters.endDate.toString()
              : ""
          }
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
