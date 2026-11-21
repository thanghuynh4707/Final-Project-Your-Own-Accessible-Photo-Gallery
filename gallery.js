/* Cập nhật ảnh nền và văn bản khi di chuột hoặc focus bằng bàn phím */
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Khôi phục trạng thái mặc định khi rời chuột hoặc mất focus */
function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over or tab through an image below to display here.";
}

/* Tự động thêm thuộc tính tabindex cho toàn bộ ảnh khi trang tải xong */
function addTabFocus() {
    console.log("Page loaded: addTabFocus event triggered successfully!");
    
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
