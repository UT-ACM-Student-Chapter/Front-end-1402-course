import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormContainer from "../../components/FormContainer";

function Result() {
  const [score, setScore] = useState();
  const [username, setUsername] = useState();

  const params = useParams();

  useEffect(() => {
    setScore(sessionStorage.getItem("score"));
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <FormContainer>
      <Grid container direction={"column"} gap={4}>
        <Grid item>
          <Typography variant="h5">{username}: Your Score</Typography>{" "}
          <Typography variant="h4">{score}</Typography>{" "}
        </Grid>
        <Grid item container gap={2}>
          <Button
            variant="contained"
            color="success"
            component={Link}
            to={"/quiz/" + params.category}
          >
            New quiz
          </Button>
          <Button variant="outlined" color="error" component={Link} to="/">
            Home
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default Result;
