import React from "react";
import propTypes from 'prop-types';

const Header = (props) => {
   const { branding } = props;

   return (
      <div>
         <h1>{branding}</h1>
      </div>
   );
};

Header.defaultProps = {
   branding: 'My App'
}

Header.propTypes = {
   branding: propTypes.string.isRequired
}

export default Header;