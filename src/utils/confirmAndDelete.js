import AlertMessage from "../components/AlertMessage";

const contentConfiguration = {
  news: {
    titleText: "una novedad",
    onConfirmation: (id) => {
      console.log(`Novedad eliminada con id ${id}`);
      // deleteNews(id) -> this method should make a DELETE request to de API
    },
  },
  categoty: {
    titleText: "una categoría",
    onConfirmation: (id) => {
      console.log(`Categoría eliminada con id ${id}`);
      // deleteCategory(id) -> this method should make a DELETE request to de API
    },
  },
  activity: {
    titleText: "una actividad",
    onConfirmation: (id) => {
      console.log(`actividad eliminada con id ${id}`);
      // deleteActivity(id) -> this method should make a DELETE request to de API
    }
  },
  testimonials: {
    titleText: 'una testimonio',
    onConfirmation: (id) => {
      console.log(`testimonio eliminado con id ${id}`);
      // deleteTestimonials(id) -> this method should make a DELETE request to de API
    },
  },
  member: {
    titleText: "un miembro",
    onConfirmation: (id) => {
      console.log(`miembro eliminado con id ${id}`);
      // deleteMember(id) -> this method should make a DELETE request to de API
    },
  },
  slides: {
    titleText: "una Slide",
    onConfirmation: (id) => {
      console.log(`actividad eliminada con id ${id}`);
      // deleteActivity(id) -> this method should makeusuario DELETo request to de API
    },
  },
  user: {
    titleText: "un usuario",
    onConfirmation: (id) => {
      console.log(`usuario eliminado con id ${id}`);
      // deleteUser(id) -> this method should make a DELETE request to de API}
    },
  },
};

function confirmAndDelete(id, contentType) {
  const { titleText, onConfirmation } = contentConfiguration[contentType];

  AlertMessage(
    "warning",
    `Está a punto de eliminar ${titleText}`,
    "Una vez que lo haga no podrá deshacerlo",
    "Eliminar",
    "red"
  ).then(({ value }) => {
    if (value) {
      onConfirmation(id);
    }
  });
}

export default confirmAndDelete;
