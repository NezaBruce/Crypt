CREATE PROCEDURE Bruce_TDepositsWithdrawals(IN account INT,OUT totalDeposits int,IN date1 DATE,IN date2 DATE)
    BEGIN
    SELECT amount_of_transaction  into totalDeposits from Transactions where Transaction_Types_code="deposit" and Account_ID=account;
    END //


    CREATE PROCEDURE BruceNeza_CustomersAccounts(OUT CUSTOMERID INT,OUT Customername VARCHAR(230),OUT accountid INT,OUT accounttypescode VARCHAR(230))
    BEGIN
    SELECT Customers_ID,Customers_name,account_id,account_types_code into CUSTOMERID,Customername,accountid,accounttypescode from Accounts;
    END //