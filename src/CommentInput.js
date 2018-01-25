import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

// 评论交互区
class CommentInput extends Component {
    // 构造函数
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    changeUser(evt) {
        this.setState({
            username: evt.target.value
        })
    }
    changeContent(evt) {
        this.setState({
            content: evt.target.value
        })
    }
    onSubmit() {
        if (this.props.onSubmit) {
            let {
                username,
                content
            } = this.state;
            this.props.onSubmit({
                username,
                content
            })
        }
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={this.changeUser.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                      <span className='comment-field-name'>评论内容：</span>
                      <div className='comment-field-input'>
                          <textarea
                            value={this.state.content}
                            onChange={this.changeContent.bind(this)}
                          />
                      </div>
                </div>
                <div className='comment-field-button'>
                      <button onClick={this.onSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput