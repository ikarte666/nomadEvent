import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const ResultComponent = ({ result }) => {
    const [revival, setRevival] = useState("");
    const [image, setImage] = useState();
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");

    useEffect(() => {
        switch (result) {
            case "LADR":
                import("../resources/image/bidan.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("비단길앞잡이");
                        setText1("가만히 있는 것은 질색. 움직여야 직성이 풀림");
                        setText2("생각보다 인내심이 많음");
                        setText3("주변보단 자신에게 더 관심이 많음");
                        setText4("규칙적인 생활을 좋아함");
                        setText5("가끔은 소심하게 보이기도 하는 타입");
                    })
                    .catch();
                break;
            case "LADM":
                import("../resources/image/newguini.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("뉴기니 악어");
                        setText1("이곳저곳 돌아다니는 것을 좋아함");
                        setText2("주변에 대해 둔감함");
                        setText3("자기관리를 잘 한다");
                        setText4("마음 내키는대로 행동하는 편");
                        setText5("그래도 선은 잘 지키는 타입");
                    })
                    .catch();
                break;
            case "LADC":
                import("../resources/image/africagray.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("아프리카 회색앵무");
                        setText1("가만히 있는 것은 질색. 움직여야 직성이 풀림");
                        setText2("눈치 100단");
                        setText3("내 편은 잘 챙기지만 적에겐 가차없다!");
                        setText4("세상의 기준은 나다! 자존감 만땅");
                        setText5("그래도 가끔은 혼자있고 싶은 타입");
                    })
                    .catch();
                break;
            case "LAGR":
                import("../resources/image/sahara.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("사하라 사막개미");
                        setText1("이곳저곳 돌아다니는 것을 좋아함");
                        setText2("꼼꼼하고 역할에 충실함");
                        setText3("자신에겐 엄격하지만 타인에겐 관대한 편");
                        setText4("규칙적인 생활을 좋아함");
                        setText5("오늘 할 일은 오늘 끝내는 타입");
                    })
                    .catch();
                break;
            case "LAGM":
                import("../resources/image/nambu.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("남부바위뛰기펭귄");
                        setText1("가만히 있는 것은 질색. 움직여야 직성이 풀림");
                        setText2("혼자 있으면 심심해서 못 견딤");
                        setText3("항상 에너지 만땅! 기운이 넘침");
                        setText4("마음 내키는대로 행동하는 편");
                        setText5("그래도 선은 잘 지키는 타입");
                    })
                    .catch();
                break;
            case "LAGC":
                import("../resources/image/bulggul.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("벌꿀오소리");
                        setText1("가만히 있는 것은 질색. 움직여야 직성이 풀림");
                        setText2("자존감 100 자신감 100");
                        setText3("기가 엄청 세다!");
                        setText4("생각하기 전에 먼저 행동함");
                        setText5("한 번 시작한 일은 끝장을 보는 타입");
                    })
                    .catch();
                break;
            case "LNDR":
                import("../resources/image/nambugaemi.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("남부작은개미핥기");
                        setText1("귀차니즘 만렙");
                        setText2("혼자만의 세계관이 있음");
                        setText3("이것저것 상상하는걸 좋아함");
                        setText4("자신에 대해 너무 잘 알고있음");
                        setText5("목표한건 확실하게 이루는 타입");
                    })
                    .catch();
                break;
            case "LNDM":
            case "LNDC":
                import("../resources/image/tanzanian.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("탄자니아 붉은나무껍질전갈");
                        setText1("집이 최고지 암");
                        setText2("호기심이 많은 편");
                        setText3("이론보다는 손으로 만드는 것을 좋아함");
                        setText4("약간 기분파 기질이 있음");
                        setText5("이것저것 마음 가는건 다 해보는 타입");
                    })
                    .catch();
                break;
            case "LNGR":
                import("../resources/image/tibetan.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("티베트 모래여우");
                        setText1("귀차니즘 만렙");
                        setText2("도대체 무슨생각을 하는지 본인도 모름");
                        setText3("그러나 눈치는 엄청나게 빠름");
                        setText4("자신만의 규칙을 만들어서 지킴");
                        setText5("할 때는 확실하게 하는 타입");
                    })
                    .catch();
                break;
            case "LNGM":
                import("../resources/image/orca.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("범고래");
                        setText1("유유자적한 성격");
                        setText2("잔머리가 엄청남");
                        setText3("관심없는 일은 거들떠도 안봄");
                        setText4("쉽게 시작하고 쉽게 질리는 편");
                        setText5("남들이 보기에 만능 해결사처럼 보이는 타입");
                    })
                    .catch();
                break;
            case "LNGC":
                import("../resources/image/samakbee.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("사막비개구리");
                        setText1("귀차니즘 만렙");
                        setText2("나가긴 귀찮은데 막상 나가면 엄청 잘 놈");
                        setText3("화는 잘 안내고 쿨하게 넘김");
                        setText4("그러나 한 번 화나면 누구도 못 막음");
                        setText5("과거에 얽매이지 않는 타입");
                    })
                    .catch();
                break;
            case "IADR":
            case "IADM":
                import("../resources/image/bupyo.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("동해 바다에 떠 있는 부표");
                        setText1("적당히 움직이고 적당히 쉬는게 좋음");
                        setText2("생각보다 인내심이 많음");
                        setText3("주변보단 자신에게 더 관심이 많음");
                        setText4("마음 내키는대로 행동하는 편");
                        setText5("가끔은 소심하게 보이기도 하는 타입");
                    })
                    .catch();
                break;
            case "IADC":
                import("../resources/image/binil.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("바람에 휘날리는 비닐봉지");
                        setText1("가만히 있는 것은 질색. 움직여야 직성이 풀림");
                        setText2("눈치 100단");
                        setText3("내 편은 잘 챙기지만 적에겐 가차없다!");
                        setText4("세상의 기준은 나다! 자존감 만땅");
                        setText5("그래도 가끔은 혼자있고 싶은 타입");
                    })
                    .catch();
                break;
            case "IAGR":
            case "IAGM":
                import("../resources/image/danpoong.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("가을날 떨어지는 단풍잎");
                        setText1("이곳저곳 돌아다니는 것을 좋아함");
                        setText2("꼼꼼하고 역할에 충실함");
                        setText3("자신에겐 엄격하지만 타인에겐 관대한 편");
                        setText4("마음 내키는대로 행동하는 편");
                        setText5("그래도 선은 잘 지키는 타입");
                    })
                    .catch();
                break;
            case "IAGC":
                import("../resources/image/boomerang.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setText1("가만히 있는 것은 질색. 움직여야 직성이 풀림");
                        setRevival("나무 장난감 부메랑");
                        setText2("자존감 100 자신감 100");
                        setText3("머리보단 마음이 시키는 대로 하는 편");
                        setText4("생각하기 전에 먼저 행동함");
                        setText5("어디로 튈 지 모르는 타입");
                    })
                    .catch();
                break;
            case "INDR":
                import("../resources/image/toaster.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("식빵 굽는 토스터기");
                        setText1("귀차니즘 만렙");
                        setText2("혼자만의 세계관이 있음");
                        setText3("이것저것 상상하는걸 좋아함");
                        setText4("자신에 대해 너무 잘 알고있음");
                        setText5("할 일은 확실하게 하는 타입");
                    })
                    .catch();
                break;
            case "INDM":
                import("../resources/image/toejuck.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("퇴적암 파편");
                        setText1("귀차니즘 만렙");
                        setText2("관찰력이 좋은 편");
                        setText3("인내심이 상당함");
                        setText4("주변에 대해선 둔감한 편");
                        setText5("자신만의 확고한 철학을 가진 타입");
                    })
                    .catch();
                break;
            case "INDC":
                import("../resources/image/saint.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("세인트 헬렌 화산 속 마그마");
                        setText1("약간 기분파 기질이 있음");
                        setText2("애매한것을 제일 싫어함");
                        setText3("할 땐 하지만 안할 땐 절대 안함");
                        setText4("혼자서도 나가서도 잘 노는 편");
                        setText5("어디로 튈 지 모르는 타입");
                    })
                    .catch();
                break;
            case "INGR":
            case "INGM":
                import("../resources/image/seoul.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("서울역 시계탑");
                        setText1("집순이, 집돌이");
                        setText2("이론보단 실전을 좋아함");
                        setText3("눈치가 빠른 편");
                        setText4("주변 사람들을 잘 챙김");
                        setText5("규칙적인 생활을 좋아하는 타입");
                    })
                    .catch();
                break;
            case "INGC":
                import("../resources/image/slot.jpg")
                    .then((obj) => {
                        setImage(obj.default);
                        setRevival("라스베가스 카지노 슬롯머신");
                        setText1("세상만사는 전부 귀찮은 일");
                        setText2("그래도 노는건 좋아함");
                        setText3("자신감 넘침. 자존감도 넘침");
                        setText4("주변에서 괴짜라고 생각함");
                        setText5("도무지 예측할 수가 없는 타입");
                    })
                    .catch();
                break;
            default:
                break;
        }
    }, []);

    return (
        <div>
            <div className="result-container">
                <h4 className="result">▶ {text1}</h4>
                <h4 className="result">▶ {text2}</h4>
                <h4 className="result">▶ {text3}</h4>
                <h4 className="result">▶ {text4}</h4>
                <h4 className="result">▶ {text5}</h4>
            </div>
            <img alt="result" src={image} style={{ width: "100%" }} />
            위와 같은 특성을 지닌 당신은 다음 생에{" "}
            <h2 style={{ textShadow: "2px 1px 5px yellow" }}>{revival}</h2>
            (으)로 환생하게 될 예정입니다!
            <p>
                <Link to={""} className="btn">
                    테스트 다시 하기
                </Link>
            </p>
        </div>
    );
};

const Result = (props) => {
    const { isLiving, disposition1, disposition2, disposition3 } =
        props.location.state;
    const [isLoading, setIsLoading] = useState(true);

    const result = () => {
        let resultString = isLiving ? "L" : "I";
        const { active, inactive } = disposition1;
        const { indifference, aggressive } = disposition2;
        const { rule, middle, chaos } = disposition3;
        resultString =
            active > inactive ? resultString + "A" : resultString + "N";
        resultString =
            indifference > aggressive ? resultString + "D" : resultString + "G";
        if (rule === middle && middle === chaos) {
            resultString = resultString + "M";
        } else {
            if (rule > 1) {
                resultString = resultString + "R";
            } else if (middle > 1) {
                resultString = resultString + "M";
            } else if (chaos > 1) {
                resultString = resultString + "C";
            }
        }
        return resultString;
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading && <Loading />}
            {!isLoading && <ResultComponent result={result()} />}
        </div>
    );
};

export default Result;
