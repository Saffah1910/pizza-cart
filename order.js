function Order() {
    return {
        count1: 0,
        count2: 0,
        count3: 0,
        total: 0,


        smallplus() {
           
            this.count1 += 49.99,
            this.total += 49.99
        },
        smallminus() {
            if(this.count1 > 0){

                this.count1 -= 49.99,
                this.total -= 49.99
            }

        },
        mediumplus() {
            this.count2 += 89.99,
            this.total += 89.99
        },
        mediumminus() {
            if(this.count2 > 0){

                this.count2 -= 89.99,
                this.total -= 89.99
            }
        },
        largeplus() {
            this.count3 += 120.99,
            this.total += 120.99
        },
        largeminus(){
            if(this.count3 > 0){

                this.count3 -= 120.99,
                this.total -= 120.99
            }
        },
        // enoughmoney(){
        //     if(total >= )
        // }

    }
};

