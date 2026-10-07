// @ts-check

export default {
  translation: {
    appName: "Task Manager",
    flash: {
      session: {
        create: {
          success: "You are logged in",
          error: "Wrong email or password",
        },
        delete: {
          success: "You are logged out",
        },
      },
      users: {
        create: {
          error: "Failed to register",
          success: "User registered successfully",
        },
      },
      tasks: {
        create: {
          success: "Task created successfully",
          error: "Failed to create a task",
        },
        edit: {
          success: "Task edited successfully",
          error: "Failed to edit a task",
        },
        search: {
          error: "Task not found",
        },
        delete: {
          success: "Task deleted",
        },
      },
      marks: {
        create: {
          success: "Mark created successfully",
          error: "Failed to create a mark",
        },
        edit: {
          success: "Mark edited successfully",
          error: "Failed to edit a mark",
        },
        delete: {
          success: "Mark deleted",
        },
      },
      statuses: {
        create: {
          success: "Status created successfully",
          error: "Failed to create a status",
        },
        edit: {
          success: "Status edited successfully",
          error: "Failed to edit a status",
        },
        delete: {
          success: "Status deleted",
        },
      },
      authError: "Access denied! Please login",
    },
    layouts: {
      application: {
        users: "Users",
        signIn: "Login",
        signUp: "Register",
        signOut: "Logout",
      },
      //Добавлено мной, потому что почему этого вообще тут нет?
      navigation: {
        users: "Users",
        statuses: "Statuses",
        marks: "Marks",
        tasks: "Tasks",
      },
    },
    views: {
      session: {
        new: {
          signIn: "Login",
          submit: "Login",
        },
      },
      users: {
        header: "Users",
        id: "ID",
        fullName: "Full name",
        email: "Email",
        createdAt: "Created at",
        actions: "Actions",
        actionsField: { edit: "Edit", delete: "Delete" },
        new: {
          submit: "Submit",
          signUp: "Register",
          firstName: "First name",
          secondName: "Second name",
          email: "Email",
          password: "Password",
        },
      },
      statuses: {
        header: "Statuses",
        newButton: "Create new status",
        id: "ID",
        title: "Title",
        createdAt: "Created at",
        actions: "Actions",
        actionsField: { edit: "Edit", delete: "Delete" },
        new: {
          header: "Status creation",
          submit: "Save",
        },
        edit: {
          header: "Edit status",
          submit: "Save",
        },
      },
      marks: {
        header: "Marks",
        newButton: "Create a mark",
        id: "ID",
        title: "Title",
        createdAt: "Created at",
        actions: "Actions",
        actionsField: { edit: "Edit", delete: "Delete" },
        new: {
          title: "Title",
          submit: "Save",
        },
        edit: {
          header: "Edit mark",
          submit: "Save",
        },
      },
      tasks: {
        header: "Tasks",
        newButton: "Create task",
        search: {
          checkbox: "Only my tasks",
          submit: "Show",
          status: "Status",
          author: "Author",
          executor: "Executor",
        },
        id: "ID",
        title: "Title",
        status: "Status",
        author: "Author",
        executor: "Executor",
        createdAt: "Created at",
        actions: "Actions",
        actionsField: { edit: "Edit", delete: "Delete" },
        new: {
          header: "Task creation",
          description: "Description",
        },
        edit: {
          header: "Edit task",
          submit: "Save",
        },
      },
      welcome: {
        index: {
          hello: "Hello from Hexlet!",
          description: "Online programming school",
          more: "Learn more",
        },
      },
    },
  },
};
