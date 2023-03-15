import fs from 'fs'

fs.readFile('main/prisma/schema.prisma', 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(data)
})