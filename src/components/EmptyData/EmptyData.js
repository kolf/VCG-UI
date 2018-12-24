import React from "react";
import { withStyles } from "@material-ui/core/styles";

const defaultImageUrl = require("./no-result.png");

const EmptyData = ({ classes }) => (
  <div className={classes.root}>
    <img src={defaultImageUrl} className={classes.img} />
    <div className={classes.text}>
      <p className={classes.title}>图片 404……</p>
      <p className={classes.small}>可能这个图片已经飞走了，请修改搜索条件</p>
    </div>
  </div>
);

const s = {
  root: {
    textAlign: "center",
    padding: "80px 0",
    background: "#ffffff"
  },
  img: {
    display: "inline-block",
    width: "200px",
    marginRight: "20px",
    verticalAlign: "middle"
  },
  text: {
    display: "inline-block",
    textAlign: "left"
  },
  title: {
    marginBottom: "11px",
    fontSize: "24px"
  },
  small: {
    fontSize: "16px",
    color: "#999"
  }
};

export default withStyles(s)(EmptyData);
