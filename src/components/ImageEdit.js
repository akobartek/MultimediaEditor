import React from "react";
import ImageUpload from "./ImageUpload";
import ImageForm from "./ImageForm";

class ImageEdit extends React.Component {
  state = {
    files: []
  };

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  addFile = file => {
    // console.log(file);
    this.setState({
      files: file.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  };

  render() {
    return (
      <div className="PhotoEdit">
        <header className="Edit-header">
          <div className="main">
            <h3 className="Title">EDYTOWANIE ZDJĘCIA</h3>
            <div className="Upload">
              <ImageUpload addFile={this.addFile} files={this.state.files} />
            </div>

            {this.state.files.length > 0 && <ImageForm />}
          </div>
        </header>
      </div>
    );
  }
}

export default ImageEdit;
