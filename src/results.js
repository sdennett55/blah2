import React from "react";
import cx from "classnames";
import "./results.scss";

const Results = ({
  score,
  activeCollection,
  getActiveCat,
  activeCategory,
  backToMenu,
  finalAnswers
}) => {
  return (
    <div className="Staging">
      <p className="Score">Score: {score}</p>
      <ul className="Results-list">
        {finalAnswers.map(({ name, status }) => (
          <li
            key={name}
            className={cx("Results", {
              "Results--skip": status === "skip"
            })}
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="Results-btnWrap">
        {activeCollection.size > 0 && (
          <button
            className="Results-btn Results-btn--go"
            onClick={() => {
              getActiveCat(activeCategory);
            }}
          >
            Play {activeCategory} again
          </button>
        )}
        <button
          className="Results-btn"
          onClick={() => {
            backToMenu();
          }}
        >
          New Category
        </button>
      </div>
    </div>
  );
};

export default Results;