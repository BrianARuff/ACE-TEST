import React, { Component } from "react";
import Question from "./components/Question";
import "./App.css";

class App extends Component {
    state = {
        score: 0,
        color: "",
        questions: [
            `Did a parent or other adult in the household often …
      Swear at you, insult you, put you down, or humiliate you, or
      Act in a way that made you afraid that you might be physically hurt?`,
            `Did a parent or other adult in the household often …
      Push, grab, slap, or throw something at you, or Ever hit you so hard that you had marks or were injured?`,
            `Did an adult or person at least 5 years older than you ever…
      Touch or fondle you or have you touch their body in a sexual way, or Try to or actually have oral, anal, or vaginal sex with you?`
        ]
    };

    updateColor = () => {
        if (this.state.score === 0 || this.state.score === 1) {
            this.setState({ color: "green" });
        } else if (this.state.score === 2) {
            this.setState({ color: "yellow" });
        } else if (this.state.score === 3) {
            this.setState({ color: "red" });
        }
    };

    increaseScore = () => {
        this.setState({ score: this.state.score + 1 }, () => this.updateColor());
    };

    decreaseScore = () => {
        this.setState({ score: this.state.score - 1 }, () => this.updateColor());
        this.updateColor();
    };

    render() {
        return (
            <div className="App">
                <h1>ACE Test</h1>
                <h2 style={{ color: this.state.color }} className="score">
                    Score: {this.state.score}
                </h2>
                {this.state.questions.map((question, index) => {
                    return (
                        <Question
                            number={index}
                            question={question}
                            score={this.state.score}
                            increaseScore={this.increaseScore}
                            decreaseScore={this.decreaseScore}
                        />
                    );
                })}
                <small>
                    This questionaire does not replace professional care from a
                    credentialed counselor. Please seek help from a qualified
                    professional for more precise results.
                </small>
            </div>
        );
    }
}

export default App;
