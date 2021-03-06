
import style from './style.css';
import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Tabpane extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    topicList: PropTypes.array,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const lists = this.props.topicList.map((item, index) => {
      const itsLink = `/${this.props.type}/${item.title}`;
      return (
        <div className={style.text} key={index}>
          <Link to={itsLink}>
            <p className={style.text}>{item.title}</p>
          </Link>
        </div>
      );
    });
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.box)}
      >
        {lists}
      </div>
    );
  }
}

export default Tabpane;
