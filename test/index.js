var test = require('tape');
var Notifier = require('../index');

test('constructor should work with or without new', function (t) {
    t.plan(2);

    var one = new Notifier();
    var two = Notifier();

    t.equal(one instanceof Notifier, true);
    t.equal(two instanceof Notifier, true);
});

test('add method', function (t) {
    t.plan(2);

    var n = Notifier();
    n.add();
    n.add();
    t.equal(n.count, 2, 'add without param adds 1');


    var a = Notifier();
    a.add(15);
    t.equal(a.count, 15, 'add with param adds that param');


});

test('subtract method', function (t) {
    t.plan(2);

    var foo = Notifier();
    foo.subtract();
    foo.subtract();
    t.equal(foo.count, 0, 'subtract should never go lower than zero');


    var a = Notifier(30);
    a.subtract(15);
    t.equal(a.count, 15, 'subtract with param subtracts that param');

});

test('set method', function (t) {
    t.plan(1);

});

test('set method', function (t) {
    t.plan(1);

});

