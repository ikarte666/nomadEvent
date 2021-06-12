import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const Questions = (props) => {
    const [qNum, setQNum] = useState(1);
    const [isLiving, setIsLiving] = useState();
    const [disposition1, setDisposition1] = useState({
        active: 0,
        inactive: 0,
    });
    const [disposition2, setDisposition2] = useState({
        indifference: 0,
        aggressive: 0,
    });
    const [disposition3, setDisposition3] = useState({
        rule: 0,
        middle: 0,
        chaos: 0,
    });
    const [question, setQuestion] = useState("");
    const [btn1Text, setBtn1Text] = useState("");
    const [btn2Text, setBtn2Text] = useState("");
    const [btn3Text, setBtn3Text] = useState("");

    useEffect(() => {
        setQuestion("1. 다음 생에 나는...");
        setBtn1Text("생물로 태어나고 싶다.");
        setBtn2Text("무생물로 태어나고 싶다.");
    }, []);

    useEffect(() => {
        switch (qNum) {
            case 2:
                setQuestion("2. 자신과 가장 잘 맞을 것 같은 취미활동은?");
                setBtn1Text("음악을 들으며 그림 그리기");
                setBtn2Text("산책로 따라서 자전거타기");
                setBtn3Text("판타지 소설 시리즈 정주행하기");
                break;
            case 3:
                setQuestion(
                    "3. 여러가지 문제로 스트레스가 잔뜩 쌓인 당신. 어떻게 이 스트레스를 해소할 것인가?",
                );
                setBtn1Text("'야, 나와' 일단 친구들을 불러 모은다.");
                setBtn2Text(
                    "'자연이 날 부른다!' 산으로 바다로 떠나 경치를 구경한다.",
                );
                setBtn3Text(
                    "'집 밖은 위험해' 그냥 집에서 폰보고 겜하는게 최고다.",
                );
                break;
            case 4:
                setQuestion(
                    "4. 조별과제 진행 중 다른 조원들이 비협조적으로 나온다면 당신은 어떻게 할 것인가?",
                );
                setBtn1Text(
                    "짜증은 나지만 점수를 위해 어쩔 수 없이 혼자라도 열심히 한다.",
                );
                setBtn2Text("한 명이라도 제대로 참여하게끔 설득하려 노력한다.");
                setBtn3Text("다 같이 그냥 시원하게 말아먹는다.");
                break;
            case 5:
                setQuestion(
                    "5. 30분이면 도착한다던 치킨이 1시간이 다 되어가도록 오질 않는다. 매장에 전화를 해 봐도 바쁜 상황인지 받지 않는다. 당신의 행동은?",
                );
                setBtn1Text("'뭐 그럴수도 있지' 그냥 올 때까지 기다린다.");
                setBtn2Text(
                    "기다리긴 하는데 다음부터 다신 여기서 시켜먹지 않겠다 다짐한다.",
                );
                setBtn3Text(
                    "'장사를 이따구로 해?' 받을 때까지 전화를 건다. 안 받으면 매장에 찾아간다.",
                );
                break;
            case 6:
                setQuestion(
                    "6. 어두운 밤, 골목길을 혼자 걷던 당신은 저 앞에 모자를 눌러 쓴 남자가 서 있는것을 보게 된다. 수상해보이는데 어떻게 할 것인가?",
                );
                setBtn1Text("'사람이네?' 무시하고 그냥 간다.");
                setBtn2Text(
                    "'여보세요? 잠깐 시간 돼?' 친구와 통화를 하며 지나간다.",
                );
                setBtn3Text(
                    "'만약 나한테 다가온다면..' 혹시 모를 사태를 대비하며 지나간다.",
                );
                break;
            case 7:
                setQuestion(
                    "7. 붕어빵 한 봉지를 다 먹은 당신. 이제 손에는 빈 종이 봉투만 남아있다. 주변에 쓰레기통이 안 보이는데 어떻게 할 것인가?",
                );
                setBtn1Text("쓰레기통이 나올 때 까지 가지고 다닌다.");
                setBtn2Text(
                    "주변에 아무도 없다면 그냥 버리지만, 보는 눈이 있다면 일단 가지고 다닌다.",
                );
                setBtn3Text("고이 접어서 그냥 길에 버린다.");
                break;
            case 8:
                setQuestion(
                    "8. 쉬는 날, 배고파 죽겠는데 집에 먹을 것이 하나도 없다. 당신의 선택은?",
                );
                setBtn1Text(
                    "'귀찮아도 밥은 잘 먹어야지' 배고픔을 참으며 장을 보고 밥을 해먹는다.",
                );
                setBtn2Text(
                    "'뭐 한끼 정도야' 근처 편의점에 가서 도시락을 사먹는다.",
                );
                setBtn3Text("'띵동' 이미 배달음식을 시켰다.");
                break;
            case 9:
                setQuestion(
                    "9. 친구들과 공원 농구장에서 농구를 하던 중, 다른 사람들이 대결을 신청했다! 친구들은 당신의 결정에 따르겠다고 한다. 어떻게 할 것인가?",
                );
                setBtn1Text("모르는 사람들이 끼면 불편하니 적당히 거절한다.");
                setBtn2Text(
                    "재밌을 것 같지만 우리끼리 하는게 더 재밌으니 거절한다.",
                );
                setBtn3Text("'감히 우리에게 덤벼?' 바로 승낙한다.");
                break;
            case 10:
                setQuestion(
                    "10. 도서관에서 책을 빌리고 잊고있었다! 당장 반납하지 않으면 연체가 되는 상황. 어떻게 할 것인가?",
                );
                setBtn1Text(
                    "'연체는 죽어도 안돼!' 당장 뛰쳐나가 연체되는 것을 막는다.",
                );
                setBtn2Text(
                    "'다음부턴 좀 조심해야지..' 이번엔 어쩔 수 없다 생각하고 다음날 반납한다.",
                );
                setBtn3Text(
                    "'밀린만큼 안 빌리면 되는거 아냐?' 이왕 연체하는김에 며칠 더 읽고 반납한다.",
                );
                break;

            default:
                break;
        }
    }, [qNum]);

    const addProperty = (property, typeNum) => {
        const arrowFunc = (prev) => {
            const prevValue = prev[property];
            return { ...prev, [property]: prevValue + 1 };
        };
        switch (typeNum) {
            case 1:
                setDisposition1(arrowFunc);
                break;
            case 2:
                setDisposition2(arrowFunc);
                break;
            case 3:
                setDisposition3(arrowFunc);
                break;
            default:
                break;
        }
    };

    const buttonTrigger = (btnNum) => {
        switch (btnNum) {
            case "btn_1":
                switch (qNum) {
                    case 1:
                        setIsLiving(true);
                        break;
                    case 2:
                        addProperty("inactive", 1);
                        break;
                    case 3:
                        addProperty("active", 1);
                        break;
                    case 4:
                        addProperty("rule", 3);
                        break;
                    case 5:
                        addProperty("indifference", 2);
                        break;
                    case 6:
                        addProperty("indifference", 2);
                        break;
                    case 7:
                        addProperty("rule", 3);
                        break;
                    case 8:
                        addProperty("active", 1);
                        break;
                    case 9:
                        addProperty("indifference", 2);
                        break;
                    case 10:
                        addProperty("rule", 3);
                        break;
                    default:
                        break;
                }
                break;
            case "btn_2":
                switch (qNum) {
                    case 1:
                        setIsLiving(false);
                        break;
                    case 2:
                        addProperty("active", 1);
                        break;
                    case 3:
                        addProperty("active", 1);
                        break;
                    case 4:
                        addProperty("middle", 3);
                        break;
                    case 5:
                        addProperty("indifference", 2);
                        break;
                    case 6:
                        addProperty("indifference", 2);
                        break;
                    case 7:
                        addProperty("middle", 3);
                        break;
                    case 8:
                        addProperty("active", 1);
                        break;
                    case 9:
                        addProperty("indifference", 2);
                        break;
                    case 10:
                        addProperty("middle", 3);
                        break;
                    default:
                        break;
                }
                break;
            case "btn_3":
                switch (qNum) {
                    case 2:
                        addProperty("inactive", 1);
                        break;
                    case 3:
                        addProperty("inactive", 1);
                        break;
                    case 4:
                        addProperty("chaos", 3);
                        break;
                    case 5:
                        addProperty("aggressive", 2);
                        break;
                    case 6:
                        addProperty("aggressive", 2);
                        break;
                    case 7:
                        addProperty("chaos", 3);
                        break;
                    case 8:
                        addProperty("inactive", 1);
                        break;
                    case 9:
                        addProperty("aggressive", 2);
                        break;
                    case 10:
                        addProperty("chaos", 3);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (qNum === 10) {
            props.history.push({
                pathname: "/result",
                state: {
                    isLiving,
                    disposition1,
                    disposition2,
                    disposition3,
                },
            });
        }
    }, [disposition3]);

    const nextQuestion = (e) => {
        const btnNum = e.target.className.slice(0, 5);
        buttonTrigger(btnNum);

        if (qNum !== 10) {
            setQNum(qNum + 1);
        }
    };

    return (
        <div>
            <h3>{question}</h3>
            <div>
                <button
                    className="btn_1 btn"
                    onClick={nextQuestion}
                    style={{
                        fontFamily: "Song Myung, serif",
                        fontSize: "1.3rem",
                    }}
                >
                    {btn1Text}
                </button>
                <button
                    className="btn_2 btn"
                    onClick={nextQuestion}
                    style={{
                        fontFamily: "Song Myung, serif",
                        fontSize: "1.3rem",
                    }}
                >
                    {btn2Text}
                </button>
                {qNum !== 1 && (
                    <button
                        className="btn_3 btn"
                        onClick={nextQuestion}
                        style={{
                            fontFamily: "Song Myung, serif",
                            fontSize: "1.3rem",
                        }}
                    >
                        {btn3Text}
                    </button>
                )}
            </div>
            <ProgressBar qNum={qNum} />
        </div>
    );
};

export default Questions;
