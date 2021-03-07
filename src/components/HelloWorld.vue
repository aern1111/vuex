<template>
  <div class="hello">
    <h1>เมนูแนะนำ</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6" v-for="food in arr" :key="food">
          <b-card
            :title="food.name"
            :img-src="food.picture"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2"
          >
            <b-card-text> ฿&nbsp;{{ food.price }}&nbsp;บาท </b-card-text>
            <b-button href="#" variant="primary" @click="choose(food)"
              >choose</b-button
            >
          </b-card>
        </div>
        <table class="table">
          <thead class="table-primary">
            <tr>
              <th scope="col">ภาพ</th>
              <th scope="col">ชื่อเมนู</th>
              <th scope="col">ราคา</th>
              <th scope="col">จำนวน</th>
              <th scope="col">รวม</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="info in basket" :key="info">
              <td>
                <img :src="info.picture" alt="" width="70px" height="60px" />
              </td>
              <td>{{ info.name }}</td>
              <td>{{ info.price }}</td>

              <td>
                <i class="fa fa-minus" @click="minusNumber(info)"></i>
                {{ info.number }}
                <i class="fa fa-plus" @click="plusNumber(info)"></i>
              </td>
              <td>{{ info.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>รวมทั้งหมด{{total()}}บาท</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String,
  // },

  data() {
    return {
      basket: [],
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      item6: 0,
    };
  },
  computed:{
    arr(){
      return this.$store.getters.listmenu;
    }
  },
  methods: {
    choose: function (food) {
      var i;
      if (food.id == 1) {
        this.item1 += 1;
        if (this.item1 <= 1) {
          this.basket.push({
            id: food.id,
            picture: food.picture,
            name: food.name,
            price: food.price,
            number: 1,
            total: food.price,
          });
        } else {
          for (i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id == food.id) {
              this.basket[i].number += 1;
            }
          }
          return -1;
        }
      } else if (food.id === 2) {
        this.item2 += 1;
        if (this.item2 <= 1) {
          this.basket.push({
            id: food.id,
            picture: food.picture,
            name: food.name,
            price: food.price,
            number: 1,
            total: food.price,
          });
        } else {
          for (i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id == food.id) {
              this.basket[i].number += 1;
            }
          }
        }
      } else if (food.id === 3) {
        this.item3 += 1;
        if (this.item3 <= 1) {
          this.basket.push({
            id: food.id,
            picture: food.picture,
            name: food.name,
            price: food.price,
            number: 1,
            total: food.price,
          });
        } else {
          for (i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id == food.id) {
              this.basket[i].number += 1;
            }
          }
        }
      } else if (food.id === 4) {
        this.item4 += 1;
        if (this.item4 <= 1) {
          this.basket.push({
            id: food.id,
            picture: food.picture,
            name: food.name,
            price: food.price,
            number: 1,
            total: food.price,
          });
        } else {
          for (i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id == food.id) {
              this.basket[i].number += 1;
            }
          }
        }
      } else if (food.id === 5) {
        this.item5 += 1;
        if (this.item5 <= 1) {
          this.basket.push({
            id: food.id,
            picture: food.picture,
            name: food.name,
            price: food.price,
            number: 1,
            total: food.price,
          });
        } else {
          for (i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id == food.id) {
              this.basket[i].number += 1;
            }
          }
        }
      } else if (food.id == 6) {
        this.item6 += 1;
        if (this.item6 <= 1) {
          this.basket.push({
            id: food.id,
            picture: food.picture,
            name: food.name,
            price: food.price,
            number: 1,
            total: food.price,
          });
        } else {
          for (i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id == food.id) {
              this.basket[i].number += 1;
            }
          }
        }
      }
    },
    minusNumber: function (info) {
      info.number -= 1;
      if (info.number <= 1) {
        info.number = 1;
      }
      info.total = info.number * info.price;
    },
    plusNumber: function (info) {
      info.number += 1;
      info.total = info.number * info.price;
    },
    total: function () {
      var sum = 0;
      this.basket.forEach(function (food) {
        sum += food.total;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
.col-md-4 {
  margin-top: 50px;
}

h1 {
  margin-top: 0px;
  padding-top: 20px;
}

.hello {
  color: rgb(19, 17, 18);
  background: rgb(230, 235, 240);
}

.fa-minus {
  cursor: pointer;
}

.fa-plus {
  cursor: pointer;
}
</style>



