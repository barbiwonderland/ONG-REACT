const Swal = require("sweetalert2");

function AlertMessage(
  type = "info",
  title = "",
  text = "",
  confirmButtonText = "",
  confirmButtonColor = ""
) {
  return Swal.fire({
    title: title,
    type: type,
    text: text,
    showCancelButton: true,
    // Button to cancel the event
    cancelButtonText: "Cancelar",
    confirmButtonColor: confirmButtonColor,
    // Can be replaced for "SAVE","OK","CANCEL"
    confirmButtonText: confirmButtonText,
  });
}
export default AlertMessage;