import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import style from "../style/SeatStyle.module.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../style/CoustionUi.css";

const DivNumber = styled.div`
  display: block;
  background-color: #252527;
  border: 1px solid #f15959;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
  text-decoration: none;
  &:hover {
    font-size: 17px;
    box-shadow: 0px 6px 25px 0px rgba(230, 114, 114, 0.75);
    -webkit-box-shadow: 0px 6px 25px 0px rgba(230, 114, 114, 0.75);
    -moz-box-shadow: 0px 6px 25px 0px rgba(230, 114, 114, 0.75);
    cursor: pointer;
  }
`;

const SeatDivNumber = styled(Link)`
  display: block;
  background-color: #252527;
  border: 1px solid #f15959;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
  text-decoration: none;
  &:hover {
    font-size: 17px;
    box-shadow: 0px 6px 25px 0px rgba(230, 114, 114, 0.75);
    -webkit-box-shadow: 0px 6px 25px 0px rgba(230, 114, 114, 0.75);
    -moz-box-shadow: 0px 6px 25px 0px rgba(230, 114, 114, 0.75);
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  text-align: center;
`;

const HR = styled.hr`
  border: 1px solid #5e5e5e;
`;

function Seat() {
  const parms = useParams();
  const localKey = process.env.REACT_APP_LocalStorageKey;
  const [SeatNumber, setSeatNumber] = useState<string>();
  const [getmonth, setGetMonth] = useState();
  const [getDate, setGetDate] = useState();
  const [getHour, setGetHour] = useState();
  const Goto = useNavigate();

  const LocalStorageMovieDataOgj = JSON.parse(
    `${localStorage.getItem(`${localKey}`)}`
  );
  const LocalStorageMovieDateDataOgj = JSON.parse(
    `${localStorage.getItem(`date`)}`
  );

  useEffect(() => {
    setSeatNumber(parms.seatNumber);
    setGetMonth(LocalStorageMovieDateDataOgj.month);
    setGetDate(LocalStorageMovieDateDataOgj.date);
    setGetHour(LocalStorageMovieDateDataOgj.hour);
  }, []);

  useEffect(() => {}, []);

  /** moth, date, hour, titlemsg, button1, button2 커스텀 알림 */
  const CoustomAlerts = (
    titleMsg?: string,
    month?: string,
    date?: string,
    hour?: string,
    button1?: string,
    button2?: string
  ) => {
    confirmAlert({
      title: `${titleMsg}`,
      message: `날짜 : ${month ? `${month}월` : `Not Finded`} ${
        date ? `${date}일` : ""
      } ${hour ? `${hour}시` : ""}`,
      buttons: [
        {
          label: `${button1}`,
          onClick: () => Goto("/Seat"),
        },
        {
          label: `${button2}`,
          onClick: () => alert("click No"),
        },
      ],
    });
  };

  const onClick = () => {
    CoustomAlerts(
      `${SeatNumber}번 좌석을 선택 하시겠습니까?`,
      `${getmonth}`,
      `${getDate}`,
      `${getHour}`
    );
  };

  return (
    <>
      <button onClick={onClick}>test</button>
      <Link to="/movie">무비</Link>
      <H1>좌석을 선택 하여 주세요.</H1>
      <HR />
      <div className={style.screen}>스크린</div>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.contentsBox1}>
            <SeatDivNumber to={`/seat/1`}>1번</SeatDivNumber>
            <SeatDivNumber to={`/seat/2`}>2번</SeatDivNumber>
            <SeatDivNumber to={`/seat/3`}>3번</SeatDivNumber>
            <SeatDivNumber to={`/seat/4`}>4번</SeatDivNumber>
            <SeatDivNumber to={`/seat/5`}>5번</SeatDivNumber>
            <SeatDivNumber to={`/seat/6`}>6번</SeatDivNumber>
            <SeatDivNumber to={`/seat/7`}>7번</SeatDivNumber>
            <SeatDivNumber to={`/seat/8`}>8번</SeatDivNumber>
            <SeatDivNumber to={`/seat/9`}>9번</SeatDivNumber>
            <SeatDivNumber to={`/seat/10`}>10번</SeatDivNumber>
          </div>
          <div className={style.contentsBox2}>
            <SeatDivNumber to={`/seat/11`}>11번</SeatDivNumber>
            <SeatDivNumber to={`/seat/12`}>12번</SeatDivNumber>
            <SeatDivNumber to={`/seat/13`}>13번</SeatDivNumber>
            <SeatDivNumber to={`/seat/14`}>14번</SeatDivNumber>
            <SeatDivNumber to={`/seat/15`}>15번</SeatDivNumber>
            <SeatDivNumber to={`/seat/15`}>16번</SeatDivNumber>
            <SeatDivNumber to={`/seat/16`}>17번</SeatDivNumber>
            <SeatDivNumber to={`/seat/18`}>18번</SeatDivNumber>
            <SeatDivNumber to={`/seat/19`}>19번</SeatDivNumber>
            <SeatDivNumber to={`/seat/20`}>20번</SeatDivNumber>
          </div>
          <div className={style.contentsBox3}>
            <SeatDivNumber to={`/seat/21`}>21번</SeatDivNumber>
            <SeatDivNumber to={`/seat/22`}>22번</SeatDivNumber>
            <SeatDivNumber to={`/seat/23`}>23번</SeatDivNumber>
            <SeatDivNumber to={`/seat/24`}>24번</SeatDivNumber>
            <SeatDivNumber to={`/seat/25`}>25번</SeatDivNumber>
            <SeatDivNumber to={`/seat/26`}>26번</SeatDivNumber>
            <SeatDivNumber to={`/seat/27`}>27번</SeatDivNumber>
            <SeatDivNumber to={`/seat/28`}>28번</SeatDivNumber>
            <SeatDivNumber to={`/seat/29`}>29번</SeatDivNumber>
            <SeatDivNumber to={`/seat/30`}>30번</SeatDivNumber>
          </div>
        </div>
      </div>
    </>
  );
}
export default Seat;
