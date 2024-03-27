import Description from "./components/Description/Description";
import { useEffect, useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  // const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveValue = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setReviews({ good: 0, neutral: 0, bad: 0 });
    } else {
      setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
    }
  };

  const feedbackValuesReset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <Description />
      <Options
        reviewsObj={reviews}
        updateReviews={updateFeedback}
        totalFeedbackValue={totalFeedback}
        feedbackReset={feedbackValuesReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviewsObj={reviews}
          goodReview={reviews.good}
          neutralReview={reviews.neutral}
          badReview={reviews.bad}
          totalFeedbackValue={totalFeedback}
          positiveValuePercent={positiveValue}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
export default App;
