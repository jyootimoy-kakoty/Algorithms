const arrayChange = ( arr ) => {
    let count = 0

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] >= arr[ i + 1 ] ) {
            const diff = ( arr[ i ] + 1 ) - arr[ i + 1 ]
            arr[ i + 1 ] = arr[ i ] + 1
            count = count + diff
        }
    }
    return count
}

console.log( arrayChange( [ 1, 1, 1 ] ) ) //Output : 3
console.log( arrayChange( [ 2, 2, 1 ] ) ) //Output : 4