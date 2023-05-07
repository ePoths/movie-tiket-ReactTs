import * as React from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import style from "../style/Picker.module.css";
import calendar from "../img/icon.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../style/CoustionUi.css";
// https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=3d66a398e26415511e946e3cde1bb5a5&itemPerPage=50
function Time() {
  const [getMonth, setGetMonth] = useState<number>(1);
  const [getDate, setGetDate] = useState<number>();
  const [getHour, setGethour] = useState<number>();
  const [vars, setVars] = useState<string>();
  const [Dates, setDates] = useState<Date | undefined>();

  setTimeout(() => {
    const dateEvent = new Date(`${vars}`);
    setVars(Dates?.toJSON());
    setGetDate(dateEvent.getDate());
    setGetMonth(dateEvent.getMonth() + 1);
    setGethour(dateEvent.getHours());
  }, 100);

  const Alrets = () => {
    confirmAlert({
      title: "시간 선택",
      message: `${getMonth}월 ${getDate}일 ${getHour}시`,
      buttons: [
        {
          label: "좌석 선택 하기",
          onClick: () => alert("click Yes"),
        },
        {
          label: "시간 수정",
          onClick: () => alert("click No"),
        },
      ],
    });
  };

  const DatePicker = (date: Date) => {
    setDates(date);
    setVars(Dates?.toJSON());
  };
  const ClickEvent = () => {
    Alrets();
  };
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <h1>시간 선택</h1>
        <p className={style.alertText}>아래의 날짜와 시간을 선택 해주세요.</p>
        <div className={style.dateBox}>
          <img className="iconImg" src={calendar} alt="1" />
          <ReactDatePicker
            showTimeSelect
            className={style.dateStyle}
            locale={ko}
            dateFormat="yyyy.MM.dd, HH:mm aaaa"
            selected={Dates}
            placeholderText="날짜와 시간을 정해주세요."
            timeIntervals={60}
            closeOnScroll={true}
            onChange={(date: Date) => DatePicker(date)}
          />
          <button className={style.btnStyle} onClick={ClickEvent}>
            좌석선택
          </button>
        </div>
      </div>
    </div>
  );
}

export default Time;
