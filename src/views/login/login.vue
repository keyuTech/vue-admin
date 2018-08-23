<template>
  <div class="login-container">
    <el-form class="login-form" autocomplete="on">
      <div class="title">
        <h3>系统登录</h3>
      </div>
      <div class="logo">
        <img src="../../../static/img/logo.png" alt="">
      </div>
      <el-form-item prop="userphone">
        <span class="icon-container icon-container_login">
          <font-awesome-icon :icon="['fas', 'user']" />
        </span>
        <el-input name="userphone" type="text" placeholder="用户名" v-model="loginForm.userphone" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="icon-container">
          <font-awesome-icon :icon="['fas', 'key']" />
        </span>
        <el-input name="password" placeholder="密码" :type="passwordType" v-model="loginForm.password" />
        <span class="icon-password" @click="showPassword">
          <font-awesome-icon v-show="showpwd" :icon="['fas', 'eye']" />
          <font-awesome-icon v-show="!showpwd" :icon="['fas', 'eye-slash']" />
        </span>
      </el-form-item>

      <el-button class="get-code button" type="primary" @click="getCode">获取验证码</el-button>

      <el-form-item prop="verification-code">
        <span class="icon-container">
          <font-awesome-icon :icon="['fas', 'lock']" />
        </span>
        <el-input name="verificationCode" type="text" placeholder="短信验证码" />
      </el-form-item>
      <el-button class="logIn button" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { isValidUser } from "@/utils/validate";
import Swal from "sweetalert2";
import { loginByUsername } from '../../api/login';

export default {
  name: "login",
  data() {
    const validUser = (rule, value, callback) => {
      if (!isValidUser(value)) {
        callback();
      }
    };
    return {
      loginForm: {
        userphone: "",
        password: ""
      },
      verificationCode: "",
      passwordType: "password",
      showpwd: false
    };
  },
  methods: {
    showPassword() {
      if (this.loginForm.password === "") {
        return;
      } else {
        this.showpwd = !this.showpwd;
        if (this.passwordType === "password") {
          this.passwordType = "";
        } else {
          this.passwordType = "password";
        }
      }
    },
    getCode() {
      loginByUsername(this.loginForm.userphone, this.loginForm.password).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #283443;
$lightGray: #eee;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    &::first-line {
      color: $lightGray;
    }
  }
}

.login-container {
  width: 25%;
  margin: 0 auto;
  .title {
    text-align: center;
    color: $lightGray;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $lightGray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$darkGray: #889aa4;
$lightGray: #eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .logo {
    position: fixed;
    top: 5%;
    left: 5%;
    img {
      height: 60px;
      z-index: 1;
    }
  }
  .login-form {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 15%;
    margin-left: -200px;
    padding: 20px;

    .title {
      font-size: 22px;
      margin-bottom: 30px;
    }

    .el-input {
      padding-left: 26px;
    }

    .icon-container {
      position: absolute;
      left: 14px;
      z-index: 1;
      height: 47px;
      line-height: 47px;
      color: $darkGray;
    }

    .icon-password {
      position: absolute;
      right: 14px;
      top: 4px;
      color: $darkGray;
    }

    .button {
      display: inline-block;
      width: 100%;
      height: 47px;
      font-size: 20px;
    }

    .button.get-code {
      margin-bottom: 24px;
    }
  }
}
</style>


