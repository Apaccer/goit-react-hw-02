import css from "./Feedback.module.css";
import clsx from "clsx";
const Feedback = ({ feedbackCounter, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={css.good}>Good: {feedbackCounter.good}</p>
      <p className={css.neutral}>Neutral: {feedbackCounter.neutral}</p>
      <p className={css.bad}>Bad: {feedbackCounter.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p
        className={clsx(
          css.good,
          {
            [css.neutral]: positiveFeedback > 30 && positiveFeedback < 70,
          },
          {
            [css.bad]: positiveFeedback <= 30,
          }
        )}
      >
        Positive: {positiveFeedback}%
      </p>
    </div>
  );
};

export default Feedback;
