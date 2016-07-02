export var MarkdownReducer = (state = 'Start typing in the form and *this* will be updated', action) => {
  switch (action.type) {
    case 'SET_MARKDOWN':
      return action.markdown;
    default:
      return state;
  };
};

export var updatePreiew = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_PREVIEW':
      return action.markdown;
    default:
      return state;
  };
};
