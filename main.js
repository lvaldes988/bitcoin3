const newPriceButt = document.querySelector('.newPrice')
const refresh = document.querySelector('.refresh')
const td = document.querySelector('td')
const getPrices = document.querySelector('getPrices')



    class Bitcoin {
        constructor(td, refresh, newPrice) {
            this.td = td
            this.getPrices()
            this.refresh = this.refresh.bind(this)
            this.newPrice = this.newPrice
        }
        setPrices(td, prices) {


        }
        getPrices(td) {
            $.ajax({
                url: "https://bitpay.com/api/rates",
                dataType: 'json',
                success: function (data) {
                    // console.log(data)
                    this.prices = (td, this.prices)
                    // console.log(this.prices)
                },
                error: function (error) {
                    console.log("eerrrrrrooooorrrrrr!!!!!!!", error)
                }
            })
        }

        refresh() {
            this.getPrices()
            price.addEvenlistener()
        }
    }
let price = new Bitcoin(td)


newPriceButt.addEventListener('click',function(getPrices){
    

})

refresh.addEventListener('click',function(){
    return price

})

