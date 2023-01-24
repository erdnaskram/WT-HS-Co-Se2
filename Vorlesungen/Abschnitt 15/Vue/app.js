Vue.createApp({
  data() {
    return {
      purchaseOrder: [],
    };
  },
  methods: {
    getData() {
      let request = new XMLHttpRequest();
      request.open("GET", "./Purchase.json", false);
      request.send(null);
      this.purchaseOrder = JSON.parse(request.responseText);
    },
  },
}).mount("#app");
