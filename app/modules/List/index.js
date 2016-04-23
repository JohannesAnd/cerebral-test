export default (options = {}) => {
  return (module, controller) => {

    module.addState({
      posts: []
    });

    module.addSignals({
    });

  };
}
