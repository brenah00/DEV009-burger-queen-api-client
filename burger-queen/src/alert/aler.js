import Swal from "sweetalert2"

export function showAlertError(text) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
}

export function questionDelete() {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#28a745",
    cancelButtonColor: '#d33',
    confirmButtonText: "Yes, delete it!"
  })
}

export function completed(text) {
  Swal.fire({
    title: "process successfully",
    text: text,
    icon: "success",
    showConfirmButton: false,
    timer: 1500
  });
}
export function questionClose() {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this, any changes made will be lost!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#28a745",
    cancelButtonColor: '#d33',
    confirmButtonText: "Yes, close it!"
  })
}

export function warning(text) {
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: text,
  });
}