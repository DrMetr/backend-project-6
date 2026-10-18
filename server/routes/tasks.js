import i18next from "i18next";
import { checkAuth } from "../helpers/checkAuth.js";

export default (app) => {
  app
    .get(
      "/tasks",
      { name: "tasks", preHandler: checkAuth(app) },
      async (_req, reply) => {
        const tasks = await app.objection.models.task.query();
        reply.render("tasks/index", { tasks });
        return reply;
      },
    )
    .get(
      "/tasks/new",
      { name: "newtask", preHandler: checkAuth(app) },
      (_req, reply) => {
        const task = new app.objection.models.task();
        reply.render("tasks/new", { task });
      },
    )
    .get(
      "/tasks/:id",
      { name: "task", preHandler: checkAuth(app) },
      async (req, reply) => {
        const { id } = req.params;
        const task = await app.objection.models.task.query().findById(id);

        if (!task) {
          return reply.code(404).send(i18next.t("flash.tasks.search.error"));
        }

        return reply.render("tasks/show", { task });
      },
    )
    .get(
      "/tasks/:id/edit",
      { name: "updateTask", preHandler: checkAuth(app) },
      async (req, reply) => {
        const { id } = req.params;
        const task = await app.objection.models.task.query().findById(id);
        if (!task) {
          return reply.code(404).send(i18next.t("flash.tasks.search.error"));
        }
        return reply.render("tasks/edit", { task });
      },
    )
    .post(
      "/tasks",
      { name: "taskspost", preHandler: checkAuth(app) },
      async (req, reply) => {
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
      },
    )

    .patch("/tasks/:id", { preHandler: checkAuth(app) }, async (req, reply) => {
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
    })
    .delete("/tasks/:id", { preHandler: checkAuth(app) });
};
