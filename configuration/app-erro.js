
class Error {
    
   constructor(code, message){
      return {  error: code,
                message: message
             }
   }

   get()
   {
       return this.object;
   }

}

module.exports = Error
