
<template>
  <div>
<div>
    <navbar></navbar>
  </div>
<div>

  <div id="Third" class="bg-2">
    <div id="customform" style="margin-bottom: 70px;">
      <div class="container-fluid text-left" style="padding-left:0px; padding-top:56px; padding-bottom:140px; margin-bottom: 56px;">
        <div v-for="catalog in catalogs" v-if="catalog.id == c_id" :key="catalog.id" class="row">
          <div class="col-sm-4" style="padding-left: 56px;">
            <img :src="catalog.catalog_image" style="height:400px; width: 400px; border-radius: 14px; position: absolute;">
          </div>
          <div class="col-sm-8" style="color:#222222; padding-left: 150px; padding-right: 42px;"><h3 style="font-weight: bold; margin-bottom:42px;">{{catalog.catalog_name}}</h3>
            <div style="color:#222222; margin-right:30px;">
              {{ catalog.catalog_description }} <br> Baker is: {{ catalog.baker.username }}
            </div>
          </div>  
       </div>
     </div>
     <div v-for="catalog in catalogs" v-if="catalog.id == c_id" :key="catalog.id" class="row" style="margin-top: 42px; float: right; margin-right: 90px;">
      <div>
      </div>
        <div style="color: #222222;">
          <span style="font-size:35px; ">Цена:</span>
          <span style="font-size:49px; margin-left: 7px; margin-top: 14px; padding-bottom: 80px;">{{ catalog.catalog_price }} тг.</span>
        </div>

      </div>
      <div class="row" style="float: right; margin-top: 58px; margin-right: 180px;">
        <div v-for="(order, asd) in orders">

          <div v-if="usern !== order.user.username">
            <button v-if="asd == 0 && orders.length >= 1" @click="goOrder()" class="btn btn-success" style="height:48px; width:190px; border-radius: 14px; font-size: 15px; font-weight: bold;">Создать заказ</button>
          </div>
          <div v-else>
            <button @click="goProduct(order.id)" type="button" class="btn btn-success" style="height:48px; width:190px; border-radius: 14px; font-size: 15px; font-weight: bold;">Добавить в корзину</button>
          </div>
            
        </div>
       
      </div>
  </div>
  
</div>   



<br>
  
<h3 style="float: left; margin-left: 100px;">Комментарии</h3>
<div v-for="review in reviews" v-if="review.catalog == c_id" id="customcomment" style="height: 130px;">
<div v-for="user in users" v-if="review.user == user.id" style="padding:21px; width: 1370px; margin-bottom: 50px; margin-top: 45px;">
      <div class="row">
        <div class="col-sm-2">
        <img :src="user.uploadImage" style="width: 70px; height: 70px; border-radius:21px; object-fit: cover;">
        </div>
        <div class="col-sm-10">
          <div class="row">
          <h3 style="font-size:24px; color: #222222; font-weight:bold;">{{ user.username }}</h3>
          <img src="@/assets/Elements/star.png" style="margin-left:21px; width: 28px; height: 28px;">
          <label style="font-size:28px; color: #222222; margin-left:7px; margin-top:-5px;">{{ review.rating }}</label>
          </div>
          <div style="color: #222222; overflow:hidden; text-overflow: ellipsis; margin-left:-16px; width:1000px; max-height:90px; text-align: left;">
          {{ review.comment }}
          </div>
        </div>
      </div>
    </div>
