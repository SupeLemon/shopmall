<template>
  <div id="login">
      <div class="back" @click="back">
          <img src="~assets/img/common/返回.png" alt="">
      </div>
      <h2>购物街</h2>
      <div class="loginForm">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="user">
                <el-input type="username" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="button" type="primary" @click="submitForm('ruleForm')">登陆</el-button><br>
                <el-button style="margin-top:10px" class="button" @click="toRegister">注册</el-button>
            </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
import {login} from "network/login.js"
export default {
    name: "Login",
    data() {
      var validateuser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'));
        }else {
            callback()
        }
      };
      var validatepass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        }else {
            callback()
        }
      };
      return {
        ruleForm: {
          user: '',
          pass: '',
        },
        rules: {
          user: [
            { validator: validateuser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatepass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const username = this.ruleForm.user
            const password = this.ruleForm.pass
            // console.log(username, password)
            const data = {username, password}
            // console.log(data)
            login(data).then(res => {
                try {
                    if(res.status === 200) {
                        const user = res.data
                        this.$store.dispatch("addUser", user)
                        this.$message({
                            message: "登陆成功",
                            type: "success"
                        })
                        this.$refs[formName].resetFields()
                        this.$router.replace("/profile")
                    }
                }catch(err) {
                    this.$message.error("用户名或密码错误")
                }
            })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      toRegister() {
          this.$router.push("/register")
      },
      back() {
          this.$router.replace("/profile")
      }
    }
}
</script>

<style scoped>
    #login {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    h2 {
        text-align: center;
        margin-top: 100px;
        color: var(--color-high-text);
    }
    .loginForm {
        /* position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); */
        margin-top: 20px;
        margin-right: 35px;
    }
    .back img {
        height: 20px;
        height: 20px;
        margin: 5px 0 0 5px;
    }
    .button {
        width: 279px;
    }
</style>