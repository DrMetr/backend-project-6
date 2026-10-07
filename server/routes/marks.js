import i18next from "i18next";

export default (app) => {
  app
    .get("/marks", { name: "marks" }, async (_req, reply) => {
      const marks = await app.objection.models.mark.query();
      reply.render("marks/index", { marks });
      return reply;
    })
    .get("/marks/new", { name: "newmark" }, (_req, reply) => {
      const mark = new app.objection.models.mark();
      reply.render("marks/new", { mark });
    })
    .post("/marks", { name: "markspost" }, async (req, reply) => {
      const mark = new app.objection.models.mark();
      mark.$set(req.body.data);

      try {
        const validmark = await app.objection.models.mark.fromJson(
          req.body.data,
        );
        await app.objection.models.mark.query().insert(validmark);
        req.flash("info", i18next.t("flash.marks.create.success"));
        return reply.redirect(app.reverse("root"));
      } catch ({ data }) {
        req.flash("error", i18next.t("flash.marks.create.error"));
        return reply.render("marks/new", { mark, errors: data });
      }
    })
    .get("/marks/:id", { name: "mark" }, async (req, reply) => {
      const { id } = req.params;
      const mark = await app.objection.models.mark.query().findById(id);

      if (!mark) {
        return reply.code(404).send(i18next.t("flash.marks.search.error"));
      }

      return reply.render("marks/show", { mark });
    })
    .get("/marks/:id/edit", { name: "updatemark" }, async (req, reply) => {
      const { id } = req.params;
      const mark = await app.objection.models.mark.query().findById(id);
      if (!mark) {
        return reply.code(404).send(i18next.t("flash.marks.search.error"));
      }
      return reply.render("marks/edit", { mark });
    })
    .patch("/marks/:id", { name: "markpatch" }, async (req, reply) => {
      const { id } = req.params;
      const mark = await app.objection.models.mark.query().findById(id);
      if (!mark) {
        return reply.code(404).send(i18next.t("flash.marks.search.error"));
      }

      try {
        const validmark = await app.objection.models.mark.fromJson(
          req.body.data,
        );
        await mark.$query().patch(validmark);
        req.flash("info", i18next.t("flash.marks.edit.success"));
        return reply.redirect(app.reverse("root"));
      } catch ({ data }) {
        mark.$set(req.body.data);
        req.flash("error", i18next.t("flash.marks.edit.error"));
        return reply.render("marks/edit", { mark, errors: data });
      }
    });
};
