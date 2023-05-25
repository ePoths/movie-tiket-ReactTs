import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";
import "../style/CoustionUi.css";

/** moth, date, hour, titlemsg, button1, button2 커스텀 알림 */
const Alrets = (
  month?: undefined,
  date?: undefined,
  hour?: undefined,
  titleMsg?: undefined,
  button1?: undefined,
  button2?: undefined
) => {
  const Goto = useNavigate();
  confirmAlert({
    title: `${titleMsg}`,
    message: `날짜 : ${month ? `${month}월` : `Not selected`} ${
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
