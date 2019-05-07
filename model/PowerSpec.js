import { expect } from 'chai'
import Power from './Power';

describe('Power', () =>  {
    describe('powerActive should', () => {
        let power
        beforeEach(() => {
            power = new Power({
                air: 2,
                water: 1
            })
        })
        it('return false if 0 elements are given', () => {
           expect(power.powerActive({air: 0, water: 0})).to.be.false
        })

        it('return false if the wrong elements are given', () => {
            expect(power.powerActive({air: 0, water: 0, sun: 3, earth: 1})).to.be.false
        })

        it('return true if exactly the correct elements are given', () => {
            expect(power.powerActive({air: 2, water: 1})).to.be.true
        })

        it('return true if more elements are given', () => {
            expect(power.powerActive({air: 5, water: 4, sun: 2})).to.be.true
        })

        it('return true if exactly one element is matching and the rest is too much', () => {
            expect(power.powerActive({air: 2, water: 5, sun: 3, earth: 1})).to.be.true
        })

        it('return false in case of elements not in the elements stack for some reason', () => {
            expect(power.powerActive({water: 5, sun: 3, earth: 1})).to.be.false

        })
    })
});