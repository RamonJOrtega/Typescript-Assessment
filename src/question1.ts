//QUESTION 1. Why does this code not work? Provide a working version?
//----------------

// typescript
/**
 * Code for Question 1. 
 * 
 * Remove values less than 10 from an array
 * 
 * @param list 
 */
export function question1_removeSmallNumbers(list: (number | undefined)[]) {
    for (let i = 0; i < list.length; i++) {
        const n = list[i]
        if (n && n < 10) {
            console.log('removing', n)
            list.splice(i, 1)
        }
    }
}