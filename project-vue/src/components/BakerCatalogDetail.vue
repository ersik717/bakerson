<template>
	<div>
		<div>
			<BakerNavbar></BakerNavbar>
		</div>
		<div>
			<form @submit.prevent="addCatalog">
 					<div id="Third" class="bg-2">
	<div v-for="catalog in catalogs" v-if="catalog.id == bcatalog_id" id="customprofile" style="margin-bottom: 70px;">

	<div class="container-fluid text-left" style="padding-left:0px; padding-top:56px; padding-bottom:140px; margin-bottom: 56px;">
	<div class="row">
  <div class="col-sm-4" style="padding-left: 56px;">
  <img :src="catalog.catalog_image" style="height:400px; width: 400px; border-radius: 14px; position: absolute;">
  <input type="file" @change="onFileSelected()" class="inputfile" name="file" id="file" style="height:56px; width:250px; margin-top:420px;">
  </div>
  <div class="col-sm-8" style="color:#222222; padding-left: 90px; padding-right: 42px;">
	<div class="form-group" style="color: #222222;">
		<label for="addressinput" style="font-size:21px; margin-left: 28px;">Название:</label>
		<input v-model="name" type="text" class="form-control" id="custominput" placeholder="Введите название">
	</div>
	<div class="form-group" style="color: #222222;">
		<label for="addressinput" style="font-size:21px; margin-left: 28px;">Тип продукта:</label>
		<input v-model="type" type="text" class="form-control" id="custominput" placeholder="Введите тип продукта">
	</div>
	<div class="form-group" style="color: #222222;">
		<label for="addressinput" style="font-size:21px; margin-left: 28px;">Цена:</label>
		<input v-model="price" type="text" class="form-control" id="custominput" placeholder="Введите цену продукта">
	</div>
	
	<div class="form-group" style="color: #222222;">
		<label for="addressinput" style="font-size:21px; margin-left: 28px;">Описание:</label>
		<textarea v-model="description" type="text" class="form-control" id="custominput" placeholder="Введите описание продукта"></textarea>
	</div>
	
	<div class="form-group" style="color: #222222;">
		<label for="addressinput" style="font-size:21px; margin-left: 28px;">Энергитеческая ценность:</label>
		<input v-model="calory" type="text" class="form-control" id="custominput" placeholder="Введите килоколории продукта">
	</div>
	
	<div class="row" style="float: right;">
		<button type="submit" class="btn btn-success" style="height:56px; border-color: #1D6D86; border-width:2px; background-color: #47C0E7; width:250px; margin-top:140px; border-radius: 14px; font-size: 24px; font-weight: bold;">Сохранить</button>
	</div>
  </div>	
 </div>
 </div>
</div> 
  
</div>


			</form>
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
     			name: null,
        		type: null,
        		price: null,
        		description: null,
        		calory: null,
        		catalogs: '',
        		bcatalog_id: sessionStorage.getItem('bcat_id'),
     		}
     	},
     	beforeCreate() {
     		$.ajax({ 
            url: "http://127.0.0.1:8000/api/catalog",
              type: "GET",
              success: (response) => {
                this.catalogs = response
                console.log(response)

                
              }
        	});
     	},
     	methods: {
     		onFileSelected() {
		        this.selectedFile = event.target.files[0]
		        console.log(this.selectedFile)
      		},
      		addCatalog() {
			        let data = new FormData();

					data.append('catalog_name', this.name);
					data.append('catalog_description', this.description);
					data.append('catalog_image', this.selectedFile);
					data.append('catalog_date', '1999-01-01');
					data.append('catalog_expiredate', '1999-01-01');
					data.append('catalog_type', this.type);
					data.append('catalog_price', this.price);
					data.append('catalog_rating', 0.0);
					data.append('catalog_calory', this.calory);

					axios.patch('http://127.0.0.1:8000/api/catalog/' + this.bcatalog_id, data, {
           				headers: {
           					'Authorization': "JWT " + sessionStorage.getItem('access'),
                			'Content-Type': 'multipart/form-data'
                		}
              		})
					.then(function (response) {
    					console.log(response);
    					alert('Продукт успешно изменен')
    					window.location = '/#/bakercatalog'
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
		border-color: #47C0E7;
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