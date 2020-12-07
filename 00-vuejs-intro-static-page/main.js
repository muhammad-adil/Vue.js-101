// start your vue instance here
var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    textMsg: "",
    participant: "Adil",
    date: "08 april 2019",
    isShowedUp: true,
    posts: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident",
        description:
          "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        url: "https://picsum.photos/600/400/?image=296",
        tags: ["travel", "hobby", "outdoor"]
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        description:
          "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        url: "https://picsum.photos/600/400/?image=585",
        tags: ["travel", "new", "outdoor"]
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem",
        description:
          "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        url: "https://picsum.photos/600/400/?image=186",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        description:
          "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        url: "https://picsum.photos/600/400/?image=758",
        tags: ["travel", "nature", "outdoor"]
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        description:
          "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
        url: "https://picsum.photos/600/400/?image=559",
        tags: ["travel", "nature", "outdoor"]
      },
    ]
  },
  methods: {
    buttonClick() {
      console.log("button clicked");
    }
  }, 
  components: {
    "post-item": {
      template: `
      <div class="px-6 py-4 bg-gray-200">
        <img v-bind:src="url" :alt="title" class="w-full"/>  
        <h1 class="font-bold text-xl mb-2">{{ title }}</h1>
        <p class="text-gray-700 text-base">{{ description }}</p>    
      </div>`,
      data() { return {}; },  
      props: {
        title: String,
        description: String,
        url: {
          required: true,
          type: String
        }
      }
    }
  },
});

// Vue.component("post-item", {
//   // name: "post-item",
//   template: `<div>
//               <h1>{{ title }}</h1>
//               <p>{{ description }}</p>
//               <img v-bind:src="url" :alt="title"/>
//               </div>
//           `,
// });
