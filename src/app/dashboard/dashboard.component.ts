import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QandAService } from '../service/qand-a.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  test: any = [];
  questionList: any;
  answerList: any;
  id!: number;
  ans: any;
  cube: any;
  isPrime = true;
  mid: any;
  cuberootnum: any;
  cubenum: any;
  palindronenumber: any;
  primenum: any;
  armstrongnum: any;
  activecurrentQues: string = "Select Your Question";
  question: any = [];
  selectanswer: any;
  cubenumber: boolean = false;
  palindrone: boolean = false;
  qs: boolean = false;
  bs: boolean = false;
  prime: boolean = false;
  armstrong: boolean = false;
  test1: any = [];



  constructor(private router: Router, private questionservice: QandAService) { }

  ngOnInit(): void {
    this.questionservice.getQuestionsjson().subscribe(res => {
      this.questionList = res;
      this.questionList.quesAnswer.forEach((ele: any) => {
        this.question.push(ele.ques)
      })

    })
  }

  changequestion(drop: any) {
    this.activecurrentQues = drop;
    this.questionList.quesAnswer.forEach((ele: any) => {
      if (ele.ques == drop) {
        this.selectanswer = ele.ans;
        this.displayanswer(ele.id);
      }
    })
  }

  displayanswer(val: any) {
    console.log("🚀 ~ file: dashboard.component.ts:58 ~ DashboardComponent ~ displayanswer ~ val", val)

    switch (val) {
      case 1: this.cubeRootNum();
        break;
      case 2: this.palindroneNumber();
        break;
      case 3: this.quickSort();
        break;
      case 4: this.bubbleSort();
        break;
      case 5: this.primeNum();
        break;
      case 6: this.armstrongNum();
        break;
      default:
        break;
    }
  }
  cubeRootNum() {
    this.cubenumber = true;
    this.palindrone = false;
    this.qs = false;
    this.bs = false;
    this.prime = false;
    this.armstrong = false;
  }
  palindroneNumber() {
    this.palindrone = true;
    this.qs = false;
    this.cubenumber = false;
    this.bs = false;
    this.prime = false;
    this.armstrong = false;
  }
  quickSort() {
    this.qs = true;
    this.palindrone = false;
    this.cubenumber = false;
    this.bs = false;
    this.prime = false;
    this.armstrong = false;
  }
  bubbleSort() {
    this.bs = true;
    this.palindrone = false;
    this.qs = false;
    this.cubenumber = false;
    this.prime = false;
    this.armstrong = false;
  }
  primeNum() {
    this.prime = true;
    this.palindrone = false;
    this.qs = false;
    this.cubenumber = false;
    this.bs = false;
    this.armstrong = false;

  }
  armstrongNum() {
    this.armstrong = true;
    this.palindrone = false;
    this.qs = false;
    this.cubenumber = false;
    this.bs = false;
    this.prime = false;
  }

  //----------------------- Cube Of Number ------------------------------

  Cube() {
    this.cubenum = (<HTMLInputElement>document.getElementById('cubenum')).value

    var num = this.cubenum;
    var ans = num * num * num;
    this.cube = `Cube of ${this.cubenum} is ${ans}`
  }

  //------------------------  PALINDRONE NUMBER ---------------------------

  checkPalindrome() {
    let tempWord = '';
    this.palindronenumber = (<HTMLInputElement>document.getElementById('palindronenumber')).value
    console.log("🚀 ~ file: dashboard.component.ts:151 ~ DashboardComponent ~ checkPalindrome ~  this.palindronenumber", this.palindronenumber)
    console.log(this.palindronenumber);

    tempWord = this.palindronenumber.split('').reverse().join('');
    console.log(tempWord);

    if (tempWord === this.palindronenumber && this.palindronenumber !== '') {

      this.ans = `${this.palindronenumber} is Palindrone`
    }
    else {
      this.ans = `${this.palindronenumber} is Not Palindrone`
    }
  }

  //  ----------------------   QUICK SORT CODE -----------------------------

  calculate() {
    this.test = [1, 7, 4, 9, 2, -1, 6]
    console.time();
    this.quicksort(this.test);
    console.timeEnd();
    console.log(this.test);
  }

  quicksort(test: any[]) {
    this._quicksort(test, 0, test.length - 1);
  }

  private _quicksort(test: any[], min: number, max: number) {
    if (min >= max) {
      return;
    }
    let i = min;
    let j = max;
    const pivot = test[Math.trunc((min + max) / 2)];
    while (i < j) {
      while (test[i] < pivot) {
        i++;
      }

      while (test[j] > pivot) {
        j--;
      }

      this._swap(test, i, j);
    }

    this._quicksort(test, min, i);
    this._quicksort(test, i + 1, max);
  }

  private _swap(test: { [x: string]: any; }, min: string | number, max: string | number) {
    if (min === max) {
      return;
    }
    const tmp = test[min];
    test[min] = test[max];
    test[max] = tmp;
  }


  //-------------------BUBBLE SORT---------------------------------

  bblSort() {
    this.test1 = [19, 72, -44, -9, 29, -1, 36]

    for (var i = 0; i < this.test1.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (this.test1.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration
        if (this.test1[j] > this.test1[j + 1]) {

          // If the condition is true then swap them
          var temp = this.test1[j]
          this.test1[j] = this.test1[j + 1]
          this.test1[j + 1] = temp
        }
      }
    }
    // Print the sorted testay
    console.log(this.test);
  }


  //------------------- CHECK PRIME NUMBER ---------------------------------

  primefunc() {
    this.primenum = (<HTMLInputElement>document.getElementById('primenum')).value

    var i, m = 0, flag = 0;
    m = this.primenum / 2;
    for (i = 2; i <= m; i++) {
      if (this.primenum % i == 0) {
        this.ans = "Number is not prime";
        flag = 1;
        break;
      }
    }
    if (flag == 0)
      this.ans = ("Number is prime");
    return 0;
  }




  //------------------- CHECK ARMSTRONG NUMBER---------------------------------

  isArmstrong() {
    let sum = 0;
    this.armstrongnum = (<HTMLInputElement>document.getElementById('armstrongnum')).value
    const pow = String(this.armstrongnum).length;
    const charArray = String(this.armstrongnum).split("");

    for (let i = 0; i < charArray.length; i++) {
      sum += Math.pow(Number(charArray[i]), pow);
    }
    if (sum == this.armstrongnum) {
      this.ans = `${this.armstrongnum} is an armstrong number.`;
    } else {
      this.ans = `${this.armstrongnum} is not an armstrong number.`;
    }
  }
}