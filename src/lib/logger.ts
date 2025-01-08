import winston from "winston"

const colorizer = winston.format.colorize()

const logLevel = "debug"
let seen = ["debug", "error", "info"]
function clean(lv) {
	if (!seen[lv]) {
		return "info"
	}
	return lv
}
export const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.simple(),
		winston.format.printf(
			(msg) => `${msg.timestamp} - ${msg.level}: ${msg.message}`,
		),
	),
	level: logLevel,
	transports: [new winston.transports.Console()],
})
