function myAction({state}) {
    state.push('list.posts', {
        title: state.get('newPost.newPostForm.title.value'),
        text: state.get('newPost.newPostForm.text.value'),
        author: state.get('newPost.newPostForm.author.value')
    })
}

export default myAction;