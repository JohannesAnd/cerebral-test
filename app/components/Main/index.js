import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

import styles from './styles.css';

import List from './../List';
import NewPost from './../Form';

const pages = {
    'list': List,
    'newPost': NewPost
};

@Cerebral({
    title: ['main', 'title'],
    page: ['main', 'page']
})
class Main extends React.Component {
    getPage() {
        const Page = pages[this.props.page];
        return <Page/>;
    }
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.text}>
                    {this.props.title}
                </h1>
                <input
                    className={styles.buttons}
                    type="button"
                    value={"My Posts"}
                    onClick={this.props.signals.main.setPageList} />
                <input
                    className={styles.buttons}
                    type="button"
                    value={"New Post"}
                    onClick={this.props.signals.main.setPageNewPost} />
                {this.getPage()}
            </div>
        );
    }
}

Main.propTypes = {};
Main.displayName = "Main Component";

export default Main;
