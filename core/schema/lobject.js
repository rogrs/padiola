///-----------------------------------------------------------------------
/// Summary: Class of layer for all objects create fielo or custom.
// This classe responsability implement properties dinamic for schema.
///-----------------------------------------------------------------------

class LObject {

    //Construtor { param: Type (Invoce, Member, Opportunity or Custom)}
    constructor(type)
    {
        this.__type = type;
        return this;
    }

    //Properties--------------------------------------------------------- 
    
    //Type Name
    get Type() { return this.__type; }

    
}

module.exports = LObject;