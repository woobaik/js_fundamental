const http = new easyHttp();

const posts = http.get('https://jsonplaceholder.typicode.com/todos/1', function(err,posts) {
    console.log(posts);
})

