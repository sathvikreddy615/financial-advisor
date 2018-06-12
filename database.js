const financialAdvisor = Object.create({},{
    company: {
        value: "UBS Financial Services, Inc.",
        writable: true,
        enumerable: true
    },
    speciality: {
        value: "Financial Advisor",
        writable: true,
        enumerable: true,
    },
    name: {
        value: "Collin Mooney",
        enumerable: true  
    },   
    portfolio: {
        value: [{
            name: "NSS", 
            shares: 50,
            valuation: 90000000000,
            purchased: false
        }],
    },
    worth: {
        value: function () {
                let networth = this.portfolio;
                let dollarAmt = 0;
                networth.forEach(element => {
                    dollarAmt += element.valuation;
                });
                return dollarAmt;
        }   
    },
    purchase: {
        value: function (ticker, quantity, price, purchased) {
                this.portfolio.push({
                    name: ticker,
                    shares: quantity,
                    valuation: price,
                    purchased: purchased
                 })
        }
    },
    sell: {
        value: function (ticker, quantity, price, purchased) {
                this.portfolio.push({
                    name: ticker,
                    shares: quantity,
                    valuation: price,
                    purchased: purchased
                })    
        }
    }
});

financialAdvisor.purchase("APPL", 30, 300, true);
financialAdvisor.sell("MSFT", 25, 250, false);
financialAdvisor.purchase("FB", 50, 500, true);