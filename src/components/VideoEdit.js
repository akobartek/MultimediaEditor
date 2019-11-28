import React from "react";
import VideoUpload from "./VideoUpload";
import VideoForm from "./VideoForm";

class VideoEdit extends React.Component {
  state = {
    files: []
  };

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  addFile = file => {
    this.setState({
      files: file.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      ),
      photoUrl: URL.createObjectURL(file[0])
    });
  };

  render() {
    return (
      <div className="VideoEdit">
        <header className="Edit-header">
          <div className="main">
            <h3 className="Title">EDYTOWANIE FILMU</h3>
            <div className="Upload">
              <VideoUpload addFile={this.addFile} files={this.state.files} />
            </div>

            {this.state.files.length > 0 && <VideoForm />}
          </div>
        </header>
      </div>
    );
  }
}

export default VideoEdit;
