import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

function QuestionComp() {
  interface Setup {
    quantity: number,
    category: number,
    level: number
  }

  interface Question {
    question_id: number;
    category_id: number;
    created_at: string;
    content: string;
    level: number;
  }

  interface Answer {
    answer_id: number;
    question_id: number;
    is_answer: number;
    content: string;
    created_at: string;
  }


  interface Data {
    questions: Question[];
    answers: Answer[];
  }
  const setup: Setup = JSON.parse(localStorage.getItem("setup") || "{}");
  console.log(setup);
  const levelName = setup.level === 0 ? "easy" : setup.level === 1 ? "medium" : "difficult";
  console.log(levelName);
  const navigate = useNavigate();
  const [data, setData] = useState<Data | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/questions?category=${setup.category}&level=${levelName}&limit=${setup.quantity}`);
    setData(response.data);
  }


  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckCorrect = (status: number) => {
    if (status === 1) {
      setCorrectAnswers(prev => prev + 1);
    }
    setCurrentQuestion(prev => prev + 1);
  }
  console.log(correctAnswers, currentQuestion);
  console.log(data);

  return (
    <>
      <div className="bg-white p-4 rounded-2">
        {!!data && currentQuestion === data.questions.length ? <Modal
          show={true}
          backdrop="static"
          keyboard={false}
        >

          <Modal.Body>
            <h1 className="text-center">Congrats</h1>
            <p className="text-center">You answered {Math.floor(correctAnswers / currentQuestion * 100)}%</p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="warning" onClick={() => navigate("/")}>Play again</Button>
          </Modal.Footer>
        </Modal> : <></>}
        <p className="text-success text-end">
          Correct Answers: {correctAnswers}/{currentQuestion}
        </p>
        <h2 className="text-center">{!!data && currentQuestion < data?.questions.length && data?.questions[currentQuestion].content}</h2>
        <div className="w-100 d-flex flex-column gap-2 justify-content-center align-items-center mt-4">

          {!!data && currentQuestion < data?.questions.length && data?.answers.filter(e => +e.question_id === data?.questions[currentQuestion].question_id).map((e, i) => <Button key={i} variant="primary" className="w-50" onClick={() => handleCheckCorrect(+ e.is_answer)}>
            {e.content}
          </Button>)}
        </div>

      </div>
    </>
  );
}

export default QuestionComp;
