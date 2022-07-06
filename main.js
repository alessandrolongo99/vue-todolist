const app = new Vue({
    el: '#root',
    data: {
        index: 0,
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
        crateItem: function(item){
            this.todos.push(item, false);
        }
    }
})