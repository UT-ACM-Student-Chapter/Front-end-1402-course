import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import banner from "../../assets/image/home.jpg";
import ImageContainer from "../../components/ImageContainer";

export function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container gap={2} justifyContent={"center"}>
        <Grid container item md={5} sm={12} direction={"column"} gap={2}>
          <Grid item>
            <Typography variant="h4" color="white">
              Quiz App
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="white">
              Register first
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p" color="white">
              Take a quiz later!
            </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/register"
              color="warning"
              variant="contained"
              sx={{ mt: 2 }}
            >
              register
            </Button>
          </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
          <ImageContainer image={banner}></ImageContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
