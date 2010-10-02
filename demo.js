var sys = require("sys");
var pg = require("./lib/postgres-pure");
pg.DEBUG=0;

console.log("hi");
var db = new pg.connect("pgsql://amino:1@localhost:5432/template1");
console.log("hi2");

db.query("SELECT * FROM test5", function (data) {
    //sys.p(data);
    console.log("hiin");
});
console.log("hi3");
db.end();
//db.close();
console.log("hi4");


//db.prepare("SELECT ?::int", function (sth) {
//    sth.execute([1], function (rs) {
//        for (var i = 0; i < rs.length; i++) {
//            for (var key in rs[i]) {
//                if (rs[i].hasOwnProperty(key)) {
//                    sys.puts(key +": " +rs[i][key]);
//                }
//            }
//        }
//        db.end();
//    });
//    sth.execute([2], function (rs) {
//        sys.puts(sys.inspect(rs));
//    })
//});
