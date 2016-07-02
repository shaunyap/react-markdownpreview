export var MarkdownReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MARKDOWN':
      return action.markdown;
    default:
      return state;
  };
};
