import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";
import RouteNoMatch from "./components/RouteNoMatch";
import "./resources/css/Main.css";
import Title from "./resources/image/title.gif";

const FirstPage = () => {
    return (
        <>
            <h1 className="mainTitle">환생 심리 테스트</h1>
            <h3 className="description">
                다음 생에 나는 무엇으로 태어나게 될까?
            </h3>
            <img
                alt="title"
                src={Title}
                style={{
                    width: "500px",
                    height: "400px",
                    display: "block",
                    margin: "0 auto",
                }}
            />
            <Link to="/questions/" className="btn">
                테스트 시작하기
            </Link>
        </>
    );
};

const Main = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={FirstPage} />
                    <Route path="/questions/" exact component={Questions} />
                    <Route path="/result/" exact component={Result} />
                    <Route component={RouteNoMatch} />
                </Switch>
            </div>
            <hr style={{ width: "500px", marginTop: "40px" }} />
            <footer
                style={{
                    width: "500px",
                    textAlign: "center",
                    margin: "0 auto",
                    textAlign: "right",
                }}
            >
                &copy;2021 Nomad Event
            </footer>
        </BrowserRouter>
    );
};

export default Main;
