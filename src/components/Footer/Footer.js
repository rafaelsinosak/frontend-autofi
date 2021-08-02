import AppBar from "@material-ui/core/AppBar";
import { Container, Toolbar, Typography } from "@material-ui/core";
import moment from "moment";
import "./Footer.css";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © {moment().format("YYYY")} AutoFi
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
