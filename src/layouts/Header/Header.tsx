import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="banner">
        Free Courses 🌟 Sale Ends Soon, Get It Now <Icon name="right" />
      </div>
      <header>
        <div className="nav-links">
          <div className="links">
            <Icon name="logo" />
            <span>Home</span>
            <span>Courses</span>
            <span>About Us</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>
          <div className="login-buttons">
            <Button label="Sign Up" />
            <Button label="Login" variant="primary" />
          </div>
        </div>
      </header>
    </>
  );
}
