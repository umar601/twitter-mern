const {v4:uuid} = require("uuid");

const {user} = require("../models/model.js")


// let posts=[
//     {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
//     {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
//     {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
//     {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
//     {id:uuid(),name:"umar",post:"i love allah",Comment:["good","best"],likes:10,shares:10,reposts:10},
// ]

async function homepage(req,res){

    let {id}=req.query

    let posts= await user.find({})



    res.render("index.ejs",{posts,id});

}

function addpost(req,res){

    let {post} = req.body;

    // posts.push({id:uuid(),name:"umar",post:post,Comment:[],likes:0,shares:0,reposts:0})

    user.insertOne({name:"umar",post:post,comment:[],likes:0,shares:0,reposts:0})
    .then((data)=>{
        console.log(data)
    }).catch(()=>{
        console.log("err")
    })

    res.redirect("/")
}

async function addcomment(req,res){

    let {comment} = req.body;
    let {id} = req.params;

    console.log(id);

    await user.findByIdAndUpdate(id,{$push:{comment:comment}},{new:true})
    .then((data)=>{
        console.log(data)
    })
    .catch(()=>{
        console.log("err")
    })


    res.redirect(`/?id=${id}`)
}


async function update(req,res){

    let {id} = req.params;


    let post = await user.findById(id)

    // for( post of posts){

    //     if(post.id==id){

    //         post={...post}

    //         break;
    //     }
    // }

    

    res.render("edit.ejs",{post})
}


async function updatepost(req,res){

    let {pos} = req.body;
    let {id} = req.params;

   // console.log(pos)

   await user.findByIdAndUpdate(id,{post:pos})


    // for( post of posts ){

    //     if(post.id==id){

    //     post.post=pos;
    //     break;

    //     }
    // }


    res.redirect("/")


}


async function viewpost(req,res){


      let {id} = req.params;



    let post = await user.findById(id)


   // console.log(pos)

    // for( post of posts ){

    //     if(post.id==id){

    //     post={...post}
    //     break;

    //     }
    // }

    res.render("view.ejs",{post})


}


async function deletepost (req,res){


     let {id} = req.params;

    //  console.log(id)


    await user.findByIdAndDelete(id);


    // for(let i=0;i<posts.length;i++){

    //     if(posts[i].id==id){

    //         posts.splice(i,1)
    //     break;

    //     }
    // }

    res.redirect("/")


    
}
module.exports = { homepage,addpost,addcomment,updatepost,update,viewpost,deletepost }