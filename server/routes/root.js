export default async (app) => {
  app.get("/", async (_request, reply) => {
    return reply.render("index");
  });
};
