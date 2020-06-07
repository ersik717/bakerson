<script>
</script>
<template>
  <div class="container">
  <div class="icing">
    <h2>Ваш заказ</h2>
    <ul class="order">
      
    </ul>
    <div class="total">1500 тг.</div>
  </div>
  <div class="dough">
    <form class="form">
    <h2>Оплата</h2> 
      <div class="inputs">
        <div class="row">
          <div class="column card-group">
            <label class="label" for="card">Карта</label>
            <input class="text-input card-input" id="card" placeholder="1234 5678 9012 3456"/>
          </div>
        </div>
        <div class="row">
          <div class="column name-group">
            <label class="label" for="name">Имя карты</label>
            <input class="text-input name-input" id="name"/>
          </div>
          <div class="column expiry-group">
            <label class="label" for="expiry">Срок</label>
            <input class="text-input expiry-input" id="expiry" placeholder="dd/yy"/>
          </div>
        </div>
        <div class="row">
          <div class="column cvc-group">
            <label class="label" for="cvc">CVC/Код</label>
            <input class="text-input cvc-input" id="cvc"/>
          </div>
          <div class="column cvc-help">3-4-значный код. Обычно на обороте, подписью.</div>
        </div>
      </div>
      <div class="buttons">
        <button class="order-button">Order</button>
      </div>
    </form>
  </div>
</div>
</template>
<style>
.btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  h2, .total {
  font-family: Arvo, sans-serif;
}

.container {
  font-family: PT Sans, sans-serif;
  font-size: 18px;
  width: 80%;
  min-width: 620px;
  max-width: 700px;
  height: 360px;
  margin: 50px auto;
  background: #ffe0b1;
  border-radius: 9px;
  overflow: hidden;
}

.icing,
.dough {
  float: left;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
}

.icing {
  width: 33%;
  position: relative;
  padding-right: 24px;
  background: -webkit-gradient(linear, left top, right top, from(#ff94b3), color-stop(80%, #ffb3c9));
  background: linear-gradient(to right, #ff94b3 0%, #ffb3c9 80%);
  color: white;
}
.icing:before {
  content: '';
  width: 36px;
  height: 36px;
  display: block;
  position: absolute;
  top: -18px;
  right: -7.2px;
  z-index: 1;
  background: #ffb3c9;
  border-radius: 50%;
  box-shadow: 21.8181818182px 28.8px 0 #ffe0b1, 0 57.6px 0 #ffb3c9, 21.8181818182px 86.4px 0 #ffe0b1, 0 115.2px 0 #ffb3c9, 21.8181818182px 144px 0 #ffe0b1, 0 172.8px 0 #ffb3c9, 21.8181818182px 201.6px 0 #ffe0b1, 0 230.4px 0 #ffb3c9, 21.8181818182px 259.2px 0 #ffe0b1, 0 288px 0 #ffb3c9, 21.8181818182px 316.8px 0 #ffe0b1, 0 345.6px 0 #ffb3c9;
}

.dough {
  width: 67%;
  padding-left: 36px;
  color: #90510E;
}

.order {
  -webkit-box-flex: 1;
          flex-grow: 1;
  padding: 20px 0;
  margin: 20px 0;
  border: 1px solid white;
  border-color: white transparent;
}
.order li {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
          justify-content: space-between;
}

h2 {
  font-size: 1.2em;
}

.total {
  font-size: 1.7em;
}

.form {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
  margin-top: 20px;
  -webkit-box-flex: 1;
          flex-grow: 1;
}

.inputs {
  -webkit-box-flex: 1;
          flex-grow: 1;
}

.buttons {
  width: 100%;
}

.row {
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: end;
          align-items: flex-end;
  margin-bottom: 10px;
}

.column {
  width: 100%;
}
.column:not(:last-child) {
  margin-right: 10px;
}

.label,
.text-input {
  float: left;
  display: block;
  clear: both;
}

.label {
  font-size: 0.8em;
  margin-bottom: 0.2em;
}

.text-input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 1em;
  font-family: inherit;
  background: white;
  border: 1px solid rgba(144, 81, 14, 0.4);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1) inset;
}

.cvc-group {
  flex-basis: 140px;
}

.name-group {
  -webkit-box-flex: 1;
          flex-grow: 1;
  flex-basis: 200px;
}

.expiry-group {
  flex-basis: 100px;
}

.cvc-help {
  padding: 4px 0;
  -webkit-box-flex: 0;
          flex-grow: 0;
  width: 200px;
  font-size: 0.8em;
  line-height: 1.3em;
  opacity: 0.6;
}

.order-button {
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  font-family: inherit;
  color: inherit;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(144, 81, 14, 0.3);
  box-shadow: 0 2px 2px rgba(144, 81, 14, 0.1);
  border-radius: 5px;
  -webkit-transition: background 0.1s, color 0.1s, border-color 0.1s;
  transition: background 0.1s, color 0.1s, border-color 0.1s;
}
.order-button:hover {
  background: #ff80a5;
  color: white;
  border-color: transparent;
}
</style>