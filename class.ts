class Fraction {
    // 省略記法を用いる場合はpublicの場合もconstructorの引数にアクセス修飾子をつける必要がある
    constructor(private _denominator: number, private _numerator: number) {}

    toString() {
        return `${this._numerator}/${this._denominator}`;
    }

    add(f: Fraction) {
        return new Fraction(
            this.numerator * f.denominator + f.numerator * this.denominator,
            this.denominator * f.denominator
        )
    }
    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }
}

const f1 = new Fraction(3, 4);
console.log(f1.denominator, f1.numerator);

const f2 = new Fraction(5, 2);
console.log(f2.denominator, f2.numerator);

console.log(f1.add(f2).toString());
