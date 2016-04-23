export default function resetForm({state}) {
    state.set('newPost.newPostForm.title.value', '');
    state.set('newPost.newPostForm.text.value', '');
    state.set('newPost.newPostForm.author.value', '');
}