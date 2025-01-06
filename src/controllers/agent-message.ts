import { FastifyReply } from "fastify"
import agentMessageValidator from "@/validators/agent-message"
import { logger } from "@/lib/logger"
//import notesService from "@/services/notes"
import { FastifyRequestSchemaTypes } from "@/src/models/types/schemaBuilderTypeExtractor"

export const postAgentMessageHandler = async (
	req: FastifyRequestSchemaTypes<
		typeof agentMessageValidator.postAgentMessage
	>,
	res: FastifyReply,
) => {
	try {
		console.log({
			message: "message",
			query: JSON.stringify(req.query),
			body: JSON.stringify(req.body),
			params: JSON.stringify(req.params),
			headers: JSON.stringify(req.headers),
			//raw: JSON.stringify(req.raw),
			id: JSON.stringify(req.id),
			ip: JSON.stringify(req.ip),
		})
	} catch (err) {
		logger.error("ERROR1", err)
	}

	try {
		await res.code(200).send([{ text: "Work in progress" }])
	} catch (err) {
		logger.error(err)
		await res.code(500).send({
			message: "Internal Server Error",
		})
	}
}
