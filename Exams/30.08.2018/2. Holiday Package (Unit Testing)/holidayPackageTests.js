const assert = require("chai").assert;
const expect = require("chai").expect;
const HolidayPackage = require("./holidayPackage");

describe("Holiday package tests", () => {
    let holidayPackage;

    beforeEach(function () {
        holidayPackage = new HolidayPackage('Italy', 'Summer');
    });

    describe("insuranceIncluded()  tests", () => {
        it('should must have default value - false ', function () {
            assert.equal(holidayPackage.insuranceIncluded, false);
        });
    });

    describe("showVacationers() tests", () => {
        it('should return message', function () {
            assert.equal(holidayPackage.showVacationers(), "No vacationers are added yet");
        });
    });

    describe("addVacationer() tests", () => {
        it('should throw an Error message', function () {
            expect(() => holidayPackage.addVacationer(5)).to.throw(Error);
        });

        it('should throw an Error message', function () {
            expect(() => holidayPackage.addVacationer(" ")).to.throw(Error);
        });

        it('should throw an Error message', function () {
            expect(() => holidayPackage.addVacationer([])).to.throw(Error);
        });

        it('should throw an Error message', function () {
            expect(() => holidayPackage.addVacationer("Mimi igrae golf.")).to.throw(Error);
        });
    });

    describe("generateHolidayPackage() tests", () => {
        it('should throw an Error messsage', function () {
            expect(() => holidayPackage.generateHolidayPackage("Mimi igrae golf.")).to.throw(Error);
        });

        it('should return correct output', function () {
            holidayPackage.addVacationer("Ivan Ivanov");
            holidayPackage.addVacationer("Pesho Peshev");
            holidayPackage.addVacationer("Mimi Mimeva");

            assert.equal(holidayPackage.generateHolidayPackage(), "Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshev\nMimi Mimeva\nPrice: 1400");
        });

        it('should return correct output', function () {
            holidayPackage.addVacationer("Ivan Ivanov");
            holidayPackage.addVacationer("Pesho Peshev");
            holidayPackage.addVacationer("Mimi Mimeva");
            holidayPackage.insuranceIncluded = true;

            assert.equal(holidayPackage.generateHolidayPackage(), "Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshev\nMimi Mimeva\nPrice: 1500");
        });
    });
});