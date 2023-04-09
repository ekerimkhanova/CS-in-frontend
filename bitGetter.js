/**
 * @param {Uint8Array[]} array
 * @return {Object}
 */

function createBitGetter(array) {
    return {
        get(indexEl, bitOrder){
            return (array[indexEl] >> bitOrder) & 1
        }
    }
}

const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

console.log(bitGetter.get(0, 1)); // 1
console.log(bitGetter.get(1, 1)); // 0


/**
 * @param {Uint8Array[]} array
 * @return {Object}
 */

function createBitAccessor(array) {
    return {
        get(indexEl, bitOrder){
            return (array[indexEl] >> bitOrder) & 1
        },
        set(indexEl, bitOrder, bitValueToChange){
            const res = bitValueToChange == 0 ? array[indexEl] &~(1 << bitOrder) : array[indexEl] | (1 << index);
            array[indexEl] = res;
        }
    }
}

const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

console.log(bitAccessor.set(0, 1, 0)); //
console.log(bitAccessor.get(0, 1));    // 0

