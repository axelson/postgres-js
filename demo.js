var sys = require("sys");
var pg = require("./lib/postgres-pure");
pg.DEBUG=0;

//var db = new pg.connect("pgsql://test:12345@localhost:5432/template1");
console.log("hi1");
var db = new pg.connect("pgsql://amino:1@localhost:5432/aminodb");
console.log("hi2");
db.query("SELECT * FROM test5", function (rs, tx) {
console.log("hi3");
//db.query("SELECT 1::int as foobar;", function (rs, tx) {
    sys.puts(sys.inspect(rs));
    tx.query("SELECT 2::int as foobartwo", function (rs) {
        sys.puts(sys.inspect(rs));
    });
    // db.close();
});
console.log("hi4");

// db.prepare("SELECT ?::int AS foobar", function (sth, tx) {
//     sth.execute(1, function (rs) {
//         sys.puts(sys.inspect(rs));
//     });
//     sth.execute(2, function (rs) {
//         sys.puts(sys.inspect(rs));
//         
//     });
//     // db.close();
// });
db.close();
console.log("hi5");

// 
// db.transaction(function (tx) {
//     tx.query("SELECT ?::int AS foobar", 1, function (rs) {
//         sys.puts(sys.inspect(rs));
//     });
//     tx.prepare("SELECT ?::int AS foobar", function (sth) {
//         sth.execute(2, function (rs) {
//             sys.puts(sys.inspect(rs));
//         });
//     });
//     tx.commit();
// });
