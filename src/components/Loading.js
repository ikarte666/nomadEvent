import React from "react";
import Title from "../resources/image/title.gif";

const Loading = () => {
    return (
        <>
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
            <div>환생중입니다....</div>
        </>
    );
};

export default Loading;
