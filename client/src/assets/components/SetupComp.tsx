import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
function SetupComp() {
    localStorage.removeItem("setup");
    interface Category {
        category_id: string;
        name: string;
      }
    const [quantity,setQuantity] = useState<number>(1);
    const [categories,setCategories]=useState<Category[]>([]);
    const [category,setCategory]=useState<number>(1);
    const [level,setLevel]=useState<number>(0);

    const fetchData = async ()=>{
       const response = await axios.get("http://localhost:3000/api/v1/categories");
       setCategories(response.data);
    }
    useEffect(()=>{
        fetchData();
    },[])

    const navigate = useNavigate();

    const handleCompleteSetup = ()=>{
        localStorage.setItem("setup",JSON.stringify({quantity,category,level}));
        navigate("/questions");
    }

    console.log(categories);
    
    
  return (
    <>
      <div className="w-100 bg-white p-5 rounded-2">
        <h1>Setup Quiz</h1>
        <Form.Label htmlFor="quantity">Number Of Question</Form.Label>
        <Form.Control className="mb-3" size="lg" type="number" name="quantity" value={quantity} onChange={(e)=>setQuantity(+e.target.value)}/>
        <Form.Label htmlFor="">Category</Form.Label>
        <Form.Select className="mb-3"  value={category} onChange={(e)=>setCategory(+e.target.value)}>
          {categories?.map((e,i)=>
            <option key={i} value={e.category_id}>{e.name}</option>
          )}
        </Form.Select>
        <Form.Label htmlFor="">Difficulty</Form.Label>
        <Form.Select value={level} onChange={(e)=>setLevel(+e.target.value)}>
          <option value="0">Easy</option>
          <option value="1">Medium</option>
          <option value="2">Difficult</option>
        </Form.Select>
        <Button  variant="warning" className="w-100 mt-3" onClick={handleCompleteSetup}>Start</Button>
      </div>
    </>
  );
}

export default SetupComp;
