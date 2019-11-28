import React from "react";
import Form from "react-bootstrap/Form";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Col from "react-bootstrap/Col";

class VideoForm extends React.Component {
  state = {
    resolutionChangeAllowed: false,
    selectedResolution: null,
    lengthChangeAllowed: false,
    selectedLength: { min: null, max: null },
    videoLength: 1,
    saveAsGif: false
  };

  onResolutionAllowedChange = () => {
    this.setState({
      resolutionChangeAllowed: !this.state.resolutionChangeAllowed,
      selectedResolution: null
    });
  };

  onResolutionChange = e => {
    this.setState({
      selectedResolution: e.target.options[e.target.selectedIndex].value
    });
  };

  onSaveAsGifChange = () => {
    this.setState({
      saveAsGif: !this.state.saveAsGif
    });
  };

  onLengthChangeAllowed = () => {
    this.setState({
      lengthChangeAllowed: !this.state.lengthChangeAllowed,
      videoLength: Math.ceil(document.getElementById("importedVideo").duration),
      selectedLength: {
        min: 0,
        max: Math.ceil(document.getElementById("importedVideo").duration)
      }
    });
  };

  sendVideo = e => {
    const message =
      "Video send with parameters:\n" +
      "selectedResolution = " +
      this.state.selectedResolution +
      "\n" +
      "selectedLength = (" +
      this.state.selectedLength.min +
      ", " +
      this.state.selectedLength.max +
      ")\n" +
      "saveAsGif = " +
      this.state.saveAsGif +
      "\n";
    alert(message);
  };

  render() {
    return (
      <div className="Form">
        <Form>
          <Form.Group as={Form.Row}>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                checked={this.state.resolutionChangeAllowed}
                onChange={this.onResolutionAllowedChange}
              />
              <Form.Label onClick={this.onResolutionAllowedChange}>
                Zmiana rozdzielczości
              </Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                checked={this.state.lengthChangeAllowed}
                onChange={this.onLengthChangeAllowed}
              />
              <Form.Label onClick={this.onLengthChangeAllowed}>
                Zmiana długości filmu
              </Form.Label>
            </Col>
          </Form.Group>

          <Form.Group as={Form.Row}>
            <Col sm={1} />
            <Col sm={4}>
              {this.state.resolutionChangeAllowed && (
                <Form.Control
                  as="select"
                  disabled={!this.state.resolutionChangeAllowed}
                  onChange={this.onResolutionChange}
                >
                  <option value="Resolution1">Resolution 1</option>
                  <option value="Resolution2">Resolution 2</option>
                  <option value="Resolution3">Resolution 3</option>
                  <option value="Resolution4">Resolution 4</option>
                  <option value="Resolution5">Resolution 5</option>
                </Form.Control>
              )}
            </Col>
            <Col sm={2} />
            <Col sm={4}>
              {this.state.lengthChangeAllowed && (
                <InputRange
                  maxValue={this.state.videoLength}
                  minValue={0}
                  formatLabel={value => `${value} s`}
                  value={this.state.selectedLength}
                  onChange={value => this.setState({ selectedLength: value })}
                />
              )}
            </Col>
            <Col sm={1} />
          </Form.Group>

          <Form.Group as={Form.Row} />
          <Form.Group as={Form.Row} />
          <Form.Group as={Form.Row}>
            <Col sm={12}>
              <Form.Check
                type="checkbox"
                checked={this.state.saveAsGif}
                onChange={this.onSaveAsGifChange}
              />
              <Form.Label onClick={this.onSaveAsGifChange}>
                Zapisz jako plik .GIF
              </Form.Label>
            </Col>
          </Form.Group>
        </Form>
        <button className="button" onClick={this.sendVideo}>
          Wyślij
        </button>
      </div>
    );
  }
}

export default VideoForm;
