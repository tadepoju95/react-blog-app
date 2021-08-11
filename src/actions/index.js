import postList from '../apis/postList';

export const signIn = userId => {
  return {
    type: 'SIGN_IN',
    payload: userId 
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

export const createPost = (title, author, post) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await postList.post('/posts', { title, author, post, userId });

	dispatch({ type: 'CREATE_POST', payload: response.data });
};

export const fetchPosts = () => async dispatch => {
	const response = await postList.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data});
}