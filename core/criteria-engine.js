const Util = require('../configuration/app-utility');

class Criteria {

    constructor(){

    }

    validate(){
        throw "Not Implementation Criteria.Validate";
    }

    ///validation types and value
    ///param: Array or an unit
    ///return true | false
    vFieldType(criteria)
    {
        if(criteria.constructor == Array)
        {
            var error = -1;
            criteria.forEach(field => {
                if(!this.vValueAndType(field))
                  error++;  
            });

            return (error < 0);
        }
        else
            return this.vValueAndType(criteria);
    }

    ///validation value an type field
    ///param: field
    //return true | false
    vValueAndType(field){

        switch(field.type)
        {   
            case "date": // type === Date
            {
                return Util.isDate(field.value);
                break;
            }
            case "int": // type === integer
            {
                return Util.isNumber(field.value);
                break;
            }
            case "boolean": // type === boolean
            {
                return Util.isBool(field.value);
                break;
            }
            case "string": // type === string
            {
                return true;
            }
            default: // type undefined that not validation
            {
                return false;
            }
        }
    }
}

///export module criteria engine
module.exports = Criteria;

