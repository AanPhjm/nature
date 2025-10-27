function upDate(previewPic) {
  // Step 1: Confirm event is triggering
  console.log("Event triggered for:", previewPic);

  // Step 2: Check info about previewPic
  console.log("Image source:", previewPic.src);
  console.log("Alt text:", previewPic.alt);

  // Step 3: Change the text and background of the #image div
  let imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;
}

function undo() {
  // Step 4: Reset the imageDiv to original state
  let imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
}
