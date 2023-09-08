import PropTypes from "prop-types";

// function Header(props) {
//     return (
//       <>
//       <h1>{props.text}</h1>
//       <h2>{props.subtext}</h2>
//       </>
//     );
//   }
  
  function Header({text, subtext}) {
    return (
      <>
      <div>this is my header!!!</div>
      <h1>{text}</h1>
      <h2>{subtext}</h2>
   
      </>
    );
  }

  Header.defaultProps = {
    text: "Default Header",
    subtext: "",
  }
  Header.propTypes = {
    text: PropTypes.string,
    subtext: PropTypes.string,
  };

  export default Header