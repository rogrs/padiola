///modules custom
const Util = require('../configuration/app-utility');
const Error = require('../configuration/app-erro');
const RuleEngine = require('./rule-engine');
let LObject = require('./schema/lobject');

///Mock db
var db = require('../model/db');

/// ---------------------------------------------------------
/// Class with responbility unit all process the rules
/// ---------------------------------------------------------
class Behaviour {

    ///constructor
    //params: { type, structure }
    constructor(type, structure){
        this.__type = type;
        this.__structure = structure;
    }

    ///Start process validate information the behaviour.
    init()
    {
        if(!Util.isNullOrEmpty(this.__type) || !Util.isNullOrEmpty(this.__structure))
            throw new Error(10, 'Params invalid');
        else
        {
            if(!Util.isJSON(this.__structure))
                throw new Error(11, 'JSON invalid');
            else
            {
                if(this.Schema(new LObject(this.__type), JSON.parse(this.__structure), db.schema))
                {
                   let ruleEngine = new RuleEngine(new LObject(this.__type), db);
                   ruleEngine.init();
                    //console.warn("init rule engine");
                }
                else    
                    throw new Error(22, "Problema process behaviour");
            }
                
        }
     
    }

    ///validate schema in behaviuor
    ///Param: LObject, oStructure and dbStructure
    // return true | false
    Schema(lObject, oStructure, dbStructure)
    {
       /// get behaviour bd 
        let objType = Util.Reflation(lObject, dbStructure);
        oStructure.schema.forEach(criteria => {
            if(Util.isNullOrEmpty(Reflect.get(objType, criteria.field))){
                if(Reflect.get(objType, criteria.field) !== criteria.type)
                    throw new Error(9999, "Type the field not correct");
            }
            else
                throw new Error(9999, "Field not correct");
        });
    
        return true;
    }
}

///exports module Behaviour
module.exports = Behaviour;