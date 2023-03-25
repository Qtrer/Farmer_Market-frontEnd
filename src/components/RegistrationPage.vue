<template>
  <div id="building">
    <div class="page-container">
      <h1>Sign Up</h1>
      <div class="parent-container">
        <div class="content-box">
          <div class="row justify-content-center">
            <div class="form-container">
              <form @submit.prevent="handleRegister">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="username">Your name</label>
                      <input type="text" class="form-control" id="username"
                             placeholder="First and last name" v-model="user.username" required>
                    </div>
                    <div class="form-group">
                      <label for="emailOrPhone">Email or Phone Number</label>
                      <input type="text" class="form-control" id="emailOrPhone"
                             v-model="user.emailOrPhone" required>
                    </div>
                    <div class="form-group">
                      <label for="password">Password:</label>
                      <input type="password" class="form-control" id="password"
                             placeholder="Enter Password" v-model="user.password" required>
                    </div>
                    <div class="form-group">
                      <label for="confirm-password">Re-enter Password:</label>
                      <input type="password" class="form-control" id="confirm-password"
                             placeholder="Enter Password Again" v-model="user.confirmPassword" required>
                    </div>
                  </div>
                  <div class="col">
                    <div class="radio-container">
                      <div class="form-group">
                        <label for="customer-farmer">Choose Account Type:</label>
                        <div>
                          <input type="radio" id="customer" name="account-type" value="customer" v-model="user.accountType">
                          <label for="customer">Customer</label>
                        </div>
                        <div>
                          <input type="radio" id="farmer" name="account-type" value="farmer" v-model="user.accountType">
                          <label for="farmer">Farmer</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button-container text-center">
                  <button type="submit" class="btn btn-primary">Register</button>
                  <button type="button" class="btn btn-secondary" @click="handleReturn">Return</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "RegistrationPage",
  data() {
    return {
      user: {
        username: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
        accountType: ''
      }
    }
  },
  methods: {

    // // generation of code
    // generateVerificationCode(){
    //   const code = Math.random().toString(36).substring(2,6);
    //   this.generatedCode = code;
    //   alert(`Your verificationCode is ${code}`);
    // },

    // //check code
    // isValidVerificationCode() {
    //   // Check if the entered code matches the generated code
    //   return this.user.verificationCode === this.generatedCode;
    // },

    // register check
    handleRegister() {
      // check if all fields are filled
      if (
        this.user.username === '' ||
        this.user.emailOrPhone === '' ||
        this.user.password === '' ||
        this.user.confirmPassword === '' ||
        this.user.accountType === ''
      ) {
        alert(`Please fill out all fields.`)
        return;
      }

      // check if passwords match
      if (this.user.password !== this.user.confirmPassword) {
        alert(`Passwords do not match.`)
        return;
      }

      // check database
      if (!this.isExistEmailOrPhone(this.emailOrPhone)) {
        alert(`No such email or phone number, please Sign up first!`)
        return;
      }

      // check email/phone format
      if (!this.isValidEmailOrPhone(this.emailOrPhone)) {
        alert(`Invalid email address or phone number.`)
        return;
      }

      // // verificationCode check
      // if (!this.isValidVerificationCode()){
      //   alert(`Verification code is incorrect!`)
      //   return;
      // }

      // registration successful
      alert(`You have successfully registered!`);
      //TODO database logic here
      setTimeout(() => {
        this.$router.push('/'); // redirect to login page
      }, 1000);
    },
    // back to login page
    handleReturn() {
      this.$router.go(-1);
    },

    // check email/phone function
    isValidEmailOrPhone(emailOrPhone) {
      if (!emailOrPhone) {
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^\d{10}$/;
      return emailPattern.test(emailOrPhone) || phonePattern.test(emailOrPhone);
    },

    // check email/phone function
    // isExistEmailOrPhone(emailOrPhone) {
    //   //TODO the database logic here
    //   return true;
    // }
  },

  // live watch, leave to implement
  watch:{
  }
}
</script>

<style scoped>


.form-control {
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus {
  border-color: #8cba4d;
  box-shadow: 0 0 5px rgba(140, 186, 77, 0.5);
  outline: none;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1px;
}

.form-group label {
  margin-bottom: 30px;
  text-align: left;
  color: lightyellow;
  text-shadow: 2px 2px 4px #000000;
  position: relative; /* Add a relative position to allow z-index to work */
  z-index: 1; /* Set a z-index value to display the label above the blurred background layer */
  font-size: 30px;
}

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  height: 50%;
  width: 100%;
  position: relative; /* Add a relative position to allow z-index to work */
  z-index: 1; /* Set a z-index value to display the page container above the blurred background layer */
}

.form-container {
  max-width: 1000px;
  position: relative; /* Add a relative position to allow z-index to work */
  z-index: 1; /* Set a z-index value to display the form container above the blurred background layer */
}

h1 {
  top: 15px;
  text-align: center;
  font-size: 64px;
  font-weight: bolder;
  color: #8cba4d;
  text-shadow: 2px 2px 4px #000000;
  position: relative; /* Add a relative position to allow z-index to work */
  z-index: 1; /* Set a z-index value to display the heading above the blurred background layer */
}

#building{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent the blurred pseudo-element from overflowing */
}

#building::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/market.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px); /* Add a blur effect to the background image */
}

.parent-container .content-box {
  padding: 100px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  width: 100%;
  height: auto;
}

.radio-container label {
  margin-left: 10px;
}

.button-container button {
  font-size: 26px; /* Increase font size for buttons */
}

.btn {
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.btn-primary:hover, .btn-secondary:hover {
  opacity: 0.8;
}

</style>
