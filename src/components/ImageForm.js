import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class ImageForm extends React.Component {
  state = {
    resolutionChangeAllowed: false,
    selectedResolution: null,
    rotateAllowed: false,
    selectedRotation: null,
    addFilter: false
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

  onRotateAllowedChange = () => {
    this.setState({
      rotateAllowed: !this.state.rotateAllowed,
      selectedRotation: null
    });
  };

  onRotationChange = e => {
    this.setState({
      selectedRotation: e.target.options[e.target.selectedIndex].value
    });
  };

  onAddFilterChange = () => {
    this.setState({
      addFilter: !this.state.addFilter
    });
  };

  sendImage = e => {
    const message =
      "Image send with parameters:\n" +
      "selectedResolution = " +
      this.state.selectedResolution +
      "addFilter = " +
      this.state.addFilter +
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
                checked={this.state.rotateAllowed}
                onChange={this.onRotateAllowedChange}
              />
              <Form.Label onClick={this.onRotateAllowedChange}>
                Obrócenie zdjęcia
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
              {this.state.rotateAllowed && (
                <Form.Control
                  as="select"
                  disabled={!this.state.rotateAllowed}
                  onChange={this.onRotationChange}
                >
                  <option value="transpose=0">
                    Obróć o 90 stopni w lewo i odwróć w pionie
                  </option>
                  <option value="transpose=1">Obróć o 90 stopni w prawo</option>
                  <option value="transpose=2">Obróć o 90 stopni w lewo</option>
                  <option value="transpose=3">
                    Obróć o 90 stopni w prawo i odwróć w pionie
                  </option>
                </Form.Control>
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
                checked={this.state.addFilter}
                onChange={this.onAddFilterChange}
              />
              <Form.Label onClick={this.onAddFilterChange}>
                Dodaj filtr do zdjęcia
              </Form.Label>
            </Col>
          </Form.Group>
        </Form>
        <button className="button" onClick={this.sendImage}>
          Wyślij
        </button>
      </div>
    );
  }
}

export default ImageForm;
