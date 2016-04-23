import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';

import styles from './styles.css';

@Cerebral({
    form: ['newPost', 'newPostForm']
})
class Form extends React.Component {
    submitForm(e) {
        console.log(e);
        e.preventDefault();
        this.props.signals.newPost.formSubmitted();
    }
    render() {
        const isValid = isValidForm(this.props.form);
        return (
            <div>
                <h1>{"New Post"}</h1>
                <form>
                    <p
                        className={styles.tag}
                    >
                        {"Title"}
                    </p>
                    <input
                        className={styles.input}
                        type={"text"}
                        value={this.props.form.title.value}
                        onChange={(e) => {
                            this.props.signals.forms.fieldChanged({
                                value: e.target.value,
                                field: ['newPost', 'newPostForm','title']
                            });
                        }}
                    />
                    <p
                        className={styles.tag}
                    >
                        {"Text"}
                    </p>
                    <textarea
                        className={styles.inputArea}
                        type={"text"}
                        value={this.props.form.text.value}
                        onChange={(e) => {
                            this.props.signals.forms.fieldChanged({
                                value: e.target.value,
                                field: ['newPost', 'newPostForm','text']
                            });
                        }}
                    />
                    <p
                        className={styles.tag}
                    >
                        {"Author"}
                    </p>
                    <input
                        className={styles.input}
                        type={"text"}
                        value={this.props.form.author.value}
                        onChange={(e) => {
                            this.props.signals.forms.fieldChanged({
                                value: e.target.value,
                                field: ['newPost', 'newPostForm','author']
                            });
                        }}
                    />
                    <button
                        className={styles.button}
                        disabled={this.isValid}
                        onClick={(e) => {this.submitForm(e)}}
                    >
                        {"Submit"}
                    </button>
                </form>
            </div>
        );
    }
}
Form.displayName = "List";
Form.propTypes = {
    items: React.PropTypes.array
};

export default Form;
