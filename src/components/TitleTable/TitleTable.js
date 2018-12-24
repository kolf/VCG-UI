import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Spin } from "antd";
import EmptyData from "../../components/EmptyData";

class TitleTable extends React.Component {
  static propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.array,
    loading: PropTypes.bool
  };
  static defaultProps = {
    dataSource: [],
    columns: [],
    loading: false
  };

  renderHeader = () => {
    const { classes, columns } = this.props;
    return (
      <ul className={classes.header}>
        {columns.map(column => (
          <li style={this.getColumnStyle(column.width)}>{column.title}</li>
        ))}
      </ul>
    );
  };

  renderBody = () => {
    const { classes, dataSource, titleKey, columns } = this.props;
    return dataSource.map(item => (
      <div className={classes.item}>
        {titleKey && <p className={classes.itemTitle}>{item[titleKey]}</p>}
        <ul className={classes.itemRow}>
          {columns.map(column => (
            <li style={this.getColumnStyle(column.width)}>
              {this.renderCol(column, item)}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  renderCol = (column, data) => {
    const { classes } = this.props;
    if (column.render) {
      return column.render(data);
    } else if (column.dataIndex === "imageUrl") {
      return (
        <div className={classes.img}>
          <img src={data.imageUrl} />
        </div>
      );
    } else {
      return data[column.dataIndex];
    }
  };

  getColumnStyle = width => {
    return width
      ? {
          width
        }
      : {
          flex: 1
        };
  };

  render() {
    const { classes, dataSource, loading } = this.props;

    if (loading) {
      return <div className={classes.root}>{this.renderHeader()}</div>;
    } else if (dataSource.length === 0) {
      return (
        <div className={classes.root}>
          {this.renderHeader()}
          <EmptyData />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

const s = {
  root: {},
  item: {
    border: "1px solid #ccc",
    borderTop: "none"
  },
  header: {
    display: "flex",
    listStyle: "none",
    padding: 0,
    marginBottom: 0,
    backgroundColor: "#404040",
    color: "#ffffff",
    "&>li": {
      padding: "10px 6px",
      borderRight: "1px solid #ccc"
    }
  },
  itemTitle: {
    backgroundColor: "#ccc",
    height: "36px",
    lineHeight: "36px",
    overflow: "hidden",
    padding: "0 8px",
    marginBottom: 0,
    fontWeight: 700
  },
  itemRow: {
    display: "flex",
    listStyle: "none",
    padding: 0,
    marginBottom: 0,
    "&>li": {
      padding: 6,
      borderRight: "1px solid #ccc"
    }
  },
  img: {
    height: 200,
    width: 200,
    display: "table",
    textAlign: "center"
  }
};

export default withStyles(s)(TitleTable);
