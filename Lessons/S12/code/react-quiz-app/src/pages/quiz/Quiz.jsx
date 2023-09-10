import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material";
import FormContainer from "../../components/FormContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnsweres] = useState([]);
  const [value, setValue] = useState();
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const { category } = useParams();

  const handleChange = (event, value) => {
    setPage(value);
    setValue(answers[page - 1].answer);
  };

  useEffect(() => {
    setValue(answers[page - 1]?.answer);
  }, [answers, page]);

  const handleAnswer = (value) => {
    setAnsweres((preAnsweres) => {
      preAnsweres[page - 1] = {
        id: page,
        answer: value.target.value,
        correct: questions[page - 1].correct_answer,
      };
      setValue(value.target.value);
      return preAnsweres;
    });
    if (page + 1 <= questions.length) handleChange(null, page + 1);
  };

  useEffect(() => {
    const numberOfQ = +localStorage.getItem("numOfQ");
    setAnsweres(Array(numberOfQ).fill({ id: 0, answer: "", correct: 0 }));
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQ}&category=${
          category ?? "any"
        }&difficulty=medium&type=multiple`
      )
      .then((res) => {
        setQuestions(
          res.data.results.map((item) => ({
            ...item,
            options: [...item.incorrect_answers, item.correct_answer]
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map((value) => value),
          }))
        );
      });
  }, [category]);

  const finish = () => {
    const score = answers.filter(
      (item) => item.answer === item.corrrect
    ).length;

    sessionStorage.setItem("score", score + "/" + questions.length);

    navigate("/result/" + category);
  };

  return (
    <FormContainer>
      <Grid container gap={2}>
        <Grid item md={12}>
          {questions.length > 0 ? (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                <div
                  dangerouslySetInnerHTML={{
                    __html: questions[page - 1].question,
                  }}
                />
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={value}
                onChange={handleAnswer}
              >
                {questions[page - 1].options.map(({ value }) => (
                  <FormControlLabel
                    value={value}
                    key={value}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <CircularProgress size={30} />
          )}
        </Grid>
        <Grid item md={12}>
          <Pagination
            count={questions.length}
            page={page}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" color="success" onClick={finish}>
            Finish
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
}
export default Quiz;
