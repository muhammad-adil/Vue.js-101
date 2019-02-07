var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        message2: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true,
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build Something Awesome'
            }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

app.todos.push({
    text: 'New item pushed'
});