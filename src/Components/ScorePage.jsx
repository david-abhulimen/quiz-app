import React from 'react';
import "./scorePage.css"
import { useLocation, useNavigate } from 'react-router-dom';

const ScorePage = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const score = state.score;
    const icon = state.quizIcon;
    const topic = state.topic;



    const handlePlayAgainClick = () => {
        navigate('/');
    }

    return (
        <div className="pageContainer">
            <div className="backGroundContainer">
                <div className="firstCurve"></div>
                <div className="secondCurve"></div>
            </div>
            <div className="mainContentContainer">
            <div className="mainContent">
                <div className="quizIndicator">
                    <div className="indicatorContent">
                        <div className="iconContainer">
                            {icon}
                        </div>
                        <div className="indicatorText">
                            {topic}
                        </div>
                    </div>
                    <div className="swithTheme"></div>
                </div>
                <div className="textIntroduction">
                    <div className="introTextContainer">
                        <h1 className="introText">Quiz Completed</h1>
                        <h1 className="introTextSecondLine">You Scored...</h1>
                    </div>
                </div>
                <div className="optionsContainer">
                    <div className="scoreDisplayContainer">
                        <div className="scoreTextContainer">
                            <div className="scoreText">
                                <p>
                                    {score}
                                </p>
                                <div className="instructionText">out of 10</div>
                            </div>
                        </div>
                    </div>
                    <button className="submitContainer submitTextContainer" onClick={handlePlayAgainClick}>
                        <p className="submitText">
                            Play Again
                        </p>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ScorePage