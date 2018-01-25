import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

class Comment extends Component {

    render() {
        const comment = {
            username: '张三',
            content: '华为大法好'
        } //this.props;
        //console.log(comment)
        return (
            <div>
                <span>{comment.username}：</span>
                <span>{comment.content}</span>
            </div>
        )
    }
}

export default Comment