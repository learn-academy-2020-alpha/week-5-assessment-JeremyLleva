# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

$ rails db:create

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - Grabs the http verbs
library - represents the route we take
:id - represents a parameter that we can recieve 
book - which controller we are using
show - represents what method or action we want to do

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

First we gotta create a new migration:

$ rails generate migration add_fk_to_model

We then add the change to our migration file:

"add_column :model, :foriegn_id, :string"

Lastly we run our migration:

$ rails db:migrate

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails generate model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?
