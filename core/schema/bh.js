// Behaviour 
// 	(ID Type): Proof of Purchase, ELearning, Survey, Opportunity, etc
// 	Schema: ( http://json-schema.org/ )
// 	Validate: Boolean  --OR-- Field: String
// 	Conditions: Array Of
            // Criteria
                // Members: Array Of
                // 	Path


Behaviour = {
    type:'invoce',
    schema: {
                type:'invoice',
                fields:[
                        {
                            type:'string',
                            name:'name'   
                        },
                        {
                            type:'datetime',
                            name:'date'   
                        },
                        {
                            type:'decimal',
                            name:'value'
                        },
                        {
                            items:[
                                {
                                    type:'integer',
                                    name:'quantity'
                                },
                                {
                                    type:'string',
                                    name:'description'
                                },
                                {
                                    type:'decimal',
                                    name:'value'
                                }
                            ]
                        }
                    ]
             },
    valide:true,
    conditions = [
                    {
                        field:'name',
                        operator:'equals',
                        type:'string',
                        value:'leandro',
                        members = [
                            {
                                path:'vendedor'
                            },
                            {
                                path:'comprador'
                            }
                        ]       
                    },
                    {
                        field:'date',
                        operator:'equals',
                        value: '2019-01-01',
                        type:'datetime',
                        members = [
                            {
                                path:'name'
                            },
                            {
                                path:'date'
                            }
                        ]
                    },
                    {
                        field:'point',
                        operator:'equals',
                        value: 1000,
                        type:'int',
                        members = [
                            {
                                path:'date'
                            },
                            {
                                path:'email'
                            }
                        ]
                    },
                    ,
                    {
                        field:'sexo',
                        operator:'equals',
                        value: true,
                        type:'boolean',
                        members = [
                            {
                                path:'date'
                            },
                            {
                                path:'email'
                            }
                        ]
                    }
                ]   
}
