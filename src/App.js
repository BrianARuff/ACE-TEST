import React, { Component } from "react";
import Question from "./components/Question";
import "./App.css";

class App extends Component {
    state = {
        score: 0,
        color: "",
        questions: [
            `Did a parent or other adult in the household often swear at you, insult you, put you down, or humiliate you, or act in a way that made you afraid that you might be physically hurt?`,
            `Did a parent or other adult in the household often push, grab, slap, or throw something at you, or ever hit you so hard that you had marks or were injured?`,
            `Did an adult or person at least 5 years older than you ever touch or fondle you or have you touch their body in a sexual way, or try to or actually have oral, anal, or vaginal sex with you?`,
            `Did you often feel that no one in your family loved you or thought you were important or special, or your family didn’t look out for each other, feel close to each other, or support each other? `,
            `Did you often feel that you didn’t have enough to eat, had to wear dirty clothes, and had no one to protect you, or your parents were too drunk or high to take care of you or take you to the doctor if you needed it?`,
            `Were your parents ever separated or divorced?`,
            `Was your mother or stepmother: often pushed, grabbed, slapped, or had something thrown at her, or sometimes or often kicked, bitten, hit with a fist, or hit with something hard, or ever repeatedly hit over at least a few minutes or threatened with a gun or knife?`,
            `Did you live with anyone who was a problem drinker or alcoholic or who used street drugs?`,
            `Was a household member depressed or mentally ill or did a household member attempt suicide?`,
            `Did a household member go to prison?`
        ]
    };

    // updateColor = () => {
    //     if (this.state.score === 0 || this.state.score === 1) {
    //         this.setState({ color: "green" });
    //     } else if (this.state.score === 2) {
    //         this.setState({ color: "yellow" });
    //     } else if (this.state.score === 3) {
    //         this.setState({ color: "red" });
    //     }
    // };

    increaseScore = () => {
        this.setState({ score: this.state.score + 1 });
    };

    decreaseScore = () => {
        this.setState({ score: this.state.score - 1 });
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
            </div>
        );
    }
}

export default App;
