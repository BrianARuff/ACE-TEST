import React from "react";
import "../style/Question.css";

class Question extends React.Component {
    handleChange = e => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        if (value) {
            this.props.increaseScore();
        } else {
            this.props.decreaseScore();
        }
        console.log(value);
        console.log(e.target.type);
    };

    render() {
        return (
            <div className="question-container">
                <div className="question-text-container">
                    <h4 className="question-number">
                        {this.props.number + 1}.{" "}
                        <span className="question-text">
                            {this.props.question}
                        </span>
                    </h4>
                </div>
                <div className="check-group">
                    <label htmlFor="">If Yes, please check</label>
                    <input onChange={this.handleChange} type="checkbox" />
                </div>
            </div>
        );
    }
}

export default Question;
