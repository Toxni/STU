
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import getHostName from 'utils/hostName';


class Detail extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    articleType: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      title: '',
      excEditor: '',
      image: '',
      datetime: '',
      viewNum: 0,
      dutyEditor: '',
    };
  }

  componentDidMount = () => {
    fetch(`${getHostName()}/api/${this.props.articleType}/${this.props.title}`)
      .then((res) => {
        res.json()
          .then((data) => {
            this.setState(data);
          });
      })
      .catch((error) => {
        console.log('request failed', error);
      });
  }

  render() {
    return (
      <div
        className={style.detail}
      >
        <div className={style.article}>
          <p>
            <span>时间: {this.state.datetime}</span>
            <span>编辑: {this.state.excEditor}</span>
            <span>审核: {this.state.dutyEditor}</span>
            <span className={style.right}>浏览次数: {this.state.viewNum}</span>
          </p>
          <h3>{this.state.title}</h3>
          <img
            style={(this.state.image ? {} : { display: 'none' })}
            src={(this.state.image ? `${this.state.hostname}/${this.state.image}` : '')}
            alt={(this.state.image ? this.state.title : '')}
          />
          <div className={style.body} dangerouslySetInnerHTML={{ __html: this.state.text }}></div>
        </div>
      </div>
    );
  }
}

export default Detail;
