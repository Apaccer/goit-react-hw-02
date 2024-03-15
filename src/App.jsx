import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Options from "./assets/components/Options/Options";
import Feedback from "./assets/components/Feedback/Feedback";
import Notification from "./assets/components/Notification/Notification";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbackCounter, setFeedbackCounter] = useState(initialFeedback);
  const updateFeedback = (feedbackType) => {
    setFeedbackCounter({
      ...feedbackCounter,
      [feedbackType]: feedbackCounter[feedbackType] + 1,
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
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
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
    </>
  );
}

export default App;
