const app = new Vue({
    el: '#root',
    data: {
        index: 0,
        inputText: '',
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ]
    },
    methods: {
        removeItem: function (index) {
            this.todos.splice(index, 1);
        },
        createItem: function (inputText) {
            if (inputText == '') {
                console.warn('elemento vuoto');
            } else {
                this.todos.push({ text: inputText, done: false });
                this.inputText = '';
            }
        },
        changeDone: function (todo) {
            todo.done = !todo.done;
        }
    }
})