"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = require("./logic/data-structures/linked-list");
function main() {
    // inserting somewhere inside
    var list = new linked_list_1.default();
    list.append(5);
    list.append(6);
    list.append(8);
    list.insert(10, 1);
    console.log("456");
    // inserting in an empty list
    var list2 = new linked_list_1.default();
    list2.insert(10, 0);
    console.log("212");
    // inserting after the last position
    var list3 = new linked_list_1.default();
    list3.append(5);
    list3.append(6);
    list3.append(8);
    list3.insert(10, 2);
    console.log("223");
    // inserting at a too high position
    var list4 = new linked_list_1.default();
    list4.append(5);
    list4.append(6);
    list4.append(8);
    list4.insert(10, 3);
    console.log("788");
    // delete somewhere inside
    var list5 = new linked_list_1.default();
    list5.append(5);
    list5.append(6);
    list5.append(8);
    list5.delete(1);
    console.log("985");
    // delete at the start
    var list6 = new linked_list_1.default();
    list6.append(5);
    list6.append(6);
    list6.append(8);
    list6.delete(0);
    console.log("789");
    // delete at the end
    var list7 = new linked_list_1.default();
    list7.append(5);
    list7.append(6);
    list7.append(8);
    list7.delete(2);
    console.log("785");
}
// start program
main();
//# sourceMappingURL=main.js.map