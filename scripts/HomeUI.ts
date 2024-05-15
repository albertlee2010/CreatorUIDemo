/*
 * @Author: lizhang lizhang@mini1.cn
 * @Date: 2024-04-22 14:12:16
 * @LastEditors: lizhang lizhang@mini1.cn
 * @LastEditTime: 2024-05-15 15:40:49
 * @FilePath: \UIProject\assets\scripts\HomeUI.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: lizhang lizhang@mini1.cn
 * @Date: 2024-04-22 14:12:16
 * @LastEditors: lizhang lizhang@mini1.cn
 * @LastEditTime: 2024-05-15 15:30:49
 * @FilePath: \UIProject\assets\scripts\HomeUI.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { _decorator, Component, Node, Animation, Enum} from "cc";
const { ccclass, property } = _decorator;
import { BackPackUI } from "./BackPackUI";
import { ShopUI } from "./ShopUI";
import { ChallengeUI } from "./ChallengeUI";
import { PanelType } from "./PanelType";

declare var myGlobalVar : number; // = "Global variable";

var global = window;


class myClass {


    // myName : string;
    m_num : number;
    myName: string;

    constructor(name : string){
        console.log("constructor myClass");

        this.myName = name;
        this.m_num = 0;

        // set m_num (v : number){
    
        // };
    
    }

    printStr(str : string){
        console.log("myclass:" + str);
    }
}

class classLv2 extends myClass {
    constructor(){
        super("lv2");
    }
    printStr(str : string){
        str = "lv2:" + str
        super.printStr(str)
    }
}

@ccclass
export class HomeUI extends Component {
    @property(Animation)
    menuAnim: Animation = null!;
    @property(BackPackUI)
    backPackUI: BackPackUI = null!;
    @property(ShopUI)
    shopUI: ShopUI = null!;
    @property(ChallengeUI)
    challengeUI: ChallengeUI = null!;

    @property(Node)
    upperUI: Node = null!;


    @property(ChallengeUI)
    upperUI22: ChallengeUI = null!;

    public curPanel = PanelType.Home;

    public myClass : any;

    // var number = 0;


    // use this for initialization
    onLoad() {
        this.curPanel = PanelType.Home;
        // this.menuAnim.play('menu_reset');

        this.myClass = new classLv2();

    }


    // constructor(){
    //     super
    // }

    start() {
        this.backPackUI.init(this);
        this.shopUI.init(this, PanelType.Shop);
        this.challengeUI.init(this);
        // this.upperUI.hide();
        this.scheduleOnce(() => {
            this.menuAnim.play('menu_intro');
        }, 0.5);
    }

    gotoShop() {
        if (this.curPanel !== PanelType.Shop) {
            this.shopUI.show();
        }
    }

    gotoHome() {
        if (this.curPanel === PanelType.Shop) {
            this.shopUI.hide();
            this.curPanel = PanelType.Home;
        }
    }

    gotoLevel(){
        if (this.curPanel === PanelType.Shop) {
            this.shopUI.hide();
        }

        this.curPanel = PanelType.Level;
        console.log("PanelType.Level");
            
    }

    gotoRaid(){
        if (this.curPanel !== PanelType.Shop) {
            this.curPanel = PanelType.Raid;
            this.challengeUI.show()
        }

    }

    /**
     * @description: 
     * @param {number} numA 参数1
     * @param {number} numB 2
     * @return {*} 加起来
     */
    numAdd(numA: number, numB : number):number{

        return numA + numB;
    }

    btnSetting(){
  
        // myGlobalVar = "Global variable";
        // console.log(myGlobalVar);
        // try{
        //     console.log(123);
        // }catch{
        //     console.log("some error catch");
        // }asdasd

        this.myClass.printStr("test");
        // this.test3();

        var nullVar;
        console.log("nullVar == null", nullVar == null)
        console.log("nullVar == null", nullVar === null)


        var numVar : number;

        var str = "123";

        // console.log("5", numVar == "5");

        var newV = this.makeStrToNum(str);

        // newV = "444";
        console.log(typeof this.myClass);
        // console.log("5", newV == "123");

    }

    makeStrToNum(str :string) {
        let newNum = Number(str)
        return newNum
    }

    test3(){
        if(false){
            var bbb

        }
        console.log(typeof this.test1);

        let strList : (string|number)[] = ["123", 123, "aoe"];

        let strL2 : Array<string> = ["123", "aoe", "a"];

        let yuanzu : [number, string, string] = [123 ,"123", "ueo"];

        let a: Array<[number, string]> = [[27, "jianan"], [28, "xixi"]];


        let unionNum: string | number;
        unionNum = "jianan";
        unionNum = 777;

        console.log("unionNum:", unionNum);


        let obj1 = { a : 1, b : 2, c : 3};
        let obj2 = obj1;

        obj2.b = 333;
        console.log(obj1);
    }

    /**
     * @description: 
     * @param {number} num1
     * @return {*} 1、asdasd
     *              2、123123
     *              3、sdasd
     * 
     */
    test2(num1 : number){
        let b = 11;
        // b=b/0;
        // console.log(b);
        // console.log(typeof (b) );
        
        b = b - Number("1");
        console.log(b);
        console.log(typeof (b) );

        let c = 123;
        console.log(c.toString() + 321);

        // let myList = {a:1, b:2, c: [1,2,3]}; console.log(typeof myList); 
        
        let myList = [4,5,6];
        for (const key in myList) {
            if (Object.prototype.hasOwnProperty.call(myList, key)) {
                const element = myList[key];
                console.log("element:",key, element);
            }
        }

        for (const iterator of myList) {
            console.log("iteratorc:", iterator);
            
        }

        let testV = this.returnVoid();
        console.log("returnV:", testV, typeof testV);

    }

    returnVoid(): void{

    }

    test1(){
        var num = 1;
        let letNum = 2;
        var gbNum = 3;
        gbNum++;

        const obj = { width: 10, height: 15 };
    // Why is this NaN? Spelling is hard!
        const area = obj.width * obj.height;

        const cNum = 1;
        // cNum = 2;
        console.log("cNum", cNum)

        const tb = {a : 1, b : 2 }

        tb.a = 2;

        "hello";

        console.log("tb:", tb)

        console.log(this.numAdd(222,333))

        console.log(gbNum);


        // if(false){
            var num1 = 1;
        // }

        console.log(num1);
        var num1 = 2;

        var myFn = function(){
            var num1 = 3;
            console.log(num1)
        }

        myFn()
    }
    
}

function withLogging<T extends { new(...args: any[]): {} }>(originalClass: T) {
    return class extends originalClass {
        log() {
            console.log(`Logging from ${this.constructor.name}`);
        }
    };
}

function isDefined<T>(value: T | null | undefined): value is T {  
    return value !== undefined && value !== null;  
}  
  