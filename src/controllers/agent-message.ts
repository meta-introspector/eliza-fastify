import * as opentelemetry from "@opentelemetry/api"
import { wrapTracer } from "@opentelemetry/api/experimental"
const tracer = wrapTracer(opentelemetry.trace.getTracer("agent"))

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
	return await tracer.startActiveSpan(
		"postAgentMessageHandler",
		async (span: Span) => {
			span.setAttribute("query", JSON.stringify(req.query))
			span.setAttribute("body", JSON.stringify(req.body))
			span.setAttribute("params", JSON.stringify(req.params))
			span.setAttribute("headers", JSON.stringify(req.headers))
			span.setAttribute("reid", JSON.stringify(req.id))
			span.setAttribute("ipip", JSON.stringify(req.ip))

			try {
				await res.code(200).send([{ text: "Work in progress" }])
			} catch (err) {
				logger.error(err)
				await res.code(500).send({
					message: "Internal Server Error",
				})
			}
			span.end()
		},
	)
}
