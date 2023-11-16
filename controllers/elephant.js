var elephant = require('../models/elephant');
// List of all elephants
exports.elephant_list = async function(req, res) {
    try{
    theelephant = await elephant.find();
    res.send(theelephant);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   
// for a specific elephant.
exports.elephant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await elephant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

// Handle elephant create on POST.
exports.elephant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new elephant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"goat", "age":12, "bread":"large"}
    document.name = req.body.name;
    document.age = req.body.age;
    document.breed = req.body.breed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
// Handle elephant delete form on DELETE.
exports.elephant_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: elephant delete DELETE ' + req.params.id);
};
//Handle elephant update form on PUT.
exports.elephant_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await elephant.findById( req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.age) toUpdate.age = req.body.age;
    if(req.body.bread) toUpdate.bread = req.body.bread;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };
// VIEWS
// Handle a show all view
exports.elephant_view_all_Page = async function(req, res) {
    try{
    theelephant = await elephant.find();
    res.render('elephant', { title: 'elephant Search Results', results: theelephant });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

   // Handle elephant delete on DELETE.
exports.elephant_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await elephant.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.elephant_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await elephant.findById( req.query.id)
    res.render('elephantdetail',
    { title: 'elephant Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a elephant.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.elephant_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('elephantcreate', { title: 'elephant Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a elephant.
    // query provides the id
    exports.elephant_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await elephant.findById(req.query.id)
    res.render('elephantupdate', { title: 'elephant Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
    exports.elephant_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await elephant.findById(req.query.id)
    res.render('elephantdelete', { title: 'elephant Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    