/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import noImg from "../img/noImg.png";
import style from "../style/MIStyle.module.css";
const Container = styled.div`
  height: calc(100vh - 63);
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
const MainContainer = styled.div`
  display: flex;
  height: 305px;
  width: 800px;
  background-color: white;
  color: black;
  border-radius: 15px;
  overflow: hidden;
`;
const Test = styled.div`
  display: flex;
  width: 100px;
`;
const IMG = styled.img`
  width: 213px;
  height: 305px;
`;

const Title = styled.h3`
  margin: 15px;
`;

const TextContent = styled.div``;

const TextArea = styled.div`
  margin-left: 10px;
`;
const BtnColorAnime = keyframes`
  from{
    color : #000000
  }to{
    color : #abdaf5
  }
`;

const Hr = styled.hr`
  border-color: black;
  border-radius: 20px;
  border: 1px solid black;
  transform: translateX(-15px);
`;

const Btn = styled(Link)`
  display: flex;
  width: 85.45px;
  height: 305px;
  border: none;
  text-align: center;
  margin-right: 6px;
  background-color: white;
  font-size: 16px;
  color: black;
  text-decoration: none;
  align-items: center;
  &:hover {
    animation: ${BtnColorAnime} 0.2s ease-in-out forwards;
  }
`;
const Div = styled.div`
  width: calc(800px - 213px - 88.45px - 2px);
`;

function MovieInfo() {
  const apiKey = process.env.REACT_APP_MovieInfoTsx_File_Apikey;
  const localKey = process.env.REACT_APP_LocalStorageKey;
  const params = useParams();
  const [poseterCheck, setPoseterCheck] = useState(true);
  const [movieName, setMovieName] = useState<string>();
  const [moviePoseter, setmoviePoster] = useState([]);
  const [genre, setGenre] = useState("");
  const [nation, setNation] = useState("");
  const [rating, setRating] = useState("");
  const [titleOrg, setTitleOrg] = useState("");
  const [type, setType] = useState("");
  const [use, setUse] = useState("");
  const [runtime, setRuntime] = useState("");
  const [directorNm, setDirectorNm] = useState("");
  const [directorEnNm, setDirectorEnNm] = useState("");
  const [docid, setDocid] = useState("");

  const MovieListObj = {
    movieName: `${movieName}`,
    moviePoseter: `${moviePoseter}`,
    runtime: `${runtime}`,
    genre: `${genre}`,
    rating: `${rating}`,
  };

  useEffect(() => {
    setMovieName(params.movieNm);
    getMovieInfo();
    localStorage.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Onclick = () => {
    if (docid === "") {
      localStorage.setItem(`${localKey}`, JSON.stringify(MovieListObj));
    } else {
      localStorage.setItem(`${localKey}`, JSON.stringify(MovieListObj));
    }
  };

  const getMovieInfo = async () => {
    const json = await (
      await fetch(
        `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${apiKey}&query=${params.movieNm}
          `
      )
    ).json();
    setType(json.Data[0].Result[0].type);
    setUse(json.Data[0].Result[0].use);
    setGenre(json.Data[0].Result[0].genre);
    setDocid(json.Data[0].Result[0].DOCID);
    setNation(json.Data[0].Result[0].nation);
    setRating(json.Data[0].Result[0].rating);
    setRuntime(json.Data[0].Result[0].runtime);
    setTitleOrg(json.Data[0].Result[0].titleOrg);
    setmoviePoster(json.Data[0].Result[0].posters.split("|")[0]);
    setDirectorNm(json.Data[0].Result[0].directors.director[0].directorNm);
    setDirectorEnNm(json.Data[0].Result[0].directors.director[0].directorEnNm);
  };

  setTimeout(() => {
    if (moviePoseter[0] === undefined) {
      setPoseterCheck(false);
    } else {
      setPoseterCheck(true);
    }
  }, 1);

  const BackButton = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={BackButton} className={style.backButton}>
        뒤로 가기
      </button>
      <div className={style.top}>
        <h1 className={style.title}>영화 정보</h1>
      </div>
      <Container>
        <MainContainer>
          <IMG
            src={poseterCheck ? `${moviePoseter}` : `${noImg}`}
            alt="이미지가 없습니다."
          />
          <Div>
            <Title>
              {movieName ? movieName : null}
              {titleOrg ? `(${titleOrg})` : null}
            </Title>
            <TextContent>
              <TextArea>
                <p>제작 국가 : {nation ? nation : "undefined"}</p>
                <p>사용 : {use ? use : "undefined"}</p>
                <p>상영 시간 : {runtime ? `${runtime}분` : "undefined"}</p>
                <p>유형 : {type ? type : "undefined"} </p>
                <p>장르 : {genre ? `${genre}` : "undefined"}</p>
                <p>상영 등급 : {rating ? rating : "undefined"}</p>
                <p>
                  감독 : {directorNm ? directorNm : "undefined"}
                  {directorEnNm ? `(${directorEnNm})` : null}
                </p>
              </TextArea>
            </TextContent>
          </Div>
          <Hr></Hr>
          <Btn onClick={Onclick} to={`/movietimeset/${movieName}`}>
            시간 선택
          </Btn>
        </MainContainer>
      </Container>
    </>
  );
}

export default MovieInfo;
