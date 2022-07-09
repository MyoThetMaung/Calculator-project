
var app = new Vue({
    el : "#app",
    data : {
        number1 : '',
        number2 : '',
        operator : '',
        info : '',
        firstStatus : false,
        secondStatus : false,
        operatorStatus : false,
        history : [],
        saveStatus : false
    },
    methods : {
        calculate(){
            this.validationCheck();
            if(this.firstStatus == false && this.secondStatus == false && this.operatorStatus == false){
                this.conditionCheck();
                this.info = firstNum + ' ' + this.operator + ' ' + secondNum + ' = ' + result;
                this.saveStatus = true;
                this.clear();
            }
        },
        save(){
            if(this.saveStatus == true){
                this.history.push(this.info);
            }
            this.saveStatus = false;
        },
        clear(){
            this.number1 = '';
            this.number2 = '';
            this.operator = '';
        },
        clearAll(){
            this.number1 = '';
            this.number2 = '';
            this.operator = '';
            this.info = '';
            this.firstStatus = false;
            this.secondStatus = false;
            this.operatorStatus = false;
            this.history = [];
            this.saveStatus = false;
        },
        conditionCheck(){
            firstNum = parseInt(this.number1);
            secondNum = parseInt(this.number2);
            switch (this.operator) {
                case '+':
                    result =  firstNum + secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case '*':
                    result = firstNum * secondNum;
                    break;
                case '/':
                    result =  firstNum / secondNum;
                    break;
                default:
                    result =  'Invalid operator';
                    break;
            } 
        },

        validationCheck(){
            this.firstStatus = this.number1 == '' ? true : false;
            this.secondStatus = this.number2 == '' ? true : false;
            this.operatorStatus = this.operator == '' ? true : false;
        }
    }
});
