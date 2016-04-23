import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

import styles from './styles.css';

@Cerebral({
    posts: ['list', 'posts']
})
class List extends React.Component {
    getListItems() {
        return this.props.posts.map((post, key) => {
            return (
                <div
                    className={styles.post}
                    key={key}
                >
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                    <h4>{`Written by ${post.author}`}</h4>
                </div>
            );
        });
    }
    render() {
        const elements = this.getListItems();
        return (
            <div>
                <h1>{"My posts"}</h1>
                {elements}
            </div>
        );
    }
}
List.displayName = "List";
List.propTypes = {
    items: React.PropTypes.array
};

export default List;
