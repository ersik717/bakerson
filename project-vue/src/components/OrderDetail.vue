<template>
	<div>
		<div>
			<BakerNavbar></BakerNavbar>
		</div>
		<div>
			<div id="Third" class="bg-2">
	<div id="customprofile" style="margin-bottom: 70px;">
	<div v-for="product in products" class="container-fluid text-left" style="padding-left:0px; padding-top:56px;  margin-bottom: 56px;">
		<div class="row">
				<div v-for="catalog in catalogs" v-if="catalog.id == product.product_catalog_id" class="col-sm-4">
				<img :src="catalog.catalog_image" style="width: 210px; height: 210px; border-radius:21px; object-fit: cover; margin-left: 40px;">
				</div>
				<div class="col-sm-8" style="margin-left:-180px;">
					<div class="row">
					<h3 style="font-size:24px; color: #222222; font-weight:bold;">{{ product.product_name }}</h3>
					<h1 style="font-size:18px; color: #222222; margin-left:14px; margin-top:4px;">Тип: {{ product.product_type }}</h1>
					<!-- <label style="font-size:24px; font-weight:bold; color: #259329; margin-left:21px; margin-top:-5px;">Заказан:</label> -->
					<!-- <label style="font-size:20px; color: #222222; margin-left:7px; ">11 раз</label> -->
					</div>
					<div style="color: #222222; overflow:hidden; text-overflow: ellipsis; margin-left:-16px; width:1000px; max-height:90px; ">
					{{ product.product_detailtext }}
					</div>
					<div class="row">
					<label style="font-size:32px; font-weight:bold; color: #222222; margin-top: 28px;">{{ product.product_cost }} тг.</label>
					</div>
				</div>
			</div>
 	</div>
 	<button @click="accept" type="button" class="btn btn-success" style="height:56px; width:250px; margin-top:-50px; border-radius: 14px; font-size: 24px; font-weight: bold;">Принять</button>
		<button @click="reject" type="button" class="btn btn-danger" style="height:56px; width:250px; margin-top:-50px; margin-left:40px; border-radius: 14px; font-size: 24px; font-weight: bold;">Отклонить</button>
</div> 
  
</div>
		</div>
		<div>
			<Footer></Footer>
		</div>
	</div>
</template>
<script>
	import BakerNavbar from '@/components/BakerNavbar'
	import Footer from '@/components/Footer'
	import axios from 'axios'
	export default {
		components: {
        	BakerNavbar,
        	Footer,
     	},
     	data() {
     		return {
     			products: '',
     			catalogs: '',
     		}
     	},
     	beforeCreate() {
     		$.ajax({
     		  headers: {'Authorization': "JWT " + sessionStorage.getItem('access')},
              url: "http://127.0.0.1:8000/api/orders/" + sessionStorage.getItem('bord_id') + "/products",
              type: "GET",
              success: (response) => {
                this.products = response
                console.log(response)           
              }
        	});
        	$.ajax({
     		  headers: {'Authorization': "JWT " + sessionStorage.getItem('access')},
              url: "http://127.0.0.1:8000/api/catalog",
              type: "GET",
              success: (response) => {
                this.catalogs = response
                console.log(response)           
              }
        	});
     	},
     	methods: {
     		accept() {
			        let data = new FormData();

					data.append('status', 1);
					axios.patch('http://127.0.0.1:8000/api/orders/' + sessionStorage.getItem('bord_id'), data, {
           				headers: {
           					'Authorization': "JWT " + sessionStorage.getItem('access'),
                		}
              		})
					.then(function (response) {
    					console.log(response);
    					alert('Заказ принят')
    					window.location = '/#/bakerorder'
  					});     			
     		},
     		reject() {
			        let data = new FormData();

					data.append('status', 2);
					axios.patch('http://127.0.0.1:8000/api/orders/' + sessionStorage.getItem('bord_id'), data, {
           				headers: {
           					'Authorization': "JWT " + sessionStorage.getItem('access'),
                		}
              		})
					.then(function (response) {
    					console.log(response);
    					alert('Заказ отклонен')
    					window.location = '/#/bakerorder'
  					});     			
     		}
     	}
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
	.customusercomment{
	background-color: #FFFFFF; 
	height:240px;
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