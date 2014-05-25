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

    var foo = Notifier();
    foo.set(35);
    t.equal(foo.count, 35, 'set method adds the param');
});

test('default method', function (t) {
    t.plan(1);

    var foo = Notifier(100);
    foo.default();

    t.equal(foo.count, foo.initial, 'set method adds the param');
});

test('calling with wrong arguments', function (t) {
    var bar = Notifier();


    t.doesNotThrow(function(){
      bar.add('a string');
    }, '', 'add method does not throw error when given a string');

    t.doesNotThrow(function(){
      bar.subtract('a string');
    }, '', 'subtract method does not throw error when given a string');

    t.doesNotThrow(function(){
      bar.set('a string');
    }, '', 'set method does not throw error when given a string');

    t.doesNotThrow(function(){
      bar.add([]);
    }, '', 'add method does not throw error when given an array');

    t.doesNotThrow(function(){
      bar.subtract([]);
    }, '', 'subtract method does not throw error when given an array');

    t.doesNotThrow(function(){
      bar.set([]);
    }, '', 'set method does not throw error when given an array');


    t.end();
});

test('methods can be chained', function (t) {
    t.plan(1);

    var foo = Notifier();
    foo.set(5).add().add().add().subtract();

    t.equal(foo.count, 7);
});


test('title can have separators it the content', function (t) {
    t.plan(1);

    var foo = Notifier();
    document.title = 'some foobar t(3)xt';
    foo.add();

    t.equal(document.title, '(1) some foobar t(3)xt');
});
