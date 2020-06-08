<template>
	<div>
		<div>
			<BakerNavbar></BakerNavbar>
		</div>
		<div>
			<div id="Third" class="bg-2">
	<div style="padding-left:0px; padding-top:56px; ">
	<div class="row" style="margin-top: 42px; margin-bottom: 14px; margin-right:100px; ">
		<select name="bakeform" id="orderdown" style="width: 350px; margin-left: 100px;" onchange="filter()">
			<option value="pricehigh">Активные</option>
			<option value="pricelow">История</option>
		</select>
		<span style="font-size:32px; margin-top:7px; margin-left:21px; color: red; margin-top:-1px;"></span>
		</div>
		</div>
		
		
		<div v-for="order in orders" class="customorder" style="padding:21px; height:260px; width: 1370px;">
			<div class="row">
				<div class="col-sm-4">
				<img :src="order.user.uploadImage" style="width: 210px; height: 210px; border-radius:21px; object-fit: cover; margin-left: -170px;">
				</div>
				<div class="col-sm-8" style="margin-left:-180px;">
					<div class="row">
					<!-- <h3 style="font-size:24px; color: #222222; font-weight:bold;">Медовый</h3> -->
					<h1 style="font-size:18px; color: #222222; margin-left:14px; margin-top:4px;">Клиент: {{ order.user.username }}</h1>
					<label style="font-size:24px; font-weight:bold; color: #E5B200; margin-left:21px; margin-top:-5px;">15:46</label>
					<label style="font-size:20px; color: #222222; margin-left:7px; ">20 мая</label>
					</div>
					<div style="color: #222222; overflow:hidden; text-overflow: ellipsis; margin-left:-16px; width:1000px; max-height:90px; ">
					{{ order.order_detail_text }}
					</div>
					<div class="row">
					<!-- <label style="font-size:32px; font-weight:bold; color: #222222; margin-top: 28px;">{{ order.order_total }} тг.</label> -->
					<div style="display: flex; justify-content: center; align-items: center;">
						<button @click="goTodetail(order.id);" type="button" class="btn btn-success" style="height:48px; background-color:#47C0E7; border-color: #47C0E7; width:190px; margin-top:20px; margin-left:21px; border-radius: 14px; font-size: 24px; font-weight: bold;">Подробнее</button>
						<h1 v-if="order.status == 0" style="color:black">Заказ на рассмотрении</h1>
						<h1 v-else-if="order.status == 1" style="color:black">Заказ Принят</h1>
						<h1 v-else style="color:black">Заказ Отклонен</h1>
					</div>
					</div>
				</div>
			</div>
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
     			orders: ''
     		}
     	},
     	beforeCreate() {
     		$.ajax({
     		  headers: {'Authorization': "JWT " + sessionStorage.getItem('access')},
              url: "http://127.0.0.1:8000/api/orders",
              type: "GET",
              success: (response) => {
                this.orders = response
                console.log(response)

                
              }
        	});
     	},
     	methods: {
     		goTodetail(prodId) {
            	this.$router.push({name:'orderdetail',params:{Pid:prodId}})
            	sessionStorage.setItem("bord_id", prodId)
        	},
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
	#orderdown{
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-color: #363636;
		border-color: #47C0E7;
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
	.customorder{
	background-color: #FFFFFF; 
	height:190px;
	margin-left: 70px;
	margin-right: 70px;
	margin-top: 28px;
	margin-bottom: 28px;
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