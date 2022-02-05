insert into customers(Customers_ID,Customers_name ,
    Customers_phone ,
    Customers_email ,
    date_became_customer ,
    login,
    password ,
    other_details,
    Customer_Types_code )
VALUES
(103,'Atelier graphique',20202828,'Carin@gm.com',2020-12-21,'54','rue Royale','rue Royale','boss'),
(104,'Ater graphique',20202828,'Carin@gm.com',2020-12-21,'54', 'rue Royale','rue Royale','boss'),
(105,'elier graphique',20202828,'Carin@gm.com',2020-12-21,'54','rue Royale','rue Royale','boss');

]

 create table Transaction_Types(
    -> Transaction_Types_code VARCHAR(15) PRIMARY KEY,
    -> Transaction_types_description VARCHAR(40)
    -> );

     CREATE TABLE Merchants(
    -> Merchant_ID int(10) PRIMARY KEY,
    -> Merchant_name VARCHAR(40),
    -> Merchant_phone INT(10),
    -> Merchant_email VARCHAR(40),
    -> Other_details VARCHAR(40)
    -> );

    CREATE TABLE Customer_types(
    -> Customer_Types_code VARCHAR(15) PRIMARY KEY,
    -> Customer_Types_description VARCHAR(40)
    -> );

    CREATE TABLE customers(
    Customers_ID INT(10) PRIMARY KEY,
    Customers_name VARCHAR(40),
    Customers_phone INT(10),
    Customers_email VARCHAR(40),
    date_became_customer DATE,
    login VARCHAR(40),
    password VARCHAR(40),
    other_details VARCHAR(40),
    Customer_Types_code VARCHAR(10),
    FOREIGN KEY (`Customer_Types_code`) REFERENCES `Customer_types` (`Customer_Types_code`)
    );

    CREATE TABLE Products_and_service(
    -> Product_and_service_code VARCHAR(10) PRIMARY KEY,
    -> Products_and_services_description VARCHAR(40),
    -> Merchant_ID int(10),
    -> FOREIGN KEY (`Merchant_ID`) REFERENCES `Merchants` (`Merchant_ID`)
    -> );

    CREATE TABLE Customer_Purchase(
     Purchase_ID INT(10) PRIMARY KEY,
     Date DATE,
     Quantity FLOAT(8.1),
     Other_details VARCHAR(40),
     Customers_ID INT(10),
     Product_and_service_code VARCHAR(15),
     FOREIGN KEY (`Customers_ID`) REFERENCES `customers` (`Customers_ID`),
     FOREIGN KEY (`Product_and_service_code`) REFERENCES `Products_and_service` (`Product_and_service_code`)
     ); 

      CREATE TABLE Accounts(
     Account_ID INT(10) PRIMARY KEY,
     Account_name VARCHAR(40),
     date_opened DATE,
     other_account_details VARCHAR(40),
     Account_Types_code VARCHAR(10),
     Customers_ID INT(10),
    FOREIGN KEY (`Account_Types_code`) REFERENCES `Account_types` (`Account_Types_code`),
    FOREIGN KEY (`Customers_ID`) REFERENCES `Customers` (`Customers_ID`)
    );

    CREATE TABLE Account_types(
        Account_Types_code VARCHAR(15) PRIMARY KEY,
        ACCOUNT_Types_description VARCHAR(40)
    );

     CREATE TABLE Transactions(
    -> Transaction_ID INT(10) PRIMARY KEY,
    -> date DATE,
    -> amount_of_transaction FLOAT(8.1),
    -> other_details VARCHAR(40),
    -> Purchase_ID INT(10),
    -> Account_ID INT(10),
    -> Transaction_types_code VARCHAR(15),
    -> FOREIGN KEY (`Purchase_ID`) REFERENCES `Customer_Purchase` (`Purchase_ID`),
    -> FOREIGN KEY (`Account_ID`) REFERENCES `Accounts` (`Account_ID`),
    -> FOREIGN KEY (`Transaction_Types_code`) REFERENCES `Transaction_types` (`Transaction_Types_code`)
    -> );


CREATE PROCEDURE Bruce_TDepositsWithdrawals(IN account INT,OUT totalDeposits int,IN date1 DATE,IN date2 DATE)
    BEGIN
    SELECT amount_of_transaction  into totalDeposits from Transactions where Transaction_Types_code="deposit" and Account_ID=account;
    END //


    CREATE PROCEDURE BruceNeza_CustomersAccounts(OUT CUSTOMERID INT,OUT Customername VARCHAR(230),OUT accountid INT,OUT accounttypescode VARCHAR(230))
    BEGIN
    SELECT Customers_ID,Customers_name,account_id,account_types_code into CUSTOMERID,Customername,accountid,accounttypescode from Accounts;
    END //