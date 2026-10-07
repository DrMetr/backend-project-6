import i18next from "i18next";

export default (app) => {
  app
    .get("/tasks", { name: "tasks" }, async (_req, reply) => {
      const tasks = await app.objection.models.task.query();
      reply.render("tasks/index", { tasks });
      return reply;
    })
    .get("/tasks/new", { name: "newtask" }, (_req, reply) => {
      const task = new app.objection.models.task();
      reply.render("tasks/new", { task });
    })
    .post("/tasks", { name: "taskspost" }, async (req, reply) => {
      const task = new app.objection.models.task();
      task.$set(req.body.data);

      try {
        const validtask = await app.objection.models.task.fromJson(
          req.body.data,
        );
        await app.objection.models.task.query().insert(validtask);
        req.flash("info", i18next.t("flash.tasks.create.success"));
        return reply.redirect(app.reverse("root"));
      } catch ({ data }) {
        req.flash("error", i18next.t("flash.tasks.create.error"));
        return reply.render("tasks/new", { task, errors: data });
      }
    })
    .get("/tasks/:id", { name: "task" }, async (req, reply) => {
      const { id } = req.params;
      const task = await app.objection.models.task.query().findById(id);

      if (!task) {
        return reply.code(404).send(i18next.t("flash.tasks.search.error"));
      }

      return reply.render("tasks/show", { task });
    })
    .get("/tasks/:id/edit", { name: "updateTask" }, async (req, reply) => {
      const { id } = req.params;
      const task = await app.objection.models.task.query().findById(id);
      if (!task) {
        return reply.code(404).send(i18next.t("flash.tasks.search.error"));
      }
      return reply.render("tasks/edit", { task });
    })
    .patch("/tasks/:id", { name: "taskpatch" }, async (req, reply) => {
      const { id } = req.params;
      const task = await app.objection.models.task.query().findById(id);
      if (!task) {
        return reply.code(404).send(i18next.t("flash.tasks.search.error"));
      }

      try {
        const validTask = await app.objection.models.task.fromJson(
          req.body.data,
        );
        await task.$query().patch(validTask);
        req.flash("info", i18next.t("flash.tasks.edit.success"));
        return reply.redirect(app.reverse("root"));
      } catch ({ data }) {
        task.$set(req.body.data);
        req.flash("error", i18next.t("flash.tasks.edit.error"));
        return reply.render("tasks/edit", { task, errors: data });
      }
    });
};
