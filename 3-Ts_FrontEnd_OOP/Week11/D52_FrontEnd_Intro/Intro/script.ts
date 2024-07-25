const myButton: HTMLButtonElement | null = document.getElementById(
  "myButton"
) as HTMLButtonElement;

if (myButton) {
  myButton.addEventListener("click", function (event: MouseEvent) {
    event.preventDefault;
    console.log("Button clicked!");
  });
}
