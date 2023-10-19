import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function QuestionComp() {
  interface Setup {
    quantity: number,
    category: number,
    level: string
  }
  const setup: Setup = JSON.parse(localStorage.getItem("setup") || "{}");
  console.log(setup);

  const [data, setData] = useState<object[]>([])
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/questions?category=${setup.category}&level=${setup.level}&limit=${setup.quantity}`);
    setData(response.data);
  }

  console.log(data);
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className="bg-white p-4 rounded-2">
        <p className="text-success text-end">
          Correct Answers: {correctAnswers}/
        </p>
        <h2 className="text-center">dijawodjwai</h2>
        <div className="w-100 d-flex flex-column gap-2 justify-content-center align-items-center mt-4">
          <Button variant="primary" className="w-50">
            dwad
          </Button>
          <Button variant="primary" className="w-50">
            dwad
          </Button>
          <Button variant="primary" className="w-50">
            dwad
          </Button>
        </div>
        <div className="d-flex justify-content-end  mt-5">
          <Button variant="warning fw-bold">Next Question</Button>
        </div>
      </div>
    </>
  );
}

export default QuestionComp;
