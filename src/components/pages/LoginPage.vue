<template>

  <div>
    <link href="https://bootstrap-4.ru/docs/4.0/examples/floating-labels/floating-labels.css" rel="stylesheet">
    <form class="form-signin">
      <div class="text-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="70" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
          <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
        </svg>
<!--        <img class="mb-4" src="/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
        <h1 class="h3 mb-3 font-weight-normal">Floating labels</h1>
        <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p>
      </div>

      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <label for="inputPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>

export default {
  name: "companys",
  components: {
  },
  props: {
  },
  emits: {
    loginEvent: {},
  },
  methods: {
    changeCompany(name) {
      this.company = name
      console.log("Получил эвент компании = " + name);
    },
  },
  created() {},
  data() {
    return {
      company: "",
      columns: [
        {
          label: "Название",
          field: "name"
        }
      ],
      rows: []
    };
  },
  mounted() {
    this.$emit("login-event")
    console.log("Сработал логин эвент")
  },
};
</script>

<style scoped>
.my {
  margin: 13px;
  width: 25em;
  height: 20em;
  float: left;
}
.main-table {
  text-transform: uppercase;
  margin: 13px;
  width: 10em;
  height: 20em;
  float: left;
}
</style>