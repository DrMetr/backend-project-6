// @ts-check

export default {
  translation: {
    appName: "Менеджер задач",
    flash: {
      session: {
        create: {
          success: "Вы залогинены",
          error: "Неправильный емейл или пароль",
        },
        delete: {
          success: "Вы разлогинены",
        },
      },
      users: {
        create: {
          error: "Не удалось зарегистрировать",
          success: "Пользователь успешно зарегистрирован",
        },
      },
      authError: "Доступ запрещён! Пожалуйста, авторизируйтесь.",
    },
    layouts: {
      application: {
        users: "Пользователи",
        signIn: "Вход",
        signUp: "Регистрация",
        signOut: "Выход",
      },
      //Добавлено мной, потому что почему этого вообще тут нет?
      navigation: {
        users: "Пользователи",
        statuses: "Статусы",
        marks: "Метки",
        tasks: "Задачи",
      },
    },
    views: {
      session: {
        new: {
          signIn: "Вход",
          submit: "Войти",
        },
      },
      users: {
        header: "Пользователи",
        id: "ID",
        fullName: "Полное имя",
        email: "Email",
        createdAt: "Дата создания",
        actions: "Действия",
        actionsField: { edit: "Изменить", delete: "Удалить" },
        new: {
          submit: "Сохранить",
          signUp: "Регистрация",
          firstName: "Имя",
          secondName: "Фамилия",
          password: "Пароль",
          email: "Почта",
        },
      },
      statuses: {
        header: "Статусы",
        newButton: "Создать статус",
        id: "ID",
        title: "Наименование",
        createdAt: "Дата создания",
        actions: "Действия",
        actionsField: { edit: "Изменить", delete: "Удалить" },
        new: {
          header: "Создание статуса",
          submit: "Сохранить",
        },
        edit: {
          header: "Изменение статуса",
          submit: "Изменить",
        },
      },
      marks: {
        header: "Метки",
        newButton: "Создать метку",
        id: "ID",
        title: "Наименование",
        createdAt: "Дата создания",
        actions: "Действия",
        actionsField: { edit: "Изменить", delete: "Удалить" },
        new: {
          title: "Наименование",
          submit: "Сохранить",
        },
        edit: {
          header: "Изменение метки",
          submit: "Изменить",
        },
      },
      tasks: {
        header: "Задачи",
        newButton: "Создать задачу",
        search: {
          checkbox: "Только мои задачи",
          submit: "Показать",
        },
        id: "ID",
        title: "Наименование",
        status: "Статус",
        author: "Автор",
        executor: "Исполнитель",
        createdAt: "Дата создания",
        marks: "Метки",
        actions: "Действия",
        actionsField: { edit: "Изменить", delete: "Удалить" },
        new: {
          header: "Создание задачи",
          description: "Описание",
        },
        edit: {
          header: "Изменение задачи",
          submit: "Изменить",
        },
      },
      welcome: {
        index: {
          hello: "Привет от Хекслета!",
          description: "Практические курсы по программированию",
          more: "Узнать Больше",
        },
      },
    },
  },
};
