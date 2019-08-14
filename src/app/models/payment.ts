export class Payment{
    constructor(
        public holder:string,
        public card_number1: string,
        public card_number2: string,
        public card_number3: string,
        public card_number4: string,
        public date_mont:string,
        public data_year:string,
        public cvv:string
    ){}
}