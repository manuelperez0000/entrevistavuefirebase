<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
    <div class="container">
      <a class="navbar-brand" href="/">
        <h2>PruebaVue</h2>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link active" to="/admin">Admin</router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
    <main role="main">
      <section class="banner-menu mb-4">
        <div class="container pt-5 pb-3 text-center">
          <h1 class="text-white mt-5">Products<i v-if="spin == true" class="text-white fas fa-spin fa-spinner"></i></h1>
        </div>
      </section>

      <div v-for="prod in productos" class="row product">
        <div class="col-sm-2 text-center">
          <img class="img-fluid fit" :src="prod.foto" alt="">
        </div>
        <div class="col-sm-7">
          <h4 class="marron1">{{ prod.nombre }}</h4>
          <p class="lead">{{ prod.des}}</p>
        </div>
        <div class="col-sm-3 text-center">
          <h3 class="">$ {{ prod.precio }} </h3>
        </div>
      </div>
      
    </main>

  </div>
</template>
<script>
export default {
  data(){
    return{
      productos:[], 
    }
  },
  name: 'Menu',
  created(){
    this.getprod()
  },
  methods:{
    getprod(){
      this.productos=[]
      firebase.firestore().collection("productos").get().then((qs)=>{
        qs.forEach(doc =>{
          this.productos.push({
            nombre:doc.data().nombre,
            foto:doc.data().foto,
            des:doc.data().des,
            precio:doc.data().precio,
          })
        })
      })
    }
  }
}
</script>