var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Campground  = require("../models/campground"),
    Comment     = require("../models/comment"),
    middleware  = require("../middleware");

//COMMENTS NEW
router.get("/new", middleware.isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if(err || !campground) {
            req.flash("error", "Campground not found");
            return res.redirect("back");
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

//COMMENTS CREATE
router.post("/", middleware.isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if(err || !campground) {
            req.flash("error", "Campground not found");
            return res.redirect("back");
        } else {
            Comment.create(req.body.comment, function(err, comment) {
               if(err) {
                   req.flash("error", "Something went wrong");
                   console.log(err);
               } else {
                   comment.author.id = req.user._id;
                   comment.author.username = req.user.username;
                   comment.save();
                   campground.comments.push(comment);
                   campground.save();
                   req.flash("success", "Successfully added new comment");
                   res.redirect("/campgrounds/" + req.params.id);
               }
            });
        }
    });
});

// COMMENTS EDIT
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err || !campground) {
            req.flash("error", "Campground not found");
            return res.redirect("back");
        } else {
             Comment.findById(req.params.comment_id, function(err, comment) {
                if(err) {
                    res.redirect("back");
                } else {
                    res.render("comments/edit", {campground: campground, comment: comment});
                }
            });
        }
    });
});

//COMMENTS UPDATE
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, comment){
        if(err) {
            res.redirect("back");
        } else {
            req.flash("success", "Comment updated");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//COMMENTS DESTROY
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if(err) {
            res.redirect("back");
        } else {
            req.flash("success", "Comment removed");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});


module.exports = router;