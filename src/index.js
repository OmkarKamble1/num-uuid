function num_uuid() {
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

module.exports = { num_uuid };
module.exports = num_uuid;
