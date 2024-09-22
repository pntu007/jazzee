module.exports = fn =>{
    return (req,res,next)=>{
        fn(req,tes,next).catch(next);
    };
};