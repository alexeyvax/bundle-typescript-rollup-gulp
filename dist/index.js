(function () {
    'use strict';

    var Person = (function () {
        function Person(person) {
            this.person = person;
            this.toUpper(this.person);
        }
        Person.prototype.toUpper = function (person) {
            var changedName = person.toUpperCase();
            console.log(changedName);
            return changedName;
        };
        return Person;
    }());

    function main() {
        var first = 'Aleksey';
        new Person(first);
    }

    function main$1() {
        var second = 'Andrey';
        new Person(second);
    }

    main();
    main$1();

}());
//# sourceMappingURL=index.js.map
