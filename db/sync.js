exports.sync = async (sync, force) => {
    if (sync){
        const { Gender } = require("../src/models/gender");
        const { User } = require("../src/models/user");
    
        await Gender.sync({force});
        await User.sync({force});
        return 'Sync complete';
    } 
    
    return '';
}