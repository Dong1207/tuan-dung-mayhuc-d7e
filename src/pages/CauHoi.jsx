import React, { useState } from "react";
import "../styles/CauHoi.css";

const questions = [
  {
    id: 1,
    type: "tracnghiem",
    question: "Biến mô men thủy lực có chức năng gì?",
    options: [
      "Truyền mô men xoắn từ động cơ đến hộp số",
      "Tăng tốc độ quay của động cơ",
      "Giảm tốc độ quay của động cơ",
      "Tạo ra mô men xoắn mới",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    type: "tracnghiem",
    question: "Hộp số hành tinh có bao nhiêu bánh răng hành tinh?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
  },
  {
    id: 3,
    type: "tracnghiem",
    question: "Truyền lực cạnh có chức năng gì?",
    options: [
      "Truyền mô men xoắn từ hộp số đến bánh xe",
      "Tăng tốc độ quay của bánh xe",
      "Giảm tốc độ quay của bánh xe",
      "Tạo ra mô men xoắn mới",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    type: "tuluan",
    question: "Trình bày nguyên lý hoạt động của biến mô men thủy lực.",
  },
  {
    id: 5,
    type: "tuluan",
    question: "Trình bày nguyên lý hoạt động của hộp số hành tinh.",
  },
  {
    id: 6,
    type: "tuluan",
    question: "Trình bày nguyên lý hoạt động của truyền lực cạnh.",
  },
];

const CauHoi = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState({});
  const [checked, setChecked] = useState({});

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setAnswers({});
    setShowResults(false);
    setSubmitted({});
    setChecked({});
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [current]: answer });
  };

  const handleSubmit = () => {
    setSubmitted({ ...submitted, [current]: true });
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const checkResult = () => {
    setChecked({ ...checked, [current]: true });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (q.type === "tracnghiem" && answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const currentQuestion = questions[current];
  const isLastQuestion = current === questions.length - 1;

  return (
    <div className="cauhoi-page">
      <h1>Câu hỏi</h1>
      {!showResults ? (
        <div className="quiz-container">
          <div className="question">
            <h2>
              Câu {current + 1}: {currentQuestion.question}
            </h2>
            {currentQuestion.type === "tracnghiem" ? (
              <div className="options">
                {currentQuestion.options.map((option, index) => {
                  let labelClass = "option-label";
                  if (answers[current] === index) labelClass += " selected";
                  if (checked[current]) {
                    if (index === currentQuestion.correctAnswer)
                      labelClass += " correct";
                    else if (
                      answers[current] === index &&
                      index !== currentQuestion.correctAnswer
                    )
                      labelClass += " wrong";
                  }
                  return (
                    <label
                      key={index}
                      className={labelClass}
                      style={{
                        display: "block",
                        marginBottom: 8,
                        cursor: submitted[current] ? "not-allowed" : "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`question-${current}`}
                        value={index}
                        checked={answers[current] === index}
                        onChange={() => handleAnswer(index)}
                        disabled={submitted[current] || checked[current]}
                        style={{ marginRight: 8 }}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="navigation">
            <button
              className="secondary"
              onClick={prev}
              disabled={current === 0}
            >
              Trước
            </button>
            {currentQuestion.type === "tracnghiem" ? (
              <>
                <button
                  className="primary"
                  onClick={next}
                  disabled={current === questions.length - 1}
                >
                  Tiếp
                </button>
                <button
                  className="primary"
                  onClick={checkResult}
                  disabled={checked[current] || answers[current] === undefined}
                >
                  Kiểm tra kết quả
                </button>
              </>
            ) : (
              <button
                className="primary"
                onClick={handleSubmit}
                disabled={submitted[current]}
              >
                {isLastQuestion ? "Nộp bài" : "Tiếp"}
              </button>
            )}
            <button className="secondary" onClick={resetQuiz}>
              Làm lại
            </button>
            {isLastQuestion && (
              <button className="primary" onClick={() => setShowResults(true)}>
                Kết thúc
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="results">
          <h2>Kết quả</h2>
          <p>
            Số câu trả lời đúng: {calculateScore()} /{" "}
            {questions.filter((q) => q.type === "tracnghiem").length}
          </p>
          <button onClick={resetQuiz}>Làm lại</button>
        </div>
      )}
    </div>
  );
};

export default CauHoi;
