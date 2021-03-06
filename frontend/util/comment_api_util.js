export const fetchComments = (success, error) => {
  $.ajax({
    type: 'get',
    url: `api/comments`,
    success,
    error
  });
};

export const fetchComment = (id, success, error) =>{
  $.ajax({
    type: 'get',
    url: `api/comments/${id}`,
    success,
    error
  });
};

export const createComment = (comment, success, error) =>{
  $.ajax({
    type: 'post',
    url: 'api/comments/',
    data: {comment},
    success,
    error
  });
};

export const updateComment = (comment, success, error) =>{
  $.ajax({
    type: 'patch',
    url: `api/comments/${comment.id}`,
    data: {comment},
    success,
    error
  });
};

export const deleteComment = (id, success, error) =>{
  $.ajax({
    type: 'delete',
    url: `api/comments/${id}`,
    success,
    error
  });
};
