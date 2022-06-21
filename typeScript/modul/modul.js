"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("./student"));
const teacher_1 = __importDefault(require("./teacher"));
let teacher = new teacher_1.default();
console.log(teacher.data);
let student = new student_1.default();
console.log(student.data);
