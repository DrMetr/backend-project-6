import i18next from "i18next";

export const checkAuth = (app) => async (req, reply) => {
  if (!req.isAuthenticated()) {
    req.flash("error", i18next.t("flash.authError"));
    return reply.redirect(app.reverse("root"));
  }
};
