import { Type } from "@sinclair/typebox"

export const agentMessage = {
	//	querystring: Type.Object({
	//		page: Type.Number(),
	//		perPage: Type.Number({ maximum: 100 }),
	//	}),
}

// export const agentMessage = Type.Object({
//     query: Type.String(),
//     body: Type.Object({
//         text: Type.String(),
//         userId: Type.String(),
//         userName: Type.String()
//     }, {
//         required: ["text", "userId", "userName"],
//         additionalProperties: false
//     }),
//     params: Type.Object({
//         agentId: Type.String()
//     }, {
//         required: ["agentId"],
//         additionalProperties: false
//     }),
//     headers: Type.Object({
//         host: Type.String(),
//         connection: Type.String(),
//         'content-type': Type.String(),
//         accept: Type.String(),
//         'accept-language': Type.String(),
//         'sec-fetch-mode': Type.String(),
//         'user-agent': Type.String(),
//         'accept-encoding': Type.String(),
//         traceparent: Type.String(),
//         'content-length': Type.String()
//     }, {
//         required: [
//             "host",
//             "connection",
//             "content-type",
//             "accept",
//             "accept-language",
//             "sec-fetch-mode",
//             "user-agent",
//             "accept-encoding",
//             "traceparent",
//             "content-length"
//         ],
//         additionalProperties: false
//     }),
//     reid: Type.String(),
//     ipip: Type.String()
// }, {
//     required: ["query", "body", "params", "headers", "reid", "ipip"],
//     additionalProperties: false
// })

// export const postAgentMessage = Type.Object({
//     body: Type.Object({})
// })

// convert this json schema to typebox pls
// {
//   "type": "object",
//   "properties": {
//     "query": {
//       "type": "string"
//     },
//     "body": {
//       "type": "object",
//       "properties": {
//         "text": {
//           "type": "string"
//         },
//         "userId": {
//           "type": "string"
//         },
//         "userName": {
//           "type": "string"
//         }
//       },
//       "required": ["text", "userId", "userName"],
//       "additionalProperties": false
//     },
//     "params": {
//       "type": "object",
//       "properties": {
//         "agentId": {
//           "type": "string"
//         }
//       },
//       "required": ["agentId"],
//       "additionalProperties": false
//     },
//     "headers": {
//       "type": "object",
//       "properties": {
//         "host": {
//           "type": "string"
//         },
//         "connection": {
//           "type": "string"
//         },
//         "content-type": {
//           "type": "string"
//         },
//         "accept": {
//           "type": "string"
//         },
//         "accept-language": {
//           "type": "string"
//         },
//         "sec-fetch-mode": {
//           "type": "string"
//         },
//         "user-agent": {
//           "type": "string"
//         },
//         "accept-encoding": {
//           "type": "string"
//         },
//         "traceparent": {
//           "type": "string"
//         },
//         "content-length": {
//           "type": "string"
//         }
//       },
//       "required": [
//         "host",
//         "connection",
//         "content-type",
//         "accept",
//         "accept-language",
//         "sec-fetch-mode",
//         "user-agent",
//         "accept-encoding",
//         "traceparent",
//         "content-length"
//       ],
//       "additionalProperties": false
//     },
//     "reid": {
//       "type": "string"
//     },
//     "ipip": {
//       "type": "string"
//     }
//   },
//   "required": ["query", "body", "params", "headers", "reid", "ipip"],
//   "additionalProperties": false
// }

export const postAgentMessage = {
	body: Type.Object({
		text: Type.String(),
		userId: Type.String(),
		userName: Type.String(),
	}),
}

export default {
	postAgentMessage,
	agentMessage,
}
