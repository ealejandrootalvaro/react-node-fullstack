const posts = [
    {
        username: 'Kyle',
        title: 'Post 2'
    }, 
    {
        username: 'test',
        title: 'Post 1'
    }
]

export function getPosts( token ) {
    console.log(token);
    return posts.filter(post => post.username == token.name);   
}