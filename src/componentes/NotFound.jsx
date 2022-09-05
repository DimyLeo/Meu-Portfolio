import React from "react";

class NotFound extends React.Component {
  render(){
    return(
      <div className="div-page404">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>Sorry, but the page you were trying to view does not exist.</p>
        <p>Try again with an existing page</p>
      </div>
    )
  }
}

export default NotFound;