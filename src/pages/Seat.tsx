import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import style from "../style/SeatStyle.module.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../style/CoustionUi.css";

const SeatDivNumber = styled.li`
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
  const [getmonth, setGetMonth] = useState();
  const [getDate, setGetDate] = useState();
  const [getHour, setGetHour] = useState();
  const inputRef = useRef(null);
  const Goto = useNavigate();

  const LocalStorageMovieDateDataOgj = JSON.parse(
    `${localStorage.getItem(`date`)}`
  );

  useEffect(() => {
    setGetMonth(LocalStorageMovieDateDataOgj.month);
    setGetDate(LocalStorageMovieDateDataOgj.date);
    setGetHour(LocalStorageMovieDateDataOgj.hour);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      message: `예약 시간 : ${month ? `${month}월` : `Not Finded`} ${
        date ? `${date}일` : ""
      } ${hour ? `${hour}시` : ""}`,
      buttons: [
        {
          label: `${button1}`,
          onClick: () => Goto("/ticket"),
        },
        {
          label: `${button2}`,
          onClick: () => {},
        },
      ],
    });
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    // e,target 오류 해결 <https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript>
    window.localStorage.setItem(
      "seatN",
      `${(e.target as HTMLInputElement).id}`
    );
    CoustomAlerts(
      `${(e.target as HTMLInputElement).id}번 좌석을 선택 하시겠습니까?`,
      `${getmonth}`,
      `${getDate}`,
      `${getHour}`,
      `예`,
      `아니요`
    );
  };

  return (
    <div className={style.main}>
      <H1>좌석을 선택 하여 주세요.</H1>
      <HR />
      <div className={style.screen}>스크린</div>
      <div className={style.mainContents}>
        <div className={style.container}>
          <div className={style.contentsBox1}>
            <SeatDivNumber id="1" onClick={onClick} ref={inputRef}>
              1번
            </SeatDivNumber>
            <SeatDivNumber id="2" onClick={onClick}>
              2번
            </SeatDivNumber>
            <SeatDivNumber id="3" onClick={onClick}>
              3번
            </SeatDivNumber>
            <SeatDivNumber id="4" onClick={onClick}>
              4번
            </SeatDivNumber>
            <SeatDivNumber id="5" onClick={onClick}>
              5번
            </SeatDivNumber>
            <SeatDivNumber id="6" onClick={onClick}>
              6번
            </SeatDivNumber>
            <SeatDivNumber id="7" onClick={onClick}>
              7번
            </SeatDivNumber>
            <SeatDivNumber id="8" onClick={onClick}>
              8번
            </SeatDivNumber>
            <SeatDivNumber id="9" onClick={onClick}>
              9번
            </SeatDivNumber>
            <SeatDivNumber id="10" onClick={onClick}>
              10번
            </SeatDivNumber>
          </div>
          <div className={style.contentsBox2}>
            <SeatDivNumber id="11" onClick={onClick}>
              11번
            </SeatDivNumber>
            <SeatDivNumber id="12" onClick={onClick}>
              12번
            </SeatDivNumber>
            <SeatDivNumber id="13" onClick={onClick}>
              13번
            </SeatDivNumber>
            <SeatDivNumber id="14" onClick={onClick}>
              14번
            </SeatDivNumber>
            <SeatDivNumber id="15" onClick={onClick}>
              15번
            </SeatDivNumber>
            <SeatDivNumber id="16" onClick={onClick}>
              16번
            </SeatDivNumber>
            <SeatDivNumber id="17" onClick={onClick}>
              17번
            </SeatDivNumber>
            <SeatDivNumber id="18" onClick={onClick}>
              18번
            </SeatDivNumber>
            <SeatDivNumber id="19" onClick={onClick}>
              19번
            </SeatDivNumber>
            <SeatDivNumber id="20" onClick={onClick}>
              20번
            </SeatDivNumber>
          </div>
          <div className={style.contentsBox3}>
            <SeatDivNumber id="21" onClick={onClick}>
              21번
            </SeatDivNumber>
            <SeatDivNumber id="22" onClick={onClick}>
              22번
            </SeatDivNumber>
            <SeatDivNumber id="23" onClick={onClick}>
              23번
            </SeatDivNumber>
            <SeatDivNumber id="24" onClick={onClick}>
              24번
            </SeatDivNumber>
            <SeatDivNumber id="25" onClick={onClick}>
              25번
            </SeatDivNumber>
            <SeatDivNumber id="26" onClick={onClick}>
              26번
            </SeatDivNumber>
            <SeatDivNumber id="27" onClick={onClick}>
              27번
            </SeatDivNumber>
            <SeatDivNumber id="28" onClick={onClick}>
              28번
            </SeatDivNumber>
            <SeatDivNumber id="29" onClick={onClick}>
              29번
            </SeatDivNumber>
            <SeatDivNumber id="30" onClick={onClick}>
              30번
            </SeatDivNumber>
          </div>
        </div>
      </div>
      <HR />
    </div>
  );
}
export default Seat;
