var firstname = 'Jane';

//observe this function is called at same time it is being written.
//observe variables inside it do not change after the call.

(function (lastname) {
	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
}('Doe'));

console.log(firstname);
