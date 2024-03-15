const Feedback = ({ feedbackCounter, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p>Good: {feedbackCounter.good}</p>
      <p>Neutral: {feedbackCounter.neutral}</p>
      <p>Bad: {feedbackCounter.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
