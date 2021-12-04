Vue.component('my-list',{
    props: ['todo'],
    template: `
         <tr>
               <td>{{todo.id}}</td>
                <td>{{todo.name}}</td>
                 <td>{{todo.price}}</td>
                <td> <img width="100" :src="todo.image"></td>
          </tr>
    `
})

new Vue({
    el: ".container",
    data: {
        products: [
            {
                id: 1,
                name: "samsung",
                price: 200,
                image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                id: 2,
                name: "samsung",
                price: 200,
                image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                id: 3,
                name: "samsung",
                price: 200,
                image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
        ]
    }
})