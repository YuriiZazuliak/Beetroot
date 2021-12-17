<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{title}}</div>
    <p v-text="asdfsd">oiuoiuuoiu</p>
    <p v-text="testNumber" v-once></p>
    <div>{{ testNumber * 5}}</div>
    <p>{{funcText}}</p>
    <p>{{testNumber % 2 ? "yes baby": "no no no!!!"}}</p>
    <a v-bind:href="link">trulala</a>
    <button v-bind:disabled="!(testNumber % 2)">asdaasd</button>
    <button v-on:click="numbChange()">{{testNumber}}</button>
    <div v-html="someText()"></div>
  </div>
</template>
<script>


export default ({
  name: "functional",
  data: () => ({
    asdfsd: "123335345",
    title: "title lorem3",
    testNumber: "5",
    link: "htpps://google.com",
    user: {
      name: "Bob",
      age: "35",
      }
    }),
    computed: {
      funcText: function () {
        return this.title.split("").reverse().join("");
      }
      },
    methods: {
      numbChange: function() {
        return this.testNumber++;
        },
      someText: function() {
        return `<p><b>User Name</b>:${this.user.name}<p>
                <p><b>User age</b>:${this.user.age}<p>`
      }
      }
    })
</script>
