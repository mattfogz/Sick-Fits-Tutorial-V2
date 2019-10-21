import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

class CreateItem extends Component {
  state = {
    title: "d",
    description: "",
    image: "",
    largeImage: "",
    price: 0
  };

  render() {
    return (
      <Form>
        <filedset>
          <label htmlFor="title>">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={this.state.title}
            />
          </label>
        </filedset>
      </Form>
    );
  }
}
export default CreateItem;
