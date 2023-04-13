// **num_uuid version 1**
/* it does not accept any argument
 len => number of partitions in the uuid separated by "-"
 digit => number of digits in one partition of the uuid
 example => 92987584-1777-3154-0865-0082-50182599
*/
function num_uuid() {
	if (arguments.length > 0) {
		throw new Error('This function does not accept arguments.');
	}
	const id = [];
	for (let i = 0; i <= 5; i++) {
		let id_field;
		if (i === 0 || i === 5) {
			id_field = Math.random().toString().substring(2, 10);
			if (id_field.length < 8) {
				const temp = Math.random()
					.toString()
					.substring(2, 8 - id_field.length + 2);
				id_field.concat(temp);
			}
			id.push(id_field);
		} else {
			id_field = Math.random().toString().substring(2, 6);
			if (id_field.length < 4) {
				const temp = Math.random()
					.toString()
					.substring(2, 4 - id_field.length + 2);
				id_field.concat(temp);
			}
			id.push(id_field);
		}
	}

	const generated_id = id.join('-');

	return generated_id;
}
module.exports = num_uuid;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// **num_uuid version 2**
/* it accepts two arguments len and digits
 len => number of partitions in the uuid separated by "-"
 digit => number of digits in one partition of the uuid
 example num_uuidV2(8,5) => 22038-03483-33887-62740-21159-87793-33838-30612
*/
function num_uuidV2(len, digits) {
	if (typeof digits !== 'number' || typeof len !== 'number') {
		throw new TypeError('Both arguments must be of type numbers.');
	}
	if (digits <= 0 || len <= 0) {
		throw new RangeError('Arguments must be positive and greater than 0.');
	}
	const id = [];
	for (let i = 0; i < len; i++) {
		const id_field = Math.random()
			.toString()
			.substring(2, digits + 2);
		if (id_field.length < digits) {
			const temp = Math.random()
				.toString()
				.substring(2, digits - id_field.length + 2);
			id_field.concat(temp);
		}
		id.push(id_field);
	}

	const generated_id = id.join('-');

	return generated_id;
}
module.exports.num_uuidV2 = num_uuidV2;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

module.exports = num_uuid;
