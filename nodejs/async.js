const async=require('async')
async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 5000);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 1000);
    }
],
// optional callback
function(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results)
});
