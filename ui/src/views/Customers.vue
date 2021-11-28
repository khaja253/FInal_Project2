<template>
    <div>
        <h1>Thanks for registering.</h1>
       

   
        <h2>List of customers</h2>
        <div class="Table">
            <table class="table table-striped table-bordered">
            <thead style="background-color: black; color: white">
                <tr>
                    <th style="min-width: 15rem; padding: 10px">Name</th>
                    <th style="min-width: 15rem; padding: 10px">Email</th>
                    <th style="min-width: 15rem; padding: 10px">Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in customers" :key="user.id">
                    <td style="min-width: 15rem; padding: 10px">{{user.firstName}} {{user.lastName}}</td>
                    <td style="min-width: 15rem; padding: 10px">{{user.email}}</td>
                    <td style="min-width: 15rem; padding: 10px">{{user.role}}</td>
                </tr>
            </tbody>
        </table>
            </div>
                 </div>
</template>

<script>
import axios from "axios"
export default {
    name: "Customers",
    data(){
        return {
            customers:[]
        }
    },
    mounted(){
setTimeout(async () => {
    const result = await axios.get("http://localhost:5000/users");
    this.customers = result.data;
    
});
    }
}
</script>
<style scoped>
.Table{
    font-size: 1.5rem;

}
</style>