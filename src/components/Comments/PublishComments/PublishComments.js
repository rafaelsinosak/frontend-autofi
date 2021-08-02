import { Grid, Button, TextField, Container } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import "./PublishComments.css";

const PublishComments = (props) => {
  const { comment, onChange, onSubmit } = props;
  return (
    <Container>
      <form noValidate onSubmit={onSubmit}>
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Grid item xs={11}>
            <TextField
              id="outlined-basic"
              label="Comment"
              variant="outlined"
              className="inputField"
              value={comment}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              disabled={!comment}
            >
              <SendIcon/>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

PublishComments.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
};

export default PublishComments;
