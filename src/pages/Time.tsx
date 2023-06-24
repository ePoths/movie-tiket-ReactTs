import * as React from "react";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { ko } from "date-fns/esm/locale";
import { useNavigate, useParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import calendar from "../img/icon.png";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../style/CoustionUi.css";
import "react-datepicker/dist/react-datepicker.css";
import TStyle from "../style/TimeStyle.module.css";

function Time() {
  const params = useParams();
  const [getMonth, setGetMonth] = useState<number>(1);
  const [getDate, setGetDate] = useState<number>();
  const [getHour, setGethour] = useState<number>();
  const [vars, setVars] = useState<string>();
  const [Dates, setDates] = useState<Date | undefined>();
  const [localSet, setLocalSet] = useState<{}>();
  const Goto = useNavigate();

  setTimeout(() => {
    const movieSetDate = {
      date: `${getDate}`,
      hour: `${getHour}`,
      month: `${getMonth}`,
    };
    const dateEvent = new Date(`${vars}`);
    setVars(Dates?.toJSON());
    setGetDate(dateEvent.getDate());
    setGetMonth(dateEvent.getMonth() + 1);
    setGethour(dateEvent.getHours());
    setLocalSet(movieSetDate);
  }, 100);

  const DatePicker = (date: Date) => {
    setDates(date);
    setVars(Dates?.toJSON());
  };

  const AlertsClick = () => {
    window.localStorage.setItem("date", JSON.stringify(localSet));
    Goto("/Seat");
  };

  const CoustomAlerts = (button1?: string, button2?: string) => {
    confirmAlert({
      title: `영화 시간 선택`,
      message: `날짜 : ${getMonth ? `${getMonth}월` : `Not selected`} ${
        getDate ? `${getDate}일` : ""
      } ${getHour ? `${getHour}시` : ""}`,
      buttons: [
        {
          label: `${button1}`,
          onClick: () => AlertsClick(),
        },
        {
          label: `${button2}`,
          onClick: () => console.log(""),
        },
      ],
    });
  };

  const ClickEvent = () => {
    if (Number.isNaN(getMonth)) {
      alert("날짜와 시간을 선택 해주세요.");
    } else {
      CoustomAlerts("좌석 선택하기", "취소");
    }
  };
  const BackButton = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={BackButton} className={TStyle.backButton}>
        뒤로 가기
      </button>
      <div className={TStyle.container}>
        <div className={TStyle.mainContainer}>
          <h1>영화 시간 선택</h1>

          <p className={TStyle.alertText}>
            영화 "{params.movieNm}"
            <p className={TStyle.dkwpahrrnlcksgdk}>
              시청할 날짜와 시간을 선택 해주세요.
            </p>
          </p>
          <div className={TStyle.dateBox}>
            <img className="iconImg" src={calendar} alt="1" />
            <ReactDatePicker
              showTimeSelect
              className={TStyle.dateStyle}
              locale={ko}
              dateFormat="yyyy.MM.dd, HH:mm aaaa"
              selected={Dates}
              placeholderText="날짜와 시간을 정해주세요."
              timeIntervals={60}
              closeOnScroll={true}
              onChange={(date: Date) => DatePicker(date)}
            />
            <button className={TStyle.btnStyle} onClick={ClickEvent}>
              좌석선택
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Time;
