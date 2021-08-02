import { Grid, Container } from "@material-ui/core";
import Posts from "../Posts/Posts";

const Main = (props) => {
  return (
    <Grid>
      <Container>
        <Posts />
      </Container>
    </Grid>
  );
};

export default Main;
