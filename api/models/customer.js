import db from "../config/db.js";

const Customer ={
   
    async get(){
let sql = "Select * from customers"
        const [customers, _] = await db.execute(sql);
        return customers;

    },
    async save(customer) {
      let d=  new Date().toISOString().slice(0, 19).replace('T', ' ');
        

        let sql =`
        
        INSERT INTO customers (
            firstName,
            lastName,
            email,
            phone,
            type,
            accepted
           
            )
            VALUES(
                '${customer.firstName}',
                '${customer.lastName}',
                '${customer.email}',
                '${customer.number}',
                '${customer.role}',
                '${customer.terms}'
             
                )`;
   const [newCustomer, _] = await db.execute(sql);
     
   return newCustomer;
    }

  
}

export {Customer}