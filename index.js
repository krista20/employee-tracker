const mysql = require("mysql2");
const express = require('express');
const inquirer = require("inquirer");
const connection = require("./db/connection");
const cTable = require("console.table");

//connecting db
connection.connect((err) => {
    if (err) throw err;
    start();
});

 // WHEN APPLICATION STARTS:
const start = async () => {

// Ask User to choose ...
    await inquirer
        .prompt({
            name: "choices",
            type: "list",
            message: "Start Menu: Please choose one option",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role"
            ]
        })
        // determine based on response
        .then((response) => {
            const {choices} = response;

            if (choices === 'view all departments') {
                viewAllDepartments();
            }
            if (choices === 'view all roles') {
                viewAllRoles();
            }
            if (choices === 'view all employees') {
                viewAllEmployees();
            }
            if (choices === 'add a department') {
                addDepartment();
            }
            if (choices === 'add a role') {
                addRole();
            }
            if (choices === 'add an employee') {
                addEmployee();
            }
            if (choices === 'update an employee role') {
                updateEmployeeRole();
            }
        });
};

// view all departments




start();