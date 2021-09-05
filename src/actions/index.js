import postList from '../apis/postList';


export const signIn = userName => {
  return {
    type: 'SIGN_IN',
    payload: userName
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};



export const createPost = (title, description, post) => async (dispatch, getState) => {
	const { userName } = getState().auth;
	const response = await postList.post('/posts', { title, description, post, userName });

	dispatch({ type: 'CREATE_POST', payload: response.data });
};

export const fetchPosts = () => async dispatch => {
	const response = await postList.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data});
}

export const fetchPost = id => async dispatch => {
  const response = await postList.get(`/posts/${id}`);

  dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const createComment = (time, comment, url) => async (dispatch, getState) => {
  const { userName } = getState().auth;
  const response = await postList.post('/comments', { time, comment, url, userName });

  dispatch({ type: 'CREATE_COMMENT', payload: response.data });
};

export const fetchComments = () => async dispatch => {
  const response = await postList.get('/comments');

  dispatch({ type: 'FETCH_COMMENTS', payload: response.data});
}