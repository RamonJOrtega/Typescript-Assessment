// QUESTION 5: Spread Operator
// ----------------

// Given the function below:

// ```
export function question5() {
    let orig = {
        prop1: 'p1',
        prop2: 'p2',
    }

    let modified = orig
    orig.prop1 = 'm1'

    if (orig === modified) {
        console.log('orig and modified are the same')
    }
    if (modified.prop1 === 'm1') {
        console.log('orig.prop1 is m1')
    }

    modified = { 
        ...orig,
        prop2: 'm2'
    }

    if (orig === modified) {
        console.log('orig and modified are still the same')
    }
    if (modified.prop1 === 'm1') {
        console.log('orig.prop1 is m1')
    }
    if (modified.prop2 === 'm2') {
        console.log('orig.prop1 is m2')
    }
}

// What is the output?
// There are two nearly identical blocks of code:

// // ```ts
    if (orig === modified) {
        console.log('orig and modified are the same')
     }
// ```

// and

// ```ts
     if (orig === modified) {
        console.log('orig and modified are still the same')
    }
// ```

// If one or either of the `console.log` lines was skipped, explain why. 

