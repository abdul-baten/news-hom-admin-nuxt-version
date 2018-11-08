<template>
  <div class="container">
    <section class="section">
      <div class="columns is-clearfix is-multinile is-centered">
        <div class="column is-6">
          <div class="is-horizontal-center">
            <div class="has-text-centered is-centered" style="margin-bottom: 30px; text-align: center !important">
              <a href="/">
                <figure>
                <img src="@/assets/images/logo/logo.png">
              </figure>
              </a>
            </div>
          </div>
          <div class="box">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/Login";
export default {
  components: { LoginForm },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // vm.$store.dispatch("auth/logUserOut");
    });
  },
  head: {
    title: 'Login'
  }
};
</script>
