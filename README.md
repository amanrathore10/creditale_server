# creditale_server

creditail backend server

base_url: http://localhost:3030/

routes - 
```
type - post 
url - '/invoice/create_invoice'

type - get 
url - '/invoice/get_invoice_by_agent/:agent_id'

type - get 
url - '/invoice/get_invoice_by_id/:id'

type - get 
url - '/invoice/create_invoice'

type - get 
url - '/invoice/get_all_invoice'

type - get 
url - 'get_invoice_by_retailer/:retailer_id'
```

add your mongo username and password string in db/config.js to run ;

run `node server` to start the project at http://localhost:3030


Database - Collections

Database Design 
```
Retailers - used to store retailers details
Fields -  id,name,address,phone_number,GST,account_number,created_at,updated_at, 
```

```
Suppliers - used to store supplier from which the goods are being purchased
Fields -  id,name,address,phone_number,GST,account_number,created_at,updated_at, 
```

```
Invoices - all the invoices for each credit request raised.
Fields -  id,title,descriptionagent_id,supplier_id,retailer_id,amount,payment_mode,payment_status,
created_at,updated_at, payment_transaction_id
```

```
Invoice_payments - payment attempts and their status for invoices and their metadata like transaction id for payment reconciliation
Fields - id,invoice_id,payment_mode,payment_status,payment_transaction_id,status,created_at,updated_at 
```

```
Agents - Agents data through which collection is being done.
Fields - id,name,address,phone_number,created_at,updated_at 
```
