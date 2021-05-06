import { mutationType } from "nexus";

export const Mutations = mutationType({
  definition(t) {
    t.string("createOneUser", {
      async resolve(_root, _args, { mongoClient }) {
        const user = await mongoClient.User.create({ name: "Eunchurn Park" });
        return user.id;
      }
    })
  }
})