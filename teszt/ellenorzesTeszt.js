QUnit.module("Tic-Tac-Toe row()", function () {
    //row
    QUnit.test("row függvény-e", function (assert) {
        assert.ok(typeof row === "function");
    });
    QUnit.test("row() csak kezdő értékek.", function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test("row() Felső sorban O nyer.", function (assert) {
        tomb = ["O", "O", "O", "X", "X", "-", "-", "-", "-"];
        assert.equal(row(), true);
    });
    QUnit.test("row() Felső sorban X nyer.", function (assert) {
        tomb = ["X", "X", "X", "O", "O", "-", "O", "-", "-"];
        assert.equal(row(), true);
    });
    QUnit.test("row() Középső sorban X nyer.", function (assert) {
        tomb = ["X", "O", "O", "X", "X", "X", "O", "-", "O"];
        assert.equal(row(), true);
    });
    QUnit.test("row() Középső sorban O nyer.", function (assert) {
        tomb = ["-", "-", "-", "O", "O", "O", "X", "-", "X"];
        assert.equal(row(), true);
    });
    QUnit.test("row() Alsó sorban X nyer.", function (assert) {
        tomb = ["O", "O", "-", "O", "-", "-", "X", "X", "X"];
        assert.equal(row(), true);
    });
    QUnit.test("row() Alsó sorban O nyer.", function (assert) {
        tomb = ["-", "-", "-", "X", "X", "-", "O", "O", "O"];
        assert.equal(row(), true);
    });
}); //row vége
QUnit.module("Tic-Tac-Toe column()", function () {
    //column
    QUnit.test("column függvény-e", function (assert) {
        assert.ok(typeof column === "function");
    });
    QUnit.test("column() csak kezdő értékek.", function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(column(), false);
    });
    QUnit.test("column() Első oszlopban O nyer.", function (assert) {
        tomb = ["O", "X", "-", "O", "X", "-", "O", "-", "-"];
        assert.equal(column(), true);
    });
    QUnit.test("column() Első oszlopban X nyer.", function (assert) {
        tomb = ["X", "O", "O", "X", "O", "-", "X", "-", "-"];
        assert.equal(column(), true);
    });
    QUnit.test("column() Második oszlopban O nyer.", function (assert) {
        tomb = ["X", "O", "-", "X", "O", "-", "-", "O", "-"];
        assert.equal(column(), true);
    });
    QUnit.test("column() Második oszlopban X nyer.", function (assert) {
        tomb = ["O", "X", "O", "O", "X", "-", "-", "X", "-"];
        assert.equal(column(), true);
    });
    QUnit.test("column() Harmadik oszlopban O nyer.", function (assert) {
        tomb = ["-", "X", "O", "", "X", "O", "-", "-", "O"];
        assert.equal(column(), true);
    });
    QUnit.test("column() Harmadik oszlopban X nyer.", function (assert) {
        tomb = ["O", "O", "X", "-", "O", "X", "-", "-", "X"];
        assert.equal(column(), true);
    });
});
QUnit.module("Tic-Tac-Toe jobbrolBalra()", function () {
    //jobrolBalra
    QUnit.test("jobbrolBalra függvény-e", function (assert) {
        assert.ok(typeof jobbrolBalra === "function");
    });
    QUnit.test("jobbrolBalra() csak kezdő értékek.", function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(jobbrolBalra(), false);
    });
    QUnit.test("jobbrolBalra() Senki nem nyer.", function (assert) {
        tomb = ["-", "-", "O", "-", "X", "-", "O", "-", "-"];
        assert.equal(jobbrolBalra(), false);
    });
    QUnit.test("jobbrolBalra() O nyer.", function (assert) {
        tomb = ["-", "X", "O", "X", "O", "-", "O", "-", "-"];
        assert.equal(jobbrolBalra(), true);
    });
    QUnit.test("jobbrolBalra() X nyer.", function (assert) {
        tomb = ["O", "O", "X", "-", "X", "O", "X", "-", "-"];
        assert.equal(jobbrolBalra(), true);
    });
});
QUnit.module('Tic-Tac-Toe balrolJobra()', function() {
    //balrolJobra
    QUnit.test('balrolJobra függvény-e', function(assert) {
        assert.ok(typeof balrolJobra === "function");
      });
    QUnit.test('balrolJobbra() csak kezdő értékek.', function(assert) {
        tomb = ["-","-","-", "-","-","-", "-","-","-"];
        assert.equal(balrolJobra(), false);
    });
    QUnit.test('balrolJobbra() senki nem nyer.', function(assert) {
        tomb = ["O","-","-", "-","X","-", "-","-","O"];
        assert.equal(balrolJobra(), false);
    });
    QUnit.test('balrolJobbra() O nyer.', function(assert) {
        tomb = ["O","X","X", "-","O","-", "-","-","O"];
        assert.equal(balrolJobra(), true);
    });
    QUnit.test('balrolJobbra() X nyer.', function(assert) {
        tomb = ["X","O","O", "-","X","-", "-","O","X"];
        assert.equal(balrolJobra(), true);
    });
    //BalrolJobra hibás string értéket kapok vissza 215sorban
});

QUnit.module("Tic-Tac-Toe cross()", function () {
    //cross
    QUnit.test("cross függvény-e", function (assert) {
        assert.ok(typeof cross === "function");
    });
    QUnit.test("cross() csak kezdő értékek..", function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(cross(), false);
    });
    QUnit.test("cross() jobbrol balra O nyer.", function (assert) {
        tomb = ["-", "X", "O", "X", "O", "-", "O", "-", "-"];
        assert.equal(cross(), true);
    });
    QUnit.test("cross() jobbrol balra X nyer.", function (assert) {
        tomb = ["-", "O", "X", "-", "X", "O", "X", "O", "-"];
        assert.equal(cross(), true);
    });
    QUnit.test("cross() balrol jobra O nyer.", function (assert) {
        tomb = ["X", "O", "O", "O", "X", "-", "-", "-", "X"];
        assert.equal(cross(), true);
    });
    QUnit.test("cross() balrol jobra X nyer.", function (assert) {
        tomb = ["X", "O", "O", "O", "X", "-", "-", "-", "X"];
        assert.equal(cross(), true);
    });
});
QUnit.module("Tic-Tac-Toe ellenorzes()", function () {
    //ellenorzes
    QUnit.test("ellenorzes függvény-e", function (assert) {
        assert.ok(typeof ellenorzes === "function");
    });
    QUnit.test("ellenorzes() csak kezdő értékek..", function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(ellenorzes(), false);
    });
    QUnit.test("ellenorzes() O nyer sorban", function (assert) {
        tomb = ["O", "O", "O", "X", "X", "-", "-", "-", "-"];
        assert.equal(ellenorzes(), true);
    });
    QUnit.test("ellenorzes() O nyer oszlopban", function (assert) {
        tomb = ["O", "X", "X", "O", "-", "-", "O", "-", "-"];
        assert.equal(ellenorzes(), true);
    });
    QUnit.test("ellenorzes() O nyer jobbrol balra", function (assert) {
        tomb = ["-", "X", "O", "X", "O", "-", "O", "-", "-"];
        assert.equal(ellenorzes(), true);
    });
    QUnit.test("ellenorzes() O nyer balrol jobbra", function (assert) {
        let tomb = ["O", "X", "-", "-", "O", "X", "-", "-", "O"];
        assert.equal(ellenorzes(), true);
    });
});
