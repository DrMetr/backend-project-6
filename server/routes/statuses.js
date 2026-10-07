import i18next from "i18next";

export default (app) => {
  app
    .get("/statuses", { name: "statuses" }, async (_req, reply) => {
      const statuses = await app.objection.models.status.query();
      reply.render("statuses/index", { statuses });
      return reply;
    })
    .get("/statuses/new", { name: "newstatus" }, (_req, reply) => {
      const status = new app.objection.models.status();
      reply.render("statuses/new", { status });
    })
    .post("/statuses", { name: "statusespost" }, async (req, reply) => {
      const status = new app.objection.models.status();
      status.$set(req.body.data);

      try {
        const validstatus = await app.objection.models.status.fromJson(
          req.body.data,
        );
        await app.objection.models.status.query().insert(validstatus);
        req.flash("info", i18next.t("flash.statuses.create.success"));
        return reply.redirect(app.reverse("root"));
      } catch ({ data }) {
        req.flash("error", i18next.t("flash.statuses.create.error"));
        return reply.render("statuses/new", { status, errors: data });
      }
    })
    .get("/statuses/:id", { name: "status" }, async (req, reply) => {
      const { id } = req.params;
      const status = await app.objection.models.status.query().findById(id);

      if (!status) {
        return reply.code(404).send(i18next.t("flash.statuses.search.error"));
      }

      return reply.render("statuses/show", { status });
    })
    .get("/statuses/:id/edit", { name: "updatestatus" }, async (req, reply) => {
      const { id } = req.params;
      const status = await app.objection.models.status.query().findById(id);
      if (!status) {
        return reply.code(404).send(i18next.t("flash.statuses.search.error"));
      }
      return reply.render("statuses/edit", { status });
    })
    .patch("/statuses/:id", { name: "statuspatch" }, async (req, reply) => {
      const { id } = req.params;
      const status = await app.objection.models.status.query().findById(id);
      if (!status) {
        return reply.code(404).send(i18next.t("flash.statuses.search.error"));
      }

      try {
        const validstatus = await app.objection.models.status.fromJson(
          req.body.data,
        );
        await status.$query().patch(validstatus);
        req.flash("info", i18next.t("flash.statuses.edit.success"));
        return reply.redirect(app.reverse("root"));
      } catch ({ data }) {
        status.$set(req.body.data);
        req.flash("error", i18next.t("flash.statuses.edit.error"));
        return reply.render("statuses/edit", { status, errors: data });
      }
    });
};