</div>



  <br>
  <!-- add review  -->
    <div class="card" style="margin-left: 70px; margin-right: 70px;">
      <div class="card-body">
        <h3 class="text-center">Добавить Комментарий</h3>
        <form @submit.prevent="setReview">
          <label for="comment" >Комментарий</label>
          <textarea v-model="comment" name="comment" id="comment" rows="5" cols="30" class="form-control"></textarea>

          <label for="rating">Rate</label>
          <input v-model="rating" type="range" id="rangeInput"
              name="rating" min="0" max="10" value="0" step="0.5"
              oninput="amount.value=rangeInput.value">
          <output name="amount" id="amount" for="rangeInput">0</output>

          
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>

  <br>

  <div class="main" style = "display:flex;">
    <div v-for="catalog in catalogs" class="" style = "margin:0px 10px; 0px 10px; position: relative; -webkit-box-direction: normal; flex-direction: column;
    -width: 0;word-wrap: break-word;background-color: #fff;background-clip: border-box; border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;">
      <div v-for="item in catalogs" v-if="(item.id == c_id && item.id !== catalog.id) && (catalog.catalog_stuff == item.catalog_stuff || catalog.catalog_topping == item.catalog_topping)" style="padding: 1.25rem;">
      <div style = "display:flex; flrx-wrap:wrap; flex-direction:column; align-items: center;">
          <div>
            <div >
          <img :src="catalog.catalog_image" style = "height:135px; width:215px;">
          </div>

            <h5>Baker: {{ catalog.catalog_name }}</h5>
            <h5 v-for="stuff in stuffs" v-if="catalog.catalog_stuff == stuff.id">Начинка: {{ stuff.stuff_name }}</h5>
            <h5 v-for="topping in toppings" v-if="catalog.catalog_topping == topping.id">Посыпка: {{ topping.topping_name }}</h5>

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
import $ from 'jquery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
var moment = require('moment')
export default {
    components: {
        Navbar,
        Footer,
      },
    data() {
        return {
            isEditing: false,
            catalogs: '',
            reviews: [''],
            users: '',
            c_id: sessionStorage.getItem('cat_id'),
            comment: '',
            rating: '',
            catalog: sessionStorage.getItem('cat_id'),
            user_id: sessionStorage.getItem('u_id'), 
            stuffs: '',
            toppings: '',  
            pageOfItems: [],
            orders: '', 
            cd: 0, 
            usern: sessionStorage.getItem('login'),
            cat_name: sessionStorage.getItem('cat_PN'),
            cat_date: sessionStorage.getItem('cat_MD'), 
            cat_exDate: sessionStorage.getItem('cat_ED'), 
            cat_type: sessionStorage.getItem('cat_PT'), 
            cat_desc: sessionStorage.getItem('cat_DT'), 
            cat_calory: sessionStorage.getItem('cat_PC'), 
            cat_price: sessionStorage.getItem('cat_PCost'), 
            cat_form: sessionStorage.getItem('cat_PF'), 
            cat_stuff: sessionStorage.getItem('cat_PS'), 
            cat_top: sessionStorage.getItem('cat_PT'), 
            cat_baker_name: sessionStorage.getItem('cat_bname'),
        };
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
        $.ajax({ 
              url: "http://127.0.0.1:8000/api/review",
              type: "GET",
              success: (response) => {
                this.reviews = response
                console.log(response)

                
              }
        });
        $.ajax({ 
            url: "http://127.0.0.1:8000/api/product/stuff/",
              type: "GET",
              success: (response) => {
                this.stuffs = response
                console.log(response)
                
              }
        });
        $.ajax({ 
            url: "http://127.0.0.1:8000/api/product/topping/",
              type: "GET",
              success: (response) => {
                this.toppings = response
                console.log(response)
                
              }
        });
        $.ajax({ 
            url: "http://127.0.0.1:8000/api/users/",
              type: "GET",
              success: (response) => {
                this.users = response

              }
        });
        $.ajax({ 
            url: "http://127.0.0.1:8000/api/orders",
              type: "GET",
              success: (response) => {
                this.orders = response

              }
        });

    },
    methods: {
      deleteComment(e) {
          $.ajax({ 
                url: "http://127.0.0.1:8000/api/review/" + e,
                type: "DELETE",
                success: (response) => {
                  // this.orders = response.results
                  console.log("success")
                  this.$router.go(0)
                }
          });
      },
      save(e) {
          this.user.comment = this.$refs['comment'].value;
          this.isEditing = !this.isEditing;
          console.log(e)

        },
      onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
      setReview() {
        $.ajax({
        url: "http://127.0.0.1:8000/api/review/create",
        type: "POST",
        data: {
            comment: this.comment,
            rating: this.rating,
            catalog: this.catalog,
            user: this.user_id
        },
        success: (response) => {
          console.log('success')
          this.$router.go(0)
        },
        error: (response) => {
          console.log('Comments is not working')
        }
      })
      },
      goProduct(someOrderID) {
          $.ajax({
          url: "http://127.0.0.1:8000/api/products/create",
          type: "POST",
          data: {
              product_name: this.cat_name,
              manufacture_date: this.cat_date,
              expire_date: 2,
              product_type: "Торт",
              customized: false,
              product_detailtext: this.cat_desc,
              product_calory: this.cat_calory,
              product_cost: this.cat_price,
              productform: this.cat_form,
              productstuff: this.cat_stuff,
              producttopping: this.cat_top,
              order: someOrderID,
              product_catalog_id: this.catalog,
          },
          success: (response) => {
            console.log('success')
            alert("Продукт добавлен в корзину")
          },
          error: (response) => {
            console.log(response)
          }
        })
        
      },
      getDate () {
        const toTwoDigits = num => num < 10 ? '0' + num : num;
        let today = new Date();
        let year = today.getFullYear();
        let month = toTwoDigits(today.getMonth() + 1);
        let day = toTwoDigits(today.getDate());
        return `${year}-${month}-${day}`;
      },
      goOrder() {
        $.ajax({
        headers: {'Authorization': "JWT " + sessionStorage.getItem('access')},
        url: "http://127.0.0.1:8000/api/orders/create",
        type: "POST",
        data: {
            user: {
              email: "ersik1717@gmail.com",
              username: 'qwerty',
              first_name: "",
              last_name: "",
              uploadImage: "http://127.0.0.1:8000/media/project-vue/src/assets/uploads/operator_m_K5fwP1G.png"
            },
            order_total: 0,
            order_address: 'almaty',
            order_date: this.cat_date,
            order_confirm: false,
            order_detail_text: "qwerty",
            baker: 3,
            status: 0,
        },
        success: (response) => {
          console.log('success')
          this.$router.go(0)
          alert("Ваш заказ создан, теперь добавьте в корзину")
        },
        error: (response) => {
          console.log('Comments is not working')
        }
      })
        
      },
      onChange(e) {
        this.cd = e.target.value;
      }
      
    }
};

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