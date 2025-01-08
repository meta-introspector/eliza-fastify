import * as opentelemetry from "@opentelemetry/api"
import { wrapTracer } from "@opentelemetry/api/experimental"
const tracer = wrapTracer(opentelemetry.trace.getTracer("agent"))
import { FastifyReply } from "fastify"
import agentMessageValidator from "@/validators/agent-message"
import { logger } from "@/lib/logger"
import { FastifyRequestSchemaTypes } from "@/src/models/types/schemaBuilderTypeExtractor"
//import { SpanExporter Span } from '@opentelemetry/sdk-trace-base';
//import { start } from "@elizaos/agent"

export const postAgentMessageHandler = async (
	req: FastifyRequestSchemaTypes<
		typeof agentMessageValidator.postAgentMessage
	>,
	res: FastifyReply,
) => {
	console.log("Hello")
	//logger.error("request");

	return await tracer.startActiveSpan(
		"postAgentMessageHandler",
		async (span: any) => {
			span.setAttribute("body.text", req.body.text)
			span.setAttribute("body.userId", req.body.userId)
			span.setAttribute("body.userName", req.body.userName)
			span.setAttribute("query", JSON.stringify(req.query))
			span.setAttribute("query", JSON.stringify(req.query))
			span.setAttribute("body", JSON.stringify(req.body))
			span.setAttribute("params", JSON.stringify(req.params))
			span.setAttribute("headers", JSON.stringify(req.headers))
			span.setAttribute("reid", JSON.stringify(req.id))
			span.setAttribute("ipip", JSON.stringify(req.ip))

			try {
				try {
					// start()
					// fixme call agent
				} catch (err) {
					console.log(err)
					//logger.error(err);
				}
				await res.code(200).send([{ text: "Work in progress" }])
			} catch (err) {
				console.log(err)
				//logger.error(err);
				await res.code(500).send({
					message: "Internal Server Error",
				})
			}
			span.end()
			return
		},
	)
}
