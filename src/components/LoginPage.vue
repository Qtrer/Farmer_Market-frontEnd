<template>
  <div id="building">
    <div class="page-container">
      <h1>FarmersMarket</h1>
      <div class="parent-container">
        <div class="content-box">
          <div class="row justify-content-center">
            <div class="form-container">
              <form @submit.prevent="handleSignIn">
                <div class="form-group">
                  <label for="emailOrPhone">Email or Phone Number</label>
                  <input type="text" class="form-control" id="emailOrPhone"
                         placeholder="Enter your email or phone number" v-model="emailOrPhone" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password"
                         placeholder="Enter Password" v-model="password" required>
                </div>
                <div class="form-group">
                  <label for="role">Sign in as</label>
                  <select class="form-control" id="role" v-model="role" required>
                    <option value="customer">Customer</option>
                    <option value="farmer">Farmer</option>
                  </select>
                </div>
                <div class="button-container text-center">
                  <button type="submit" class="btn btn-primary">Sign In</button>
                  <button type="button" class="btn btn-secondary" @click="handleSignUp">Sign Up</button>
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
  name: 'LoginPage',
  data(){
    return {
      emailOrPhone: '',
      password: '',
      role: ''
    }
  },
  methods:{
    // sign in check
    handleSignIn(){
      // check email/phone format
      if (!this.isValidEmailOrPhone(this.emailOrPhone)) {
        alert(`Invalid email address or phone number.`)
        return;
      }
      // check null value
      if (
        this.emailOrPhone  === '' ||
        this.password === '' ||
        this.role=== ''
      ) {
        alert(`Please fill out all fields.`)
        return;
      }

      // check database
      if (!this.isExistEmailOrPhone(this.emailOrPhone)) {
        alert(`No such email or phone number, please Sign up first!`)
        return;
      }

      if (!this.isCorrectPassword(this.password,this.emailOrPhone)) {
        alert(`Incorrect password`)
        return;
      }

      // redirect to appropriate page based on selected role
      if (this.role === 'customer') {
        alert(`You have successfully signed in as a customer!`)
        this.$router.push({ name: 'CustomerMain' })
      } else if (this.role === 'farmer') {
        alert(`You have successfully signed in as a farmer!`)
        this.$router.push({ name: 'FarmerMain' })
      }
    },

    // redirection to Sign Up
    handleSignUp(){
      this.$router.push({ name: 'RegistrationPage' })
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

    // check password function
    // isCorrectPassword(password, emailOrPhone) {
    //   //TODO the database logic here
    //
    //   return true;
    // },

    // check email/phone function
    // isExistEmailOrPhone(emailOrPhone) {
    //   //TODO the database logic here
    //   return true;
    // }
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
  margin-bottom: 40px;
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
  font-size: 80px;
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
  filter: blur(4px);
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
