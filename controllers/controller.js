const {v4:uuid} = require("uuid");


let posts=[
    {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
    {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
    {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
    {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
    {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
]

function homepage(req,res){

    let {id}=req.query

    res.render("index.ejs",{posts,id});

}

function addpost(req,res){

    let {post} = req.body;

    posts.push({id:uuid(),name:"umar",post:post,Comment:[],likes:0,shares:0,reposts:0})

    res.redirect("/")
}

function addcomment(req,res){

    let {comment} = req.body;
    let {id} = req.params;

    for( post of posts){

        if(post.id==id){

            post.Comment.push(comment)
            break;
        }
    }


    res.redirect(`/?id=${id}`)
}


function update(req,res){

    let {id} = req.params;
    let post;

    for( post of posts){

        if(post.id==id){

            post={...post}

            break;
        }
    }

    

    res.render("edit.ejs",{post})
}


function updatepost(req,res){

    let {pos} = req.body;
    let {id} = req.params;

   // console.log(pos)

    for( post of posts ){

        if(post.id==id){

        post.post=pos;
        break;

        }
    }


    res.redirect("/")


}


function viewpost(req,res){


      let {id} = req.params;

      let post

   // console.log(pos)

    for( post of posts ){

        if(post.id==id){

        post={...post}
        break;

        }
    }

    res.render("view.ejs",{post})


}


function deletepost (req,res){


     let {id} = req.params;

    //  console.log(id)


    for(let i=0;i<posts.length;i++){

        if(posts[i].id==id){

            posts.splice(i,1)
        break;

        }
    }

    res.redirect("/")


    
}
module.exports = { homepage,addpost,addcomment,updatepost,update,viewpost,deletepost }