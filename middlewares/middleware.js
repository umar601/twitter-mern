const express = require("express")
const path = require("path")
const methodOverride = require("method-override");


function middlewares (app){

    app.set("view engine","ejs");
    app.set("views",path.join(__dirname,"../views"));
    app.use(express.static(path.join(__dirname,"../public")));
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(methodOverride("_method"))
    
}

module.exports = middlewares;