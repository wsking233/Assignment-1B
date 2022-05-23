const { json } = require("body-parser");
const { default: mongoose } = require("mongoose");
const article = require("../../frontend/src/components/articleSearch");


module.exports.articleTemplate = (req, res, next)=>{

    try{
        const{title} = req.body;
        const titleCheck = await article.findOne({title});
     
        if(titleCheck){
            return res+json({msg: "Article is found: "+{title}, status:false })
         }
         const theArticle = await article.create({
             title,
             author,
             year,
             source,
             url
         });
     
         return res.json({status: true, article});
    }catch(e){
        next(e);
    }

}

function searchArticle(res,title){
     
}