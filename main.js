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
        createItem: function(inputText){
            this.todos.push({text: this.inputText, done: false});
        }
    }
})