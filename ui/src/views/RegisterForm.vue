<template>
  <div>
    <div class="body">
      <div class="centre">
        <h1>Register Here</h1>

        <form @submit.prevent="handleSubmit">

           <div class="txt_field">
            <input  required v-model="firstName" />
            <span></span>
            <label>First Name</label>
          </div>
           <div class="txt_field">
            <input  required v-model="lastName" />
            <span></span>
            <label>Last Namr</label>
          </div>
          <div class="txt_field">
            <input type="email" required v-model="email" />
            <span></span>
            <label>Email</label>
          </div>

          <div class="txt_field">
            <input type="integer" required v-model="number" />
            <span></span>
            <label>Phone Number</label>
          </div>

          <div class="role">
            <label>Type:</label>
            <select v-model="role">
              <option value="web developer">Regular</option>
              <option value="web designer">Prime</option>
            </select>
          </div>

          <div class="terms">
            <input type="checkbox" v-model="terms" required />
            <label>I ACCEPT TERMS AND CONDITIONS</label>
          </div>

          <div class="submit">
            <button class="button">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>

    <!--<p>Email : {{email}}</p>
      <p>Phone Number : {{number}}</p>
      <p>Role : {{role}}</p>
      <p>Terms Accepted : {{terms}} </p>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      role: "",
      terms: false,
      passwordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log("email: ", this.email);
      console.log("number: ", this.number);
      console.log("role: ", this.role);
      console.log("terms accepted: ", this.terms);
      await axios.post("http://localhost:5000/users", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        number: this.number
      })
      this.$router.push("/customers")
    },
  },
};
</script>

<style>
.body {
  margin: 0;
  padding: 0;
  font-family: montserrat;
  background-color: gray;
  height: 100vh;
}
.centre {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
}
.centre h1 {
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid silver;
}
.centre form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  backgroud: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: black;
  transition: 0.5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: black;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
.button {
  width: 100%;
  height: 50px;
  border: 5px solid;
  background: lightslategray;
  border-radius: 25px;
  font-size: 18px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
}
.button:hover {
  border-color: darkgray;
  transition: 0.5s;
}
.role {
  margin-bottom: 15px;
}
.role select {
  width: 89%;
}
</style>
