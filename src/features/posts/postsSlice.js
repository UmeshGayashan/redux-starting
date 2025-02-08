import { createSlice } from '@reduxjs/toolkit';

// Dummy Data (Can Be Fetched from API)
const initialState = {
    posts: [],
    selectedPost: null,
};

// Redux Slice
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state) => {
            state.posts = [
              {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum...',
              },
              {
                userId: 1,
                id: 2,
                title: 'qui est esse',
                body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor...',
              },
              {
                userId: 1,
                id: 3,
                title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
                body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad...',
              },
              {
                userId: 1,
                id: 4,
                title: 'eum et est occaecati',
                body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem...',
              },
              {
                userId: 1,
                id: 5,
                title: 'nesciunt quas odio',
                body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est...',
              },
            ];
        },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
});

// Export Actions
export const { fetchPosts, selectPost } = postsSlice.actions;

// Export Reducer
export default postsSlice.reducer;