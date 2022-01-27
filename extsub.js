const { exec } = require("child_process");
const fs = require("fs")

 // mkvextract tracks <your_mkv_video> <track_numer>:<subtitle_file.srt>

try {
	let mkvs = fs.readdirSync("./").filter(file => file.includes(".mkv"))
	mkvs.forEach(mkv => {
		exec(`mkvextract tracks '${mkv}' 3:'${mkv.split(".").shift()}.ass'`, (e, out, outerr) => {
			let result = e || e ? e : outerr ? outerr : out
			console.log(result)
		})
	})
} catch (e) {
	console.log(e)
}