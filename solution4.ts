// SOLUTION 4: Debugging
// ----------------

// ```
class Bug1 {
    _rating: number | null = null

	rating() {
		return this._rating;
	}
}

export function question4() {
    const bug = new Bug1()
    return `Rating is ${bug.rating()}`
}
