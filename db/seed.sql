use employee;

-- Listing out department name & their values/titles
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- Listing out role titles & their values
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);


 -- Listing out role titles & their values
 INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Dorthy', 'Gale', 1, 1),
    ('Scare', 'Crow', 2, 2),
    ('Tin', 'Man', 3, 3),
    ('Cowardly', 'Lion', 4, 4),
    ('Wicked', 'Witch', 5, 5),
    ('Great', 'Wizard', 6, 6);