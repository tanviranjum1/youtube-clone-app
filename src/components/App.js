import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  // new callback. callback so error.
  // argument is video of the object fetched from youtube api.
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log(" From the app!", video);
  };

  // make default search when the app component is first rendered on screen.
  componentDidMount() {
    // we are calling the term submit with a term.
    this.onTermSubmit("buildings");
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* I have{" "}  {this.state.videos.length} videos{" "} */}
        {/* {passing down single video object.} */}

        <div className="ui grid">
          <div className="ui row">
            {/*  // to render videoDetail and videoitem to the same line */}
            <div className="eleven wide column">
              {/* use eleven out of the sixteen column */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
        {/* pass a reference to callback down to video list as a prop. the prop and value don't have to be same. prop can be anything you want to name. */}
      </div>
    );
  }
}

export default App;
