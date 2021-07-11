<template>
  <div id="register">
      <h2>注册</h2>
      <div class="registerForm">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="user">
                <el-input type="username" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="button" type="primary" @click="submitForm('ruleForm')">注册</el-button><br>
                <el-button style="margin-top:10px" class="button" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
import {register} from "network/login.js"
export default {
    name: "Register",
    data() {
      var checkuser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else if(value.length < 3 || value.length > 8) {
            return callback(new Error("用户名长度为3--8位"))
        }else {
            callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          user: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          user: [
            { validator: checkuser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            const username = this.ruleForm.user
            const password = this.ruleForm.pass
            const data = {username, password}
            register(data).then(res => {
                // console.log(res)
                try {
                    if(res.status === 200) {
                        this.$message({
                            message: "注册成功",
                            type: "success"
                        })
                        this.$router.replace("/login")
                    }
                }catch(err) {
                    this.$message.error("用户名已存在")
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
    #register {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    h2 {
        color: var(--color-high-text);
        margin-top: 100px;
        text-align: center;
    }
    .registerForm {
        margin-top: 20px;
        margin-right: 35px;
    }
    .button {
        width: 279px;
    }
</style>