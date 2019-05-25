var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam. Lectus proin nibh nisl condimentum id. Scelerisque viverra mauris in aliquam sem fringilla. Vestibulum morbi blandit cursus risus at. Porttitor massa id neque aliquam vestibulum morbi. Pharetra pharetra massa massa ultricies mi. Lectus proin nibh nisl condimentum id. Tincidunt praesent semper feugiat nibh. Gravida cum sociis natoque penatibus et magnis dis parturient. Nec ultrices dui sapien eget mi proin. Ullamcorper eget nulla facilisi etiam dignissim diam quis."
        },
        {
            name: "Mist Valley",
            image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam. Lectus proin nibh nisl condimentum id. Scelerisque viverra mauris in aliquam sem fringilla. Vestibulum morbi blandit cursus risus at. Porttitor massa id neque aliquam vestibulum morbi. Pharetra pharetra massa massa ultricies mi. Lectus proin nibh nisl condimentum id. Tincidunt praesent semper feugiat nibh. Gravida cum sociis natoque penatibus et magnis dis parturient. Nec ultrices dui sapien eget mi proin. Ullamcorper eget nulla facilisi etiam dignissim diam quis."
        },
        {
            name: "Star Lake Side",
            image: "https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam. Lectus proin nibh nisl condimentum id. Scelerisque viverra mauris in aliquam sem fringilla. Vestibulum morbi blandit cursus risus at. Porttitor massa id neque aliquam vestibulum morbi. Pharetra pharetra massa massa ultricies mi. Lectus proin nibh nisl condimentum id. Tincidunt praesent semper feugiat nibh. Gravida cum sociis natoque penatibus et magnis dis parturient. Nec ultrices dui sapien eget mi proin. Ullamcorper eget nulla facilisi etiam dignissim diam quis."
        }
    ];

function seedDB() {
    // REMOVE ALL CAMPGROUNDS
    Campground.deleteMany({}, function(err) {
        // if(err) {
        //     console.log(err);
        // } else{
        //     console.log("Removed Campgrounds!!!");
        //     // ADD A FEW CAMPGROUNDS
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //             if(err) {
        //                 console.log(err);
        //             } else {
        //                 console.log("ADDED A CAMPGROUND");
        //                 //ADD A COMMENT
        //                 Comment.create({
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //             }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;