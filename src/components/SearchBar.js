import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // event callback so arrow function must.
  onInputChange = (event) => {
    // take value of input out of the event object and assign it to state  property.
    this.setState({ term: event.target.value });
  };

  // this is a callback that i am going to pass to some child element that's why arrow function.
  onFormSubmit = (event) => {
    // to prevent refresh at submission.
    event.preventDefault();
    // we try to call some callback function passed into searchbar from the app component.
    // TODO : make sure we call
    // callback from parent component.
    // so that we tell that user just submitted the form and they want to initiate a new search of the youtube api.
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
