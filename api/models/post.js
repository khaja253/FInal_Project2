import db from "../config/db.js";

const Post ={
   
    async get(){
let sql = "Select * from posts"
        const [posts, _] = await db.execute(sql);
        return posts;

    },
    async save(post) {
      let d=  new Date().toISOString().slice(0, 19).replace('T', ' ');
        

        let sql =`
        
        INSERT INTO posts (
            firstName,
            body,
            created_at
            )
            VALUES(
                '${post.firstName}',
                '${post.lastName}',
              '${d}'
                )`;
   const [newPost, _] = await db.execute(sql);
     
   return newPost;
    }

  
}

export {Post}