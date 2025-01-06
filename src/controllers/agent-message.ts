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
		//		const note = await notesService.createNote({ ...req.body }) // needs looking at

		await res.code(200).send({
			message: "Note Created",
			note,
		})
	} catch (err) {
		logger.error(err)
		await res.code(500).send({
			message: "Internal Server Error",
		})
	}
}
