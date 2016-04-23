import redirectList from './signals/redirectList';
import setPageList from './signals/setPageList';
import setPageNewPost from './signals/setPageNewPost';
export default (options = {}) => {
    return (module, controller) => {

        module.addState({
            title: 'Hello, my dear friend!',
            page: 'list'
        });

        module.addSignals({
            redirectList,
            setPageList,
            setPageNewPost
        });

    };
}
