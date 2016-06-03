class ES6 {
  hello(name = 'World') {
    return `Hello, ${name}`;
  }
}

export default ES6;

export function say(word) {
  return `say ${word}`;
}

export class Dog {
  say() {
    return "Wong";
  }
}

/* Examples
 // world-foods.js - 来自世界各地的好东西
 // 导入"sri-lanka"并将它导出的内容的一部分重新导出
 export {Tea, Cinnamon} from "sri-lanka";
 // 导入"equatorial-guinea"并将它导出的内容的一部分重新导出 export {Coffee, Cocoa} from "equatorial-guinea";
 // 导入"singapore"并将它导出的内容全部导出
 export * from "singapore";
 */