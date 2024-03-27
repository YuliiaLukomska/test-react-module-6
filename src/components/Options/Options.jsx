import css from "./Options.module.css";

const Options = ({ reviewsObj, updateReviews, totalFeedbackValue }) => {
  const reviewArray = Object.keys(reviewsObj);

  return (
    <ul
      onClick={(event) => updateReviews(event.target.innerHTML)}
      className={css.buttonsWrapper}
    >
      {reviewArray.map((review, index, array) => (
        <li key={index}>
          <button className={css.button}>{array[index]}</button>
        </li>
      ))}
      {totalFeedbackValue > 0 && (
        <li>
          <button className={css.button}>reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
