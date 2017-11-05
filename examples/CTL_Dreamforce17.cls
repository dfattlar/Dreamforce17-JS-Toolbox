/* EXAMPLE - Simple query of 5 Accounts and their contacts as used in the presentation
    Note that getAccounts is flagged as a remote action */
public with sharing class CTL_Dreamforce17 {
	public CTL_Dreamforce17() {
		
	}

	@RemoteAction
    public static List<Account> getAccounts() 
    {
        List<Account> accounts = [SELECT Id,Name,
                                    (SELECT AccountId, Name, Email, Title  
                                    FROM Contacts) 
                                    FROM Account
                                    ORDER BY Name ASC 
                                    LIMIT 5];
        return accounts;
    }
}