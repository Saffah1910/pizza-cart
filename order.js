function Order() {
    return {
        smallpizzacount: 0,
        mediumpizzacount: 0,
        largepizzacount: 0,
        total: 0,
        buy: false,
        payment: 0,
        message: "",
        openpay: false,
        paymessage: false,
        opencheckout: true,
        // small: false,
        // medium: false,
        // large: false,




        smallplus() {
            if (this.buy == true) {

                this.smallpizzacount += 49.00;
                this.total += 49.00
            }

        },
        smallminus() {
            if (this.smallpizzacount > 0 && this.buy == true) {

                this.smallpizzacount -= 49.00;
                this.total -= 49.00
            }

        },
        mediumplus() {
            if (this.buy == true) {
                this.mediumpizzacount += 89.00;
                this.total += 89.00
            }
        },
        mediumminus() {
            if (this.mediumpizzacount > 0 && this.buy == true) {

                this.mediumpizzacount -= 89.00;
                this.total -= 89.00
            }
        },
        largeplus() {
            if (this.buy == true) {
                this.largepizzacount += 120.00;
                this.total += 120.00
            }

        },
        largeminus() {
            if (this.largepizzacount > 0 && this.buy == true) {

                this.largepizzacount -= 120.00;
                this.total -= 120.00
            }
        },
        enoughmoney() {
            if (this.total <= this.payment) {

                this.message = "Enjoy your pizza";
                this.paymessage = true;

                this.total = 0;
                this.smallpizzacount = 0;
                this.mediumpizzacount = 0;
                this.largepizzacount = 0;


            } else {
                this.paymessage = true;
                this.message = "Sorry - that is not enough money!";
                setTimeout(() => {
                    this.paymessage = false
                }, 3000);
            }
        },
        paybutton() {
            this.openpay = true;
            this.opencheckout = false;
        },
        buyPizza() {
            if (this.buy = true) {

                this.total += 49.00;
                this.smallpizzacount += 49.00;

            }
        },
        buyMediumPizza() {
            if (this.buy = true) {

                this.total  += 89.00;
                this.mediumpizzacount += 89.00;

            }
        },
        buyLargePizza() {
            if (this.buy = true) {

                this.total  += 120.00;
                this.largepizzacount += 120.00;
            }


        }
    }
};

