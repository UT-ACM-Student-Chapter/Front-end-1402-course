import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import { Categories } from "../../components/CategoriesOfQuiz";

function Register() {
  const [form, setForm] = useState({
    username: "",
    quizNumber: 5,
    category: "9",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setForm({ ...form, username: localStorage.getItem("username") });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submit() {
    if (form.username) {
      localStorage.setItem("username", form.username);
      localStorage.setItem("numOfQ", form.quizNumber);
      navigate("/quiz/" + form.category);
    } else {
      alert("Please enter your username");
    }
  }
  return (
    <FormContainer>
      <Grid container direction={"column"} gap={4}>
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="username"
              value={form.username}
              variant="standard"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Number of questions
            </InputLabel>
            <NativeSelect
              defaultValue={form.quizNumber}
              onChange={(e) => setForm({ ...form, quizNumber: e.target.value })}
            >
              <option value={5}>Five</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
            </NativeSelect>
          </Box>
        </Grid>
        <Grid item>
          <NativeSelect
            name="trivia_category"
            defaultValue={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <Categories />
          </NativeSelect>
        </Grid>
        <Grid item container gap={2}>
          <Button variant="contained" color="success" onClick={submit}>
            Start the quiz
          </Button>
          <Button variant="outlined" color="error" component={Link} to="/">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default Register;
