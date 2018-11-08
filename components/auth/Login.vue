<template>
  <div class="section">
    <el-alert v-if="loginErrorMessage" title="Error" :description="loginErrorMessage" type="error" show-icon class="mb-4 p-3" size="big" :closable="false"></el-alert>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" inline-message :show-message="false" class="mt-2">
      <el-form-item prop="email">
        <el-input type="email" v-model="ruleForm.email" placeholder="Enter email address" size="big" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="Enter password" size="big" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-100" type="primary" @click.prevent="login('ruleForm')" size="big" :loading="isFormSubmitted">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isFormSubmitted: false,
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            trigger: ["blur", "change"]
          },
          {
            type: "email",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            trigger: ["blur", "change"]
          },
          {
            min: 6,
            max: 32,
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  computed: {
    loginErrorMessage () { return this.$store.state.auth.loginErrorMessage }
  },
  methods: {
    login(formName) {
      this.isFormSubmitted = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          const authData = {
            email: this.ruleForm.email,
            password: this.ruleForm.password
          };
          this.$store
            .dispatch('auth/userSignIn', {
              email: authData.email,
              password: authData.password
            })
            .then(() => {
              setTimeout(() => (this.isFormSubmitted = false), 500);
            });
        } else {
          this.isFormSubmitted = false;
          this.$refs[ruleForm].resetFields();
        }
      });
    }
  }
};
</script>
