<template>
  <div class="cv container-fluid" >
    <div class="row main-row">

      <div class="col-xl-1">
      </div>
      <div class="left-column col-2 col-sm-2 col-xl-2">
        <div class="top-left-column row">
          <nav class="nav flex-column">
            <img src="../assets/head-bald.png" class="side-img"> </img>            
            <router-link class="nav-link hover-light" to="/">Home</router-link>
            <router-link class="nav-link hover-light" to="/cv">CV</router-link>
            <a class="nav-link hover-light active" data-toggle="tab" href="#experiences" role="tab" aria-controls="experiences" aria-selected="true">Expériences</a>
            <a class="nav-link hover-light" data-toggle="tab" href="#formations" role="tab" aria-controls="formations" aria-selected="false">Diplômes</a>
            <a class="nav-link hover-light" data-toggle="tab" href="#projets" role="tab" aria-controls="projets" aria-selected="false">Projets</a>
            <a class="nav-link-contact" href="#">contact</a>
          </nav>
        </div>
        <div class="bottom-left-column row">
          <img src="../assets/indiana.jpg"  style="width:40px;height:40px;border-radius: 25px;display: inline-block"> </img><span style="padding-left: 4px; font-weight:700;font-size:0.8rem; line-height:40px; display: inline-block"> Sébastien DOSSOT</span>
        </div>
      </div>
      <div class="middle-column col-10 col-sm-6 col-xl-5">
        <div class="top-middle-column row">
          <div class="col-2">
            <router-link class="nav-link hover-light arrow-back" to="/">&nbsp;←</router-link>
          </div>
          <div class="col-10">
            <b style="font-weight: 800;">Sébastien DOSSOT</b>  <img src="../assets/valide.png"  class="valide"> </img><br/>
            <div class="nb-exp">5 Expériences</div>
          </div>
        </div>
        <div class="feed-middle-column row">
          <ul style="padding-bottom:0;margin-bottom:0">
            <li style="padding: 0;">
              <div class="head-description">
              </div>
              <div class="follow-line-description">
                <img src="../assets/indiana.jpg"  class="face-description"> </img>
                
                <div class="follow blue-outline" data-toggle="modal" data-target="#exampleModal">
                  Follow
                </div>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="three-dots blue-outline">
                  <div class="dot blue-outline">
                  </div>
                  <div class="dot blue-outline">
                  </div>
                  <div class="dot blue-outline">
                   <span style="clear: both;"></span>
                  </div>
                </div>
              </div>
              <div class="body-description">
                <div style="font-size: 1.15rem;font-weight: 800">Sébastien DOSSOT  <img src="../assets/valide.png"  class="valide"></img></div>
                <div class="description-text"> 
                  Ingénieur informatique touche-à-tout, passionné et animé d'une grande soif d'apprendre, fort de quatre
                  ans d'expérience en entreprise dont trois à l'étranger (Irlande, Nouvelle Zélande). <br/> <br/> 
                  J'ai évolué dans des postes multitâches alliant développement <span class="hashtag">#Fullstack</span>, <span class="hashtag">#DevOps</span>, Cloud et TDD. <br/><br/> 
                  Les technologies principales sur lesquelles je travaille actuellement sont <span class="hashtag">@reactjs</span>, <span class="hashtag">@vuejs</span>, <span class="hashtag">@djangoproject</span>, <span class="hashtag">@nodejs</span>, <span class="hashtag">@Docker</span>, <span class="hashtag">@rails</span>. 
              </div>
              <br/>
              <div class="grey-text"> 
                    <img src="../assets/map-point.png"  class="valide"> Bordeaux, France
                    <img src="../assets/link.png"  class="valide"> <span class="hashtag">sebastien.dossot@gmail.com</span>
                    <img src="../assets/calendar.png"  class="valide"> Joined life in 1990
              </div>
              </div>
              <div class="links-description">
              </div>
              <div class="followed-by">
                <img src="../assets/heads.png" class="followed-by-heads"></img>
                <span class="followed-by-text">Followed by Bored Elon Musk, Elen DeGeneres, and 2 others you follow</span>
              </div>
              <ul class="nav nav-fill nav-scroll" style="padding:0">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#experiences" role="tab" aria-controls="experiences" aria-selected="true">Expériences</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#formations" role="tab" aria-controls="formations" aria-selected="false">Diplômes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#projets" role="tab" aria-controls="projets" aria-selected="false">Projets</a>
                </li>
              </ul>
            </li>
            </ul>
            <ul class="tab-pane fade show active" id="experiences" role="tabpanel" aria-labelledby="experiences-tab">
              <li v-for="item in experiences">
                <img :src="item.image" class="head-me"></img>
                <div class="position"><img src="../assets/retweet.png" style="width:10px;height:10px;"></img> &nbsp;&nbsp; {{ item.position }}</div>
                <div class="company-name">{{ item.company_name }}</div> <div class="city small">{{ item.city }} •</div> <div class="period">{{ item.period }} • {{ item.length }}</div>
                <div class="description">
                  <p v-for="description in item.description">{{description}}</p>
                </div>
                <div class="button-line">
                  <img v-for="logo in item.logos" v-bind:src="'' + logo +''"></img>
                </div>
              </li>
            </ul>
            <ul id="formations" class="tab-pane fade" role="tabpanel" aria-labelledby="formations-tab">
              <li v-for="item in formations">
                <img :src="item.image" class="head-me"></img>
                <div class="position"><img src="../assets/retweet.png" style="width:10px;height:10px;"></img> &nbsp;&nbsp; {{ item.company_name }}</div>
                <div class="company-name">{{ item.position }} <span class="city small">{{ item.city }} •</span> <span class="period small">{{ item.period }} </span></div>
                <div class="description">
                  <p>{{item.description}}</p>
                </div>
                <div class="button-line">
                  <img src="../assets/retweet.png"></img>
                  <img src="../assets/heart.png"></img>
                  <img src="../assets/upload.png"></img>
                  <img src="../assets/stats.png"></img>
                </div>
              </li>
            </ul>
            <ul id="projets" class="tab-pane fade" role="tabpanel" aria-labelledby="projets-tab">
              <li v-for="item in projets">
                <img :src="item.image" class="head-me"></img>
                <div class="position"><img src="../assets/retweet.png" style="width:10px;height:10px;"></img> &nbsp;&nbsp; {{ item.position }}</div>
                <div class="company-name">{{ item.company_name }} <span class="city small">{{ item.city }} •</span> <span class="period small">{{ item.period }} </span></div>
                <div class="description">
                  <p>{{item.description}}</p>
                  <a class="hashtag" :href="item.link" style="margin-bottom:12px;" target="_blank">Lien vers {{item.link}}</a>
                </div>
                <div class="button-line">
                  <img v-for="logo in item.logos" v-bind:src="'' + logo +''"></img>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <div class="right-column col-sm-4 col-xl-3">
        <div class="search-right-column row">   
          <input type="text" class="search-bar" placeholder= "Seb's Search"></input>
        </div>
        <div class="top-right-column row">
          <div class="header">Sébastien might like</div>
          <ul class="body">
            <li>
              Plongée (Polynésie, NZ...) <img src="../assets/valide.png"  class="valide"></img>
            </li>
            <li>
              Meetups informatiques <img src="../assets/valide.png"  class="valide"></img>
            </li>
            <li>
              Approfondissement espagnol <img src="../assets/valide.png"  class="valide"></img>
            </li>
            <li>
              Cuisinier passioné <img src="../assets/valide.png"  class="valide"></img>
            </li>
          </ul>
          <div class="footer hashtag">Show more</div>
        </div>
        <div class="bottom-right-column row">
         <div class="header">Sébastien trending</div>
          <ul class="body trending">
            <li>
              1 · JavaScript FrontEnd <br />
              <span class="trending-descrption">React, Vuejs, Angular, d3js</span>
            </li>
            <li>
              2 · BackEnd technologies <br />
              <span class="trending-descrption">Nodejs, Ruby on rails, Django</span>
            </li>
            <li>
              3 · DevOps <br />
              <span class="trending-descrption">Docker, Docker-compose, Continuous Integration</span>
            </li>
            <li>
              5 · DataBase <br />
              <span class="trending-descrption">MongoDB, PostgreSQL</span>
            </li>
            <li>
              6 · Code Improvement <br />
              <span class="trending-descrption">Refactor, tests </span>
            </li>
          </ul>
          <div class="footer hashtag">Show more</div>
        </div>
      </div>
      <div class="col-xl-1">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CV',
    data () {
      return {
        experiences: [{image: "https://i.imgur.com/YPvUkKG.png", period:"2018 Jan-Août", position:"Dévelopeur Full-Stack / DevOps", company_name:"Fretly", city: "Lyon", length: "8 mois", description: ["Full-Stack Development ( Angular, nodejs, mongodb )", "TDD, DevOps, Cloud, Analytics ( Docker, Docker compose, nginx, cron, backup données )", "Amélioration UX, Containerisation, Refactorisation, Mise en place dévelopement continu..."], logos: ["https://i.imgur.com/5N7n9XC.png", "https://i.imgur.com/1GypYee.png", "https://i.imgur.com/rPNZaSn.png", "https://i.imgur.com/MP7OHXv.png", "https://i.imgur.com/vyVstvn.png"]},
              {image: "https://i.imgur.com/bRPI1KN.png", period:"2018 Fév-Déc", position:"Dévelopeur Full-Stack / DevOps", company_name:"Hnry", city: "Wellington", length: "1 an", description: ["Full-Stack Development (Rails, React)", "TDD, DevOps, Cloud, Analytics (AWS, Docker, Terraform, CircleCI, Mailgun, GA, Intercom...)", "Startup: Relation clients, travail agile en équipe, recrutement, sessions de hacking..."], logos: ["https://i.imgur.com/oGMkeOL.png", "https://i.imgur.com/CJUUjbv.png", "https://i.imgur.com/1GypYee.png", "https://i.imgur.com/6pDp1jf.png", "https://i.imgur.com/02129ND.png"]},
              {image: "https://i.imgur.com/bLYoSBC.png", period:"2017 Mai-Déc", position:"Dévelopeur Full-Stack", company_name:"Eagle Point Partners", city: "Dublin", length: "8 mois", description: ["Full-Stack Development (Rails, JavaScript, AJAX, JQuery, D3.js, PosgreSQL, CSS...)", "Réactivité, rigueur et organisation pour répondre efficacement aux requêtes sur 5 différents projets"], logos: ["https://i.imgur.com/CJUUjbv.png", "https://i.imgur.com/Pq2sicr.png", "https://i.imgur.com/6pDp1jf.png", "https://i.imgur.com/TCHhkQj.png", "https://i.imgur.com/2XDZZQH.png"]},
              {image: "https://i.imgur.com/y3THWoZ.png", period:"2016 Mai-2017 Mai", position:"Ingénieur informatique", company_name:"Arch", city: "Dublin", length: "1 an", description: ["Conception d’une application pour personnes atteintes de démences : Analyse des besoins avec les clients (chercheurs), évaluation de différentes technologies, architecture logicielle (UML), UX Design(Adobe), Full-Stack et Mobile development (Grails, JQuery/AJAX, D3.js, API, Android, MariaDB, Spring, Scrum, TDD), tests auprès des utilisateurs"], logos: ["https://i.imgur.com/nOi03hy.png[", "https://i.imgur.com/Pq2sicr.png", "https://i.imgur.com/TCHhkQj.png", "https://i.imgur.com/2XDZZQH.png", "https://i.imgur.com/QF4DjVC.png"]},
              {image: "https://i.imgur.com/u2fOMjw.png", period:"2015 Avr-Oct", position:"Stage de fin d'études", company_name:"Thales Avionics", city: "Le Haillan", length: "6 mois", description: ["Analyse et création d’un prototype pour la prochaine génération de cockpits Airbus( C++, Java, DLLs, plugins eclipse, Jira agile)"], logos: ["https://i.imgur.com/X81k1dc.png", "https://i.imgur.com/wWQDWWT.png", "https://i.imgur.com/0d6k2Ut.png", "https://i.imgur.com/JqkT7xn.png", "https://i.imgur.com/QF4DjVC.png"]},
              ],
        formations:[
          {image: "https://i.imgur.com/Jx9g36V.png", period:"2013-2015", position:"Master en Informatique spécialité Génie logiciel parcours Conduite de projet", company_name:"Université de Bordeaux", city: "Bordeaux", description:"Acquisition de connaissances dans le cycle de vie (Cahier des charges, Développement, Tests, Maintenance), la conception du logiciel (Architectures logicielles, Pratique de langages de programmation, Conceptions formelles...) et la conduite de projets (Scrum, cycle en V)"},
          {image: "https://i.imgur.com/3NQ9gSu.png", period:"2010-2013", position:"Licence en Informatique", company_name:"Université de Reims Champagne Ardennes", description: "Acquisition de solides connaissances fondamentales et pratiques dans différents domaines de l’informatique(Algorithmique, Mathématiques, Logique, Système, Web, BDD, Compilation, Programmation, Réseau...)", city: "Reims"},
          {image: "https://i.imgur.com/3NQ9gSu.png", period:"2008-2010", position:"PCEM1", company_name:"Faculté de médecine de Reims", description: "", city: "Reims"}   
        ],
         projets: [
          {period:"Work in progress disponible sur github", position:"React / Django / Docker / nginx", company_name:"Remember", description: "(Work in progress) Site d'apprentissage. Le principe est de créer ses propres 'jeux de cartes' avec une association recto / verso à se rappeler. On peut ensuite 'jouer' le jeu, qui se réorganise en fonction des bonnes et mauvaises réponses afin d'aider à la mémorisation. ", link: "http://remember.sebastiendossot.fr/", github: "https://github.com/sebastiendossot/deck-creator", logos: ["https://i.imgur.com/oGMkeOL.png", "https://i.imgur.com/fLlHi3i.png", "https://i.imgur.com/1GypYee.png", "https://i.imgur.com/6pDp1jf.png", "https://i.imgur.com/02129ND.png"]},
          {period:"Work in progress disponible sur github", position:"Vuejs / Django / Docker", company_name:"Kanban", description: "(Work in progress) Site Kanban avec drag and drop, le FrontEnd en Vuejs et le BackEnd en Django se trouvent dans des containers différents et pour l'instant une erreur survient dans ce processus.", link: "http://kanban.sebastiendossot.fr/", github: "https://github.com/sebastiendossot/kanban-vuejs-docker-django", logos: [ "https://i.imgur.com/GcA9yg1.png", "https://i.imgur.com/fLlHi3i.png", "https://i.imgur.com/1GypYee.png", "https://i.imgur.com/6pDp1jf.png", "https://i.imgur.com/02129ND.png"]},
          {period:"Ce site", position:"Vuejs", company_name:"Portfolio", description: "Site portfolio avec une page home imitant google et une page principale imitant twitter", link: "http://sebastiendossot.fr/", github: "", logos: ["https://i.imgur.com/GcA9yg1.png", "https://i.imgur.com/Sfr1XbY.png", "https://i.imgur.com/vyVstvn.png", "https://i.imgur.com/JqkT7xn.png", "https://i.imgur.com/QF4DjVC.png"]},
          {period:"Disponible sur github", position:"vanilla js / canvas / pipes", company_name:"Pong-guns", description: "Le vieux jeu pong, jouable à plusieurs fait en JavaScript mais avec des guns pour détruire l'adversaire. (Pas en marche en ce moment, code et screenshots disponibles sur demande)", link: "https://i.imgur.com/irkmTfi.png", github: "https://github.com/sebastiendossot/PongGuns", logos: ["https://i.imgur.com/2t9HxpU.png", "https://i.imgur.com/JqkT7xn.png", "https://i.imgur.com/QF4DjVC.png", "https://i.imgur.com/JqkT7xn.png", "https://i.imgur.com/QF4DjVC.png"]},
        ]  
      };
    }
    };
</script>

<style lang="scss">
  @import "./src/assets/style_cv.scss";
</style>