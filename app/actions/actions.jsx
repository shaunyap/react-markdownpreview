export var setMarkdown = (markdown) => {
  return {
    type: 'SET_MARKDOWN',
    markdown
  };
};

export var updatePreview = (markdown) => {
  return {
    type: 'UPDATE_PREVIEW',
    markdown
  };
};
