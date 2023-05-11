/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function movieInfo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();
  const apiKey = "LLVTF2N6QAMH91G45D24";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movieName, setMovieName] = useState<string>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [moviePoseter, setmoviePoster] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [genre, setGenre] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nation, setNation] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rating, setRating] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [titleEng, setTitleEng] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [titleOrg, setTitleOrg] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [type, setType] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [use, setUse] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [runtime, setRuntime] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [directorNm, setDirectorNm] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [directorEnNm, setDirectorEnNm] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMovieName(params.movieNm);
    getMovieInfo();
  }, []);

  const getMovieInfo = async () => {
    const json = await (
      await fetch(
        ` https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${apiKey}&query=${params.movieNm}
          `
      )
    ).json();
    setmoviePoster(json.Data[0].Result[0].posters.split("|")[0]);
    setGenre(json.Data[0].Result[0].genre);
    setNation(json.Data[0].Result[0].nation);
    setRating(json.Data[0].Result[0].rating);
    setTitleEng(json.Data[0].Result[0].titleEng);
    setTitleOrg(json.Data[0].Result[0].titleOrg);
    setType(json.Data[0].Result[0].type);
    setUse(json.Data[0].Result[0].use);
    setRuntime(json.Data[0].Result[0].runtime);
    setRuntime(json.Data[0].Result[0].runtime);
    setDirectorNm(json.Data[0].Result[0].directors.director[0].directorNm);
    setDirectorEnNm(json.Data[0].Result[0].directors.director[0].directorEnNm);

    console.log(json.Data[0].Result[0]);
  };

  return (
    <div>
      <div>
        <img src={`${moviePoseter}`} alt="이미지가 없습니다." />
        <h3>
          {movieName ? movieName : null}
          {titleOrg ? `(${titleOrg})` : null}
        </h3>
        <span>
          장르 : {type ? type : "undefined"} {genre ? `, ${genre}` : null}
        </span>
        <br />
        <span>사용 용도 : {use ? use : "undefined"}</span>
        <br />
        <span>제작 국가 : {nation ? nation : "undefined"}</span>
        <br />
        <span>상영 등급 : {rating ? rating : "undefined"}</span>
        <br />
        <span>상영 시간 : {runtime ? `${runtime}분` : "undefined"}</span>
        <br />
        <span>
          감독 : {directorNm ? directorNm : "undefined"}{" "}
          {directorEnNm ? `(${directorEnNm})` : null}
        </span>
      </div>
    </div>
  );
}

export default movieInfo;
