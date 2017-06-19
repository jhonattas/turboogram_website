<template>
  <div class="hello">
    <section class="hero is-fullheight first_hero transition hidden">
      <div class="hero-head">
        <div class="container">
          <div class="tabs is-right">
            <ul>
              <li><a href="#elemento">funcionamento</a></li>
              <li><a href="#elemento1">clientes</a></li>
              <li><a href="#">planos</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="hero-body transition hidden">
        <div class="container has-text-centered">
          <img src="../assets/logo.png">
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered top-menu transition hidden">
            <ul>
              <li><a href="https://soucriador.com/">powered by soucriador.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-medium" id="elemento">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>

    <section class="section is-large" style="background: pink;" id="elemento1">
      <div class="container">
        <h1 class="title">Section2</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    if ( $('.first_hero').hasClass('hidden') ) {
      $('.first_hero')
        .transition({
          animation  : 'fade',
          duration   : '1s',
          onComplete : function() {
            $('.top-menu')
              .transition({
                animation  : 'scale',
                duration   : '700ms',
                onComplete : function() {
                  $('.hero-body').transition('fade', '500ms');
                }
              });
          }
        });
    }
  },
  methods: {
    funcionamento: function() {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.first_hero a {
  color: #fff !important;
}

h4 {
  color:  #fff;
}


.first_hero {
  background: -webkit-radial-gradient(50px 220px, #ffda75 18%,#ff3a49 43%,#ff3a49 50%,#e518a1 70%,#6634e1 100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
