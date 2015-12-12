"use strict";

const l = console.log;
let term0 = `(App (Lam "x" (Add (Var "x") (Var "x")))
									 Add (Con 10) (Con 11))`;

function M() {
	
}
M.prototype.unitM = function unitM (a) {
	return new M(a);
}
M.prototype.bindM = function bindM (Ma) {
	return new M(Ma());
}

// compose two functions
// k :: a -> b and h :: b -> c
const k = a => a+1
const h = a => a+2

function(a) {
	let b = k(a);
}("a")

