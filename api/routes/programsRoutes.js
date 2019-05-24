/*
 * GET users listing.
 */

exports.list = function(req, res){

    req.getConnection(function(err,connection){
         
          var query = connection.query('SELECT * FROM salesforcefielo.FieloPLT__Program__c',function(err,rows)
          {
              
              if(err)
                  console.log("Error Selecting : %s ",err );
       
              res.render('programs',{page_title:"Programs - Node.js",data:rows});
                  
             
           });
           
           console.log(query.sql);
      });
    
  };
  