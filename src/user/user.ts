import express  from "express";

export class User {
    constructor(
        public id:number,
        public username:string,
    ){};
}