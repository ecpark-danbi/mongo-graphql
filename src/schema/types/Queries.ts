import { queryType } from "nexus";

export const Queries = queryType({
  definition(t) {
    t.string("token", {
      resolve(_root, _args, ctx) {

        return ctx.testing
      }
    })
  }
})