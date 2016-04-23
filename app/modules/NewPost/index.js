import Form from 'cerebral-module-forms/Form';
import formSubmitted from './signals/formSubmitted';
export default (options = {}) => {
    return (module, controller) => {

        module.addState({
            newPostForm: Form({
                author: {
                    value: ''
                },
                title: {
                    value: ''
                },
                text: {
                    value: ''
                }
            })
        });

        module.addSignals({
            formSubmitted
        });

    };
}