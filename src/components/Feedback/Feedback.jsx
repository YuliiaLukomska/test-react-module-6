const Feedback = ({
  goodReview,
  neutralReview,
  badReview,
  totalFeedbackValue,
  positiveValuePercent,
}) => {
  return (
    <ul>
      <li>
        <p>Good: {goodReview}</p>
      </li>
      <li>
        <p>Neutral: {neutralReview}</p>
      </li>
      <li>
        <p>Bad: {badReview}</p>
      </li>
      {totalFeedbackValue > 0 && (
        <>
          <li>
            <p>Total: {totalFeedbackValue}</p>
          </li>
          <li>
            <p>Positive: {positiveValuePercent}%</p>
          </li>
        </>
      )}
    </ul>
  );
};

export default Feedback;
