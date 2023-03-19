
const searchHeader = function () {
    return /*html*/ `
    <div class="background w-full bg-[#1da1f2] h-90">
        <div class="all_header flex justify-between items-center ">
            <div class = "logo pt-3">
                <a href="/"><img src="../src/img/Group 1.png" class="leading-[90px]"><a>
            </div>
            <div class="" >
                <form action="" class="search" method="post">
                    <input type="text" class="searchTerm w-[600px] border-solid " placeholder="Bạn muốn tìm gì?">
                    <button type="submit" class="searchButton w-20 bg-[#0D5CB6] "> 
                    <i class=" fa fa-search text-sm text-white">Tìm Kiếm</i>
                    </button>
                </form>
            </div>
            <div class="login flex items-center justify-between pr">
                <div><i class=" fa fa-user text-4xl text-white pr-5"></i></div>
                <div class="block">
                    <div class="login_and_create text-white">
                        <a href="">Đăng Nhập</a>/
                        <a href="">Đăng Ký</a>
                    </div>
                    <a href="" class="text-white">Tài Khoản</a>
                </div>
            </div>
            <div class="Cart flex items-center justify-between">
            <div><i class=" fa fa-shopping-cart text-4xl text-white pr-5"></i></div>
                <h4 class="text-white">Giỏ Hàng</h4>
            </div>
        </div>
    </div>
    
    `
}

const  statusBook = function() {
    return /*html*/`
    <div class="statusBook">
        <ul class ="flex" >
            <li><a>Phổ Biến</a></li>
            <li><a>Bán Chạy</a></li>
            <li><a>Hàng Mới</a></li>
            <li><a>Giá Thấp</a></li>
            <li><a>Giá Cao</a></li>
        </ul>
    </div>
    `
}
export default searchHeader
export {
    statusBook
}