const url = "http://localhost:8080/logger"
function log(message) {
    console.log("this message is: "+message);

}
module.exports.log = log;
module.exports.endpoint = url;