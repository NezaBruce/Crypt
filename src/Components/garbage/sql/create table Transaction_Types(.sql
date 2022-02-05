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
