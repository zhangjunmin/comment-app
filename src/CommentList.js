import React, {
    Component
} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    render() {
        var comments = [{
            username: '张三',
            content: '华为大法好'
        }, {
            username: '李四',
            content: '不用华为就是卖国'
        }]
        return (
            <div>
                <Comment />
            </div>
        )
    }
}

export default CommentList