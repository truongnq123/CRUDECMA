
import searchHeader, { statusBook } from "../components/navigation";
import data from '../../db.json' assert {type: 'json'}
import footer from "../components/footer";
import { useEffect, useState } from "../../lib";


const ProductPage = function (id) {
  // const book = data.find(function (item) {
  //   return item.id == id
  // })
  const [book, setBook] = useState({})

  useEffect(function(){
    axios.get(`http://localhost:3000/books/${id}`)
    .then(function(dataAxios){
      setBook(dataAxios.data)
    })
  },[])
  let categoryId = book.categories.id
  console.log(categoryId)
  return /*html*/`
    ${searchHeader()}
    
    <div class=" Container">
      <div class="mb-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mt-5 ">
        <!-- ảnh chính -->
        <div class=" mr-7 ml-4 mb-5 ">
          <img class="w-full object-cover lg:max-w-[444px]" src="${book.images[0].base_url}" alt="">
          <div class="hidden lg:grid lg:grid-cols-5 lg:gap-2 lg:mt-4">
              ${book.images.map(function(image){
                  return `<img src="${image.base_url}" alt="">`
              }).join('')}
          </div>
        </div>
        <!-- Tên tác Giả -->
        <div class="  md:border-l-2 md:border-gray-200 p-3">
          <div class="hidden md:flex items-center gap-x-1">
            <span class="text-[13px] md:text-base">Tác Giả : </span>
            <p class="text-blue-500 text-[13px] md:text-base">${book.authors ? book.authors[0].name : "Đang Cập nhập"}
            </p>
          </div>
          <!--  Tên Sách-->
          <p class="mb-6 mt-4 md:mb-4 md:mt-3 text-[16px] md:text-[23px]"> ${book.name ? book.name : "Đang Cập nhập"}
          </p>
          <!-- Đánh Giá  -->
          <div class="flex gap-x-3">
            <button class="flex items-center  ">
            <div class="rateGuest te">
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
              <p class=" ml-2 pr-2">Xem ${book.quantity_sold?. value ?? "0"} đánh giá</p>|
              <p class="pl-2">${book.quantity_sold ? book.quantity_sold.text : "chưa bán"}</p>
          </div>

          <div class="md:bg-gray-200 pt-4 pb-2 px-2 mb-4 rounded-lg">
            <div class=" flex items-end gap-x-2">
              <!-- Giá đã giảm -->
            </div>
          </div>
          <!-- Giảm Giá -->
          <hr>
          <div class="flex md:block items-center justify-between mb-5 mt-7">
            <P class=""> Số Lượng</P>
            
          </div>
        </div>      
    </div> 
    <p class="text-[20px] my-5 ">Sản Phẩm Tương Tự</p>
    <div class="flex">
    
    ${data.filter(function(book,index){
      return book.categories.id == categoryId
    }).map(function(book){
      return /**/`
      <a href="${book.id}" class="">
      <div class="w-[200px] ">
                  <img src="${book.images[0].base_url}" class="w-[200px] h-auto" >
                  <img src="../src/img/tikilogo.png" >
                  <p class="text-[#00AB56] text-xs">Giao hàng siêu tốc 24H</p>
                  <h5 class="w-[200px] h-auto" >${book.name}</h5>
                  <div class="flex">
                      <div class="rateGuest">
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                      </div>|
                      <div>
                          ${book.quantity_sold?.text??'Updating'}
                      </div>
                  </div>
              <div class="text-[#FF424E]">
               ${book.current_seller.price} đ
              </div>
          </div>
      </a>
      `
    })}
    </div>

    <p class="text-[20px] my-5"> Mô Tả Chi Tiết</p>
        <table class="mb-24">
    ${book.specifications[0].attributes.map(function (book, stt) {
        let bg
        if ((stt + 1) % 2 === 0) {
            bg = "bg-gray-100"
        }
        else (bg = "")
        return `
        <tr class="h-[40px] p-4 ml-4 ">
        <td class="w-[220px] bg-gray-300 ml-4"> ${book.name}</td>
        <td class="${bg} w-[700px]"> ${book.value}</td>
        </tr>
      `
    }).join(" ")}
    </table>            

   
    <div class="mt-4 px-8 lg:px-4 pb-4 bg-white">
            <h3 class="text-xl font-medium capitalize pt-2">Mô Tả Sản Phẩm</h3>
            <div class="text-[14px]">
                <p id="textShort" class="">${book.short_description}</p>
                <span id="dots"></span>
                <p class="w-[700px]"> ${book.description}</p></span> 
               
            </div>
        </div>
    
    <button
     onclick="xemthem()" id="xemthem" class="mb-24 mx-auto block active:text-red-400 text-blue-500 border border-blue-500 px-3 py-2 rounded-lg">
    Xem thêm nội dung</button>
    </div>

    <div class="Container">${footer()}</div>
  `
 
}

export default ProductPage
