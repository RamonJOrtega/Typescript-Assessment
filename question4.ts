// QUESTION 4: Debugging
// ----------------

// ```
class Bug1 {
    _rating: number | null = null

	rating() {
		return this.rating;
	}
}

export function question4() {
    const bug = new Bug1()
    return `Rating is ${bug.rating()}`
}
// ```

// The function `question4` above does not return the expected string: 'Rating is null'.
// Instead the string below is returned.

// ```
 "Rating·is·rating()·{return·this.rating;}"
//
//
//Debug the class `Bug1` and correct it so that it returns the expected string `Rating is null`.