import "./cardempty.scss";

export const CardEmpty = ({text}) => (
    <div className="cardEmpty">
        <div className="cardEmpty_notResult">{text}</div>
    </div>
    );