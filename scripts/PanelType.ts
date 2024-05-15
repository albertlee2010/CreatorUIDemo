/*
 * @Author: lizhang lizhang@mini1.cn
 * @Date: 2024-04-22 14:12:16
 * @LastEditors: lizhang lizhang@mini1.cn
 * @LastEditTime: 2024-05-13 22:26:27
 * @FilePath: \UIProject\assets\scripts\PanelType.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { _decorator, Component, Node, Enum } from "cc";

export enum PanelType {
  Home = -1,
  Shop = -1,
  Level = -1,
  Raid = -1,
};

export var gbTb = {
  num1 : 1,

};

var myGlobalVar = 999;

Enum(PanelType);
