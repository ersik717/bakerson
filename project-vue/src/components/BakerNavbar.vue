<template>
	<!-----------NAVBAR-------------->
<nav class="navbar navbar-expand-sm justify-content-center fixed-top">
  <a class="navbar-brand" href="#">
    <img src="@/assets/Elements/bakerlogo.png" width="210" alt="logo" style="padding-bottom: 8px;">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ul class="navbar-nav">
    <li class="nav-item dropdown" style="margin-left: 210px; margin-right: 70px; color:white;">
      <a class="nav-link" @click="goProfile">Профиль</a>
    </li>
    <li class="nav-item dropdown" style="margin-left: 70px; margin-right: 70px; color:white;">
      <a class="nav-link" @click="goOrder" >Заказы</a>
    </li>
    <li class="nav-item dropdown" style="margin-left: 70px; margin-right: 210px; color:white;">
      <a class="nav-link" @click="goCatalog" data-toggle="dropdown">Ассортимент</a>
    </li>
  </ul>
 <div class="collapse navbar-collapse" id="navbar-list-4" style="padding-left: 140px;">
    <ul class="navbar-nav" v-if="!auth">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="@/assets/Elements/user.png" width="40" height="40" class="rounded-circle">
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" @click="goLogin" style="color: #222222;">Логин</a>
          <a class="dropdown-item" @click="sighup" style="color: #222222;">Регистрация</a>
        </div>
      </li>   
    </ul>
    <ul class="navbar-nav" v-else>
        <li class="nav-item dropdown">
        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin-left:-70px;">
            <img v-for="user in users" v-if="user.username == usern" :src="user.uploadImage" width="40" height="40" class="rounded-circle">
            {{usern}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#" style="color: #222222;">Профиль</a>
          <!-- <a class="dropdown-item" @click="goBasket" style="color: #222222;">Корзина</a> -->
          <a class="dropdown-item" @click="logout" href="#" style="color: #222222;">Выход</a>
        </div>
      </li>   
    </ul>
  </div>
</nav>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "BakerNavbar",
    data() {
      return {
        users: "",
        usern: sessionStorage.getItem('login'),
      }
    },
    beforeCreate() {
        $.ajax({ 
            url: "http://127.0.0.1:8000/api/users/",
              type: "GET",
              success: (response) => {
                this.users = response
                // console.log(response)

                
              }
        });
    },
    // mounted() {
    //     $.ajaxSetup({
    //      headers: {'Authorization': "JWT " + sessionStorage.getItem('access')},
    //     });
    //     this.loadUser() 
    // },
    computed: {
      auth() {
        if(sessionStorage.getItem('access'))
        {
          return true
        }
      } 
    },
    
    methods: {
      // loadUser() {
      //   $.ajax({
      //     url: "http://127.0.0.1:8000/api/users/",
      //     type: "GET",
      //     success: (response) => {
      //       this.users = response.results
      //       console.log(response)

            
      //     }

      //   })
      // },
      goID(someID) {
             sessionStorage.setItem("us_id", someID)   
        },
      goLogin() {
         this.$router.push({name: "loginbaker"})
      },
      logout() {
         sessionStorage.removeItem('login')
         sessionStorage.removeItem('access')
         window.location = '/'
      },
      sighup() {
         this.$router.push({name: "registration"})
      },
      goOrder() {
         this.$router.push({name: "bakerorder"})
      },
      goProfile() {
         this.$router.push({name: "bakerprofile"})
      },
      goCatalog() {
         this.$router.push({name: "bakercatalog"})
        //window.location = '/#/catalog'
      },
      goBasket() {
         this.$router.push({name: "basket"})      }
    },

  }
</script>

<style>
  

	
  
  .slideanim {
	  visibility:hidden;
	  }
  .slide {
      animation-name: slide;
      -webkit-animation-name: slide;
      animation-duration: 1s;
      -webkit-animation-duration: 1s;
      visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }
 
body{
color: #222222;
background-color: #F0F0F0;
font-family: Century Gothic, Serif;
font-size: 21px;

}
.navbar {
	font-family: Century Gothic, sans-serif;
	font-weight: regular;
    margin-bottom: 0;
    background-color: #222222;
    border: 0;
    font-size: 18px !important;
    letter-spacing: 2px;
    opacity: 1;
	height:77px;
	padding-top: 10px;
	padding-left: 5px;
	padding-right: 20px;
}

.carousel-inner img {
    width: 500px;
	height: 300px;
    margin: auto;
}
.carousel-caption h3 {
    color: #fff !important;
}
.bg-2 {
      background: #F0F0F0;
      color: white;
  }      
.bg-1 {
      background: #222222;
      color: black;
  }
  footer {
    background-color: Black;
    color: White;
    padding: 32px;
}
      .glyphicon {
          color: red;
      }
a{
color: white;
 }
 
 #customprofile{
	background-color: #FFFFFF;
	margin-left: 70px;
	margin-right: 70px;
	margin-top: 100px;
	border-radius: 28px;
	box-shadow: 0px 14px 35px #000000;
	}
	#bundown{
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-color: #363636;
		border-color: #FBBA12;
		border-width: 2px;
		border-radius: 14px;
		width: 490px;
		height: 49px;
		color: white;
		font-size: 21px;
		padding-left: 21px;
		margin-bottom: 28px;
	}
	#custominput{
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-color: #EDEDED;
		border-color: #FABE7C;
		border-width: 2px;
		border-radius: 14px;
		width: 490px;
		height: 49px;
		color: #222222;
		font-size: 21px;
		padding-left: 21px;
		margin-bottom: 28px;
	}
	#customcomment{
	background-color: #FFFFFF; 
	height:190px;
	margin-left: 70px;
	margin-right: 70px;
	margin-top: 28px;
	border-radius: 28px;
	box-shadow: 0px 14px 35px #000000;
}
 a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #47C0E7;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
a:hover:before {
  visibility: visible;
  transform: scaleX(1);
}
a:hover{
color: #47C0E7 !important;
}

      
  .image {
   overflow:hidden;
   width: 452px;
   height:300px;
   }
  .image img {
   -moz-transition: all 1s ease-out;
   -o-transition: all 1s ease-out;
   -webkit-transition: all 1s ease-out;
   }

  .image img:hover{
   -webkit-transform: scale(1.1);
   -moz-transform: scale(1.1);
   -o-transform: scale(1.1);
   }
	</style>