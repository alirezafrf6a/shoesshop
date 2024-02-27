// این تابع با کلیک بر روی هر تصویر کوچک، تصویر اصلی را تغییر می‌دهد
function changeImage(thumbnail) {
    // گرفتن آدرس تصویر کوچک
    var src = thumbnail.src;
    // گرفتن عنصر تصویر اصلی
    var mainImage = document.getElementById("main-image");
    // تغییر آدرس تصویر اصلی به آدرس تصویر کوچک
    mainImage.src = src;
}
