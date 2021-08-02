import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

const Header = () => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            AutoFi
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
