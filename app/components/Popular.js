import React from "react";
import PropTypes from 'prop-types';

//Stateless functional component

const SelectLanguage = props => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (

    <ul className="languages">
      {languages.map(language => {
        return (
          <li
            style={
              language === props.selectedLanguage
                ? { color: "#FF6347" }
                : null
            }
            key={language}
            onClick={props.updateLanguage.bind(null, language)}
          >
            {language}
          </li>
        );
      })}
    </ul>
  )
}
// instead of normal class
// class SelectLanguage extends React.Component{
//   render(){
//     const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

//     return(

//       <ul className="languages">
//       {languages.map(language => {
//         return (
//           <li
//           style={
//             language === this.props.selectedLanguage
//             ? { color: "#FF6347" }
//             : null
//           }
//           key={language}
//           onClick={this.props.updateLanguage.bind(null, language)}
//           >
//             {language}
//           </li>
//         );
//       },this)}
//     </ul>
//       )
//   }
// }
SelectLanguage.propTypes ={
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState(() => {
      return {
        selectedLanguage: language
      };
    });
  }
  render() {

    return (
      <div>
        <SelectLanguage 
          selectedLanguage = {this.state.selectedLanguage} 
          updateLanguage = {this.updateLanguage} 
          />
      </div>
    )
  }
}

export default Popular;
