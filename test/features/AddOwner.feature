Feature: Verify whether user can add new owner successfully

   Feature: Add new Owner

    Scenario: Verify user is able to add new owner in pet
        Given User is adding new owner in petclinic application
        When User clicks on find owner menu from home page
        Then Find Owner screen gets dispalyed 

   Scenario: Verify user is able to add new owner in pet
        When User clicks on add owner menu from home page
        Then Add information screen get displayed


   Scenario: user can able to add new owner
      When User provides all the details firstname,lastname,address,city telephone of new owner and submit
      Then User can see information added page


   

    
   


