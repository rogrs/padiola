/// ---------------------------------------------------------
/// Class with responbility utility all project
/// ---------------------------------------------------------
class Utility {

    ///verify is date type
    ///param: date
    ///return true | false
    static isDate(date){
        return !isNaN(Date.parse(date));
    }

    ///verify is number type
    ///param: number
    ///return true | false
    static isNumber(number)
    {
        return !isNaN(number);
    }

    ///verify is boolean type
    ///param: date
    ///return true | false
    static isBool(boolean){
        return (boolean === "true" || boolean === "false" || boolean === true || boolean === false);
    }
    
    ///verify string is null or empty
    ///param: text
    ///return true | false
    static isNullOrEmpty(text) {
        try { return (text.length > 0 ||  text != '' || text != null) }
        catch { return false; }
    }

    ///verify is json valid
    ///param: json
    ///return true | false
    static isJSON(json){
        try{ JSON.parse(json); return true; }
        catch { return false; }
    }

    ///Create object Layer based in schema
    ///param: LObject and Schema
    ///return LObject create   
    static Reflation(lObject, schema){
        schema.schema.forEach(field => {
            Reflect.defineProperty(lObject, field.field, {value:field.type});
        });

        return lObject
    }
}

///exports module Utility
module.exports = Utility;