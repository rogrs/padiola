/// ------------------------------------------------
/// Class with all configuration application
/// ------------------------------------------------
class AppConfig {

    ///Configurations server aplication
    static get Server(){
        return {
            port:  process.env.PORT || 4200,
            serverName:'Asgard',
            ip:'127.0.0.1'
        };
    }

    ///Example to email configuration
    static get Email() {
        return {
            SMTP: 'smtp.gmail.com',
            port:3128,
            tsl: true,
            auth:{
                user:'xxxxxx',
                pass:'xxxx'
            }
        }
    }
}

///Export the class for module.
module.exports = AppConfig;
