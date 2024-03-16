import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbackCounter, setFeedbackCounter] = useState(() => {
    const stringifiedFeedback = localStorage.getItem("feedbackInfo");
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? initialFeedback;
    return parsedFeedback;
  });
  const updateFeedback = (feedbackType) => {
    setFeedbackCounter((prevFeedback) => {
      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
    });
  };

  useEffect(() => {
    localStorage.setItem("feedbackInfo", JSON.stringify(feedbackCounter));
  }, [feedbackCounter]);
  const totalFeedback =
    feedbackCounter.good + feedbackCounter.neutral + feedbackCounter.bad;
  const positiveFeedback = Math.round(
    ((feedbackCounter.good + feedbackCounter.neutral) / totalFeedback) * 100
  );
  const resetFeedback = () => {
    setFeedbackCounter(initialFeedback);
  };
  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          feedbackCounter={feedbackCounter}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
