export var MarkdownReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MARKDOWN':
      return action.Markdown;
    default:
      return state;
  };
};
