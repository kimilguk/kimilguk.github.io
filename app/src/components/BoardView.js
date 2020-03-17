import React, {Component} from 'react';
class BoardView extends Component {
  render () {
    console.log ('render()안에서 this는 콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <div>
        {/* <!-- BoardView --> */}
        <ul className="bbsview_list">
          <li className="bbs_title">{this.props.title}</li>
          <li className="bbs_content">
            <div className="editer_content">
              {this.props.desc}
            </div>
          </li>
        </ul>
        {/* <!-- //BoardView --> */}
      </div>
    );
  }
}
export default BoardView;
