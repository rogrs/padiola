'use restrict';

///modules custom
const Error = require('../configuration/app-erro');
const Criteria = require('./criteria-engine');

/// ---------------------------------------------------------
/// Class with responbility unit all process the rules
/// ---------------------------------------------------------
class RuleEngine extends Criteria {

    constructor(lObject, dbSchema) 
    { 
      super();
      this.__lObject = lObject;
      this.__dbSchema = dbSchema;
    }


    init()
    {
      if(!this.vFieldType(this.__dbSchema.condition.criteria))
        throw new Error(60, "Conditions is not valid");

      this.__dbSchema.condition.criteria.forEach(element => {
        console.log(element);
      });
    }
}



module.exports = RuleEngine;