<template>
<div>
	<div> <navbar></navbar></div>
	<div>
		<div id="Third" class="bg-2">
			<div id="customform">
				<div class="container-fluid text-left" style="padding-left:0px; padding-top:56px; padding-bottom:140px;">
					<h3 style="font-weight: bold; color:#222222; margin-bottom:42px; text-align: center;">Ваша корзина</h3>
					<!-- <h3 style="color:black;">{{ users }}</h3> -->
						<div v-for="user in users" v-if="user.username == usern">
							<div v-for="order in orders" v-if="user.username == order.user.username && order.order_confirm == false">
								<div v-for="us in users" v-if="order.baker == us.id">
									<div  v-for="product in products" v-if="order.id == product.order" style="color: #222222; background-color: #FFFFFF; height: 84px; margin-left: 56px; margin-right: 56px; padding-top: 14px; padding-bottom: 14px; border-radius: 28px; box-shadow: 0px 7px 35px #000000;">
										<div class="row">
											<span style="font-size:35px; margin-left: 42px;"> </span>
												<!-- <img :src="catalog.catalog_image" width = "56" height="56" style="border-radius:21px; margin-left:21px;">		 -->
												
											<span style="font-size:21px; margin-left: 21px; margin-top:14px; font-weight:bold;">{{ product.product_name }} -- Baker is {{ us.username }} -- Стоимость: {{ product.product_cost }} тг.</span>
											<button class="btn btn-danger" @click="deleteProduct(product.id)" height="34px" style="position: absolute; margin-left: 1120px; margin-top:14px;">Удалить</button>

										</div>
								
									</div>
								</div>
							</div>
						</div>
					<div class="row" style="margin-top: 42px; margin-left: 56px;">
						<div class="form-group" style="color: #222222;">
							<label for="addressinput" style="font-size:21px; margin-left: 28px;">Адрес:</label>
							<input type="text" class="form-control" id="addressinput" placeholder="Введите адрес доставки">
						</div>
						<div style="color: #222222; margin-top: 21px; margin-left: 420px;">
							<span style="font-size:35px; margin-left: 42px;">Итого:</span>
							<span style="font-size:49px; margin-left: 7px; margin-top: 14px;">{{total}} тг.</span>
						</div>
					</div>
					<div class="row" style="margin-top: 42px; margin-right: 56px; float:right;">
						<!-- <button type="button" class="btn btn-success" style=" height:84px; width:230px; border-radius: 14px; font-size: 40px; font-weight: bold;">Купить</button> -->
						
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
import $ from 'jquery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import modal from '@/components/modal'

export default {
		name: "Catalog",
		components: {
	        Navbar,
	        Footer,
	        modal,
     	},
     	data() {
     		return {
     			products: '',
     			catalogs: '',
     			orders: '',
     			users: '',
     			usern: sessionStorage.getItem('login'),
     			tot: 0,
     			isModalVisible: false,
     		}
     	},
     	created() {
			$.ajaxSetup({
				headers: {'Authorization': "JWT " + sessionStorage.getItem('access')},
			});
			this.loadOrder()
		},
		computed: {
 		  	total: function() {
 		  		var sum = 0
 		  		var a = this.users  		
 		  		var b = this.orders
 		  		var c = this.products
 		  		var d = this.users
 		  		var session_users = this.usern
 		  		
				Object.keys(a).forEach(function (key){
					if (a[key].username == session_users) {
						console.log(session_users)
						Object.keys(b).forEach(function (key){
							if (b[key].user.username == session_users) {
								console.log(b[key].id)
								Object.keys(c).forEach(function (keyy){
									if (b[key].id == c[keyy].order) {
										console.log(c[keyy].product_name)
										sum += c[keyy].product_cost
									}
								});
							}
						});
					}
					
				});
				return sum
 		  	}
 		},
     	beforeCreate() {
     		$.ajax({ 
	            url: "http://127.0.0.1:8000/api/orders",
	              type: "GET",
	              success: (response) => {
	                this.orders = response
	                
	              }
	        });
	        $.ajax({ 
	            url: "http://127.0.0.1:8000/api/products/",
	              type: "GET",
	              success: (response) => {
	                this.products = response

	                
	              }
	        });
	        $.ajax({ 
	            url: "http://127.0.0.1:8000/api/catalog",
	              type: "GET",
	              success: (response) => {
	                this.catalogs = response
	                
	              }
	        });
	        $.ajax({ 
	            url: "http://127.0.0.1:8000/api/users/",
	              type: "GET",
	              success: (response) => {
	                this.users = response
	                
	              }
	        });

    	},
    	methods: {
    		showModal() {
		        this.isModalVisible = true;
		      },
		      closeModal() {
		        this.isModalVisible = false;
		      },
    		loadOrder() {
    			$.ajax({ 
	            url: "http://127.0.0.1:8000/api/orders",
	              type: "GET",
	              success: (response) => {
	                this.orders = response
	                
	              }
	        });
    		},
    		deleteProduct(e) {
    			$.ajax({ 
	              url: "http://127.0.0.1:8000/api/products/" + e,
	              type: "DELETE",
	              success: (response) => {
	                // this.orders = response.results
	                this.$router.go(0)
	              }
	        });
	      		// this.$http.delete('api/products/884')
         //                .success(function(response) {
         //                	console.log('success')
         //                    //Redirect goes here
         //       //something like:  window.location = the url
         //                }) 
         //                .error(function(errors) {
         //                    //Handle error
         //                });
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
 
 #customform{
	background-color: #FFFFFF;
	height: 750px;
	margin-left: 70px;
	margin-right: 70px;
	margin-top: 100px;
	margin-bottom: 100px;
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
	#addressinput{
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
 a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #FEC27F;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
a:hover:before {
  visibility: visible;
  transform: scaleX(1);
}
a:hover{
color: #FEC27F !important;
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