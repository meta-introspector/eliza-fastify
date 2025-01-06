import { postAgentMessageHandler } from "@/controllers/agent-message"
import { agentMessage, postAgentMessage } from "@/validators/agent-message"
import { FastifyInstance } from "fastify"

export default (fastify: FastifyInstance) => {
	//  console.log("Hello!")
	fastify.route({
		handler: postAgentMessageHandler,
		method: "POST",
		schema: agentMessage,
		//	  url: "/notes",
		//url: "/:agentId/message"
		//		url: "/TINE-IntrospectorIsNotEliza/message",
		url: "/:agentId/message",
	})
}
