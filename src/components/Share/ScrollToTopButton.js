import React from "react";
import "./ScrollToTopButton.scss";

class ScrollToTopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    const scrollComponent = this;
    document.addEventListener("scroll", () => {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 500) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <img
              className="scroll-to-top"
              src="images/scrolltotop.png"
              alt="button scroll to top"
            />
          </div>
        )}
      </div>
    );
  }
}

export default ScrollToTopButton;
