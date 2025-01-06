import { Type } from "@sinclair/typebox"

export const agentMessage = {
	//	querystring: Type.Object({
	//		page: Type.Number(),
	//		perPage: Type.Number({ maximum: 100 }),
	//	}),
}

export const postAgentMessage = {
	body: Type.Object({
		//		note: Type.String({ maxLength: 300 }),
		//		owner: Type.String({ maxLength: 100 }),
	}),
}

export default {
	postAgentMessage,
	agentMessage,
}
