import React from "react";

const ProgressBar = (props) => {
    const { qNum } = props;
    return (
        <div style={{ marginTop: "5rem" }}>
            <progress value={qNum} max="10" />
            <br />
            {qNum} / 10
        </div>
    );
};

export default ProgressBar;
