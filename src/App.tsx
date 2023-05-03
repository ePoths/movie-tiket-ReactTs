import * as React from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import style from "./style/Picker.module.css";
import calendar from "./img/icon.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

// https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=3d66a398e26415511e946e3cde1bb5a5&itemPerPage=50

function App() {
  const [Dates, setDate] = useState<Date>();
  const Alrets = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "are you sure to do this",
      buttons: [
        {
          label: "yes",
          onClick: () => alert("click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("click No"),
        },
      ],
    });
  };

  const DatePicker = (date: Date) => {
    setDate(date);
    console.log(Dates);
  };
  const ClickEvent = () => {
    Alrets();
  };
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <h1>영화 예매</h1>
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

export default App;
