var behaviour = require('../core/behaviour-engine');

var json = '{ "schema":[{"field":"codigo","type":"string" },{ "field":"date","type":"datetime"},{"field":"amount","type":"decimal"},{"field":"itens","type":"array","itens":[{"field":"item","type":"string"},{"field":"quantity","type":"string"},{"field":"value_unit","type":"decimal"}]}]}';
///console.log(JSON.parse(json));
//

try{
    new behaviour('invoce', json).init();
}
catch (ex)
{
    console.log('Service.js - DEBUGX');
    console.log(ex);
}


 ////
