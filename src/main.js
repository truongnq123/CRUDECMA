import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './style/main.css'
import {router} from '../lib'

// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()

router.on('/', function() {
    console.log("home page");
    render(HomePage, app)
})

router.on('/products', function() {
    console.log("Product page");
    render(ProductPage, app)
})

router.resolve()
