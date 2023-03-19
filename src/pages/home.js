import category from "../components/menu"
import searchHeader, { statusBook } from "../components/navigation";
import footer from "../components/footer";
import { useEffect, useState } from "../../lib";
var headerHome = function () {
    return /*html*/`
    ${searchHeader}
    `
}
var headerHome = function () {
    return /*html*/`
    ${footer}
    `
}
var HomePage = function () {
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(dataFetch) {
            setData(dataFetch)
        });
    }, [])
    return /*html*/`
    ${searchHeader()};
    <div class="Container">
            <div class="body flex w"> 
                    <div class="left_colum w-3/12 " >
                    
                        ${category()}
                    </div>
                    <div class = "item_book w-9/12">
                            <p>Nhà Sách Tiki</p>
                        <div class="banner w-[700px] h-auto pt-5 pb-5">
                            <img src="./src/img/banner.jpg" >
                        </div>
                        <div>
                             ${statusBook()}
                        </div>
                        <div class="line h-[1px] w-full bg-[#F2F2F2] mt-5 mb-5"></div>
                        <div class=" flex justify-items-center p-4">
                        <div class="bg-[#EEEEEE] tikilogo w-24 rounded-2xl"><img src="./src/img/tikilogo.png"  class="m-auto"></div>
                        <div class=" bg-[#EEEEEE] ml-10 freeship w-24 rounded-2xl"><img src="./src/img/freeship.png" class="m-auto" ></div>
                    </div>
                    <div class="grid  grid-cols-4 gap-4 ">
                        ${data.map(function (book, index) {
                        return /*html*/`
                        <a href="products/${book.id}">
                        <div class="w-[200px]">
                                    <img src="${book.images[0].base_url}" class="w-[200px] h-auto" >
                                    <img src="./src/img/tikilogo.png" >
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
                        }).join('')}
                    </div>   
                </div>
          </div>      
         ${footer()}
    </div>
    
    `
}
export default HomePage
export {
    headerHome
}