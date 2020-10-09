$(".goods a").each(function (index, value) {
    value.index = index;
}).click(function () {
    localStorage.removeItem("goodss");
    localStorage.setItem("goodss", this.index);
});