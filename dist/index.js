"use strict";
var a = 1;
console.log("*");
var b = null;
var Person1Køn = 1;
var Person2Køn = 0;
var Køn;
(function (Køn) {
    Køn[Køn["mand"] = 2] = "mand";
    Køn[Køn["kvinde"] = 4] = "kvinde";
})(Køn || (Køn = {}));
var Person3Køn = Køn.kvinde;
var a1 = [11, 5, 1, 6];
a1.push(5);
var a2 = [];
a2.push("4");
//# sourceMappingURL=index.js.map