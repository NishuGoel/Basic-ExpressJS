exports.contacted= function(req, res){
    res.send("Inside contacted of info of about");

    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
}