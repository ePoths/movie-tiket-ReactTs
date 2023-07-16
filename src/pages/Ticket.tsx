import { useEffect, useState } from "react";
import styled from "styled-components";
import noImg from "../img/noImg.png";

const Mainh1 = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  height: 100vh;
`;
const Contants = styled.div`
  margin-top: 100px;
`;
const ContantsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverView = styled.div`
  display: inline-block;
  border: 2px solid #f15959;
  border-radius: 10px;
  overflow: hidden;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const MovieName = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

const Description = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
`;

const HR = styled.hr`
  width: 300px;
`;

const ContantsImg = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid #f15959;
`;

const IMG = styled.img`
  border-radius: 10px;
`;

function Ticket() {
  const Localkey = process.env.REACT_APP_LocalStorageKey;
  const [imgCheck, setImgCheck] = useState(false);
  const LocalStorageMoiveInfo = JSON.parse(
    `${localStorage.getItem(`${Localkey}`)}`
  );

  const LocalStorageDate = JSON.parse(`${localStorage.getItem("date")}`);
  const LocalStorageSeatN = localStorage.getItem("seatN");

  useEffect(() => {
    if (LocalStorageMoiveInfo.moviePoseter.slice(0, 4) === "http") {
      setImgCheck(true);
    } else {
      setImgCheck(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Mainh1>구매 완료</Mainh1>
      <hr />
      <Contants>
        <ContantsBox>
          <OverView>
            <MovieInfo>
              <MovieName>{LocalStorageMoiveInfo.movieName}</MovieName>
              <HR />
              <Description>
                <p>
                  상영 길이 :{" "}
                  {LocalStorageMoiveInfo.runtime
                    ? ` ${LocalStorageMoiveInfo.runtime}분`
                    : "Not found"}
                </p>
                <p>
                  장르 :{" "}
                  {LocalStorageMoiveInfo.genre
                    ? ` ${LocalStorageMoiveInfo.genre}`
                    : "Not found"}{" "}
                </p>
                <p>
                  시간 :{" "}
                  {LocalStorageDate.month ? ` ${LocalStorageDate.month}월` : ""}
                  {LocalStorageDate.date
                    ? ` ${LocalStorageDate.date}일`
                    : "Not found"}{" "}
                  {LocalStorageDate.hour ? ` ${LocalStorageDate.hour}시` : ""}
                </p>
                <p>좌석 번호 : {LocalStorageSeatN}번</p>
                <p>
                  상영 등급 :{" "}
                  {LocalStorageMoiveInfo.rating
                    ? ` ${LocalStorageMoiveInfo.rating}`
                    : "Not found"}
                </p>
              </Description>
            </MovieInfo>
            <ContantsImg>
              <IMG
                src={imgCheck ? LocalStorageMoiveInfo.moviePoseter : noImg}
              />
            </ContantsImg>
          </OverView>
        </ContantsBox>
      </Contants>
    </Container>
  );
}
export default Ticket;
