import { queryType } from "nexus";

export const Queries = queryType({
  definition(t) {
    t.string("token", {
      resolve() {
        return "hello"
      }
    })
  }
})