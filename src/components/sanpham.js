import data from '../../db.json' assert {type: 'json'}
import footer from "../components/footer";

const ProductSame = function (id) {
    const book = data.filter(function (item) {
      return item.categories.id == this.categories.id 
    })
}
export default ProductSame;