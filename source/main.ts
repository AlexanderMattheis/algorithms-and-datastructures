import LinkedList from "./logic/data-structures/linked-list";

function main() {
    // inserting somewhere inside
    let list:LinkedList<number> = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(8);
    list.insert(10, 1);
    console.log("456");

    // inserting in an empty list
    let list2:LinkedList<number> = new LinkedList();
    list2.insert(10, 0);
    console.log("212");

    // inserting after the last position
    let list3:LinkedList<number> = new LinkedList();
    list3.append(5);
    list3.append(6);
    list3.append(8);
    list3.insert(10, 2);
    console.log("223");

    // inserting at a too high position
    let list4:LinkedList<number> = new LinkedList();
    list4.append(5);
    list4.append(6);
    list4.append(8);
    list4.insert(10, 3);
    console.log("788");

    // delete somewhere inside
    let list5:LinkedList<number> = new LinkedList();
    list5.append(5);
    list5.append(6);
    list5.append(8);
    list5.delete(1);
    console.log("985");

    // delete at the start
    let list6:LinkedList<number> = new LinkedList();
    list6.append(5);
    list6.append(6);
    list6.append(8);
    list6.delete(0);
    console.log("789");

    // delete at the end
    let list7:LinkedList<number> = new LinkedList();
    list7.append(5);
    list7.append(6);
    list7.append(8);
    list7.delete(2);
    console.log("785");
}

// start program
main();