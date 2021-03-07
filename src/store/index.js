import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [{
      id: 1,
      name: "ต้มยำกุ้ง",
      price: 50,
      picture: "https://food.mthai.com/app/uploads/2016/10/Tomyum.jpg",
      state: false,
    },
    {
      id: 2,
      name: "สปาเก็ตตี้",
      price: 45,
      picture: "https://miro.medium.com/max/1875/1*9pHa9xwIj4gqinIgtHQFQg.jpeg",
      state: false,
    },
    {
      id: 3,
      name: "ปีกไก่ทอด",
      price: 30,
      picture: "https://dtc.ac.th/wp-content/uploads/2019/03/3.jpg",
      state: false,
    },
    {
      id: 4,
      name: "คอหมูย่าง",
      price: 55,
      picture: "https://ungsriwong.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/09/28112250/KonMueng_10.jpg",
      state: false,
    },
    {
      id: 5,
      name: "แกงฮังเล",
      price: 35,
      picture: "https://img.wongnai.com/p/1968x0/2019/04/10/8b882dbab7774635b2768fb68c07ae85.jpg",
      state: false,
    },
    {
      id: 6,
      name: "สลัดอกไก่ย่าง",
      price: 20,
      picture: "https://dtc.ac.th/wp-content/uploads/2019/03/5.jpg",
      state: false,
    },
    ],
  },
  mutations: {},
  actions: {

  },
  getters: {
    listmenu: state => {
      return state.menu
    }
  },
  modules: {}
});