<template>
  <div class="home">
    <ul class="nav nav-pills top-nav">
      <li class="nav-item nav-item-text"><router-link class="nav-link" to="/cv">CV</router-link></li>
      <li class="nav-item nav-item-img"><a class="nav-link weird-square" href="#"></a></li>
      <li class="nav-item nav-item-img"><a class="nav-link" href="#"><img src="../assets/me.jpg" class="head-me"></img></a></li>
    </ul>
    <div class="center-content">
      <h1 class="title">
        <div class="google-like-title">
          <span>S</span><span>é</span><span>b</span><span>a</span><span>s</span><span>t</span><span>i</span><span>e</span><span>n</span>
        </div>
        <div class="google-like-title">
          <span>D</span><span>O</span><span>S</span><span>S</span><span>O</span><span>T</span>
        </div>
      </h1>
      <input type="text" class="search-bar"></input>
      <div class="buttons">
        <router-link class="button left" to="/cv" tag="button">Seb's Search</router-link>
        <button class="button left" data-toggle="modal" data-target="#luckyModal" v-on:click="returnPhoto">I'm feeling lucky</button>
      </div>
      <div class="small">Full-Stack Developer / DevOps - 4 ans d'expérience</div>
    </div>
    <nav class="navbar navbar-light fixed-bottom bottom-bar">
      <a class="navbar-brand" href="https://www.linkedin.com/in/sebastien-dossot/" target="_blank"></i>LinkedIn</a>
    </nav>
    <div class="modal fade" id="luckyModal" tabindex="-1" role="dialog" aria-labelledby="luckyModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <img :src="this.photo" class="image-me"></img>
        </div>
      </div>
    </div>
</div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: function () {
      return {
        photo: ''
      }
    },
    methods: {
      returnPhoto: function (event) {
        const photoArray = ["https://i.imgur.com/PCn1pg8.png", "https://i.imgur.com/437rtM7.png", "https://i.imgur.com/7kNWnKK.png", "https://i.imgur.com/91TBfSo.jpg"];
        const randNum = Math.floor(Math.random() * 4);
        this.photo = photoArray[randNum];
      }
  }
  };
</script>

<style lang="scss">
  @import "./src/assets/style.scss";
</style>