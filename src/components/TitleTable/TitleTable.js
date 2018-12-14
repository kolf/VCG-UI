import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "antd";

class TitleTable extends React.Component {
  static defaultProps = {
    placeholder: "---"
  };

  render() {
    const { placeholder } = this.props;
    return (
      <div>
        <Button>{placeholder}</Button>
      </div>
    );
  }
}

const s = {
  root: {}
};

export default withStyles(s)(TitleTable);
