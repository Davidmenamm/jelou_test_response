
**Quiz**
By: David Mena
Date: Wednesday, February 19, 2025

1. You're building a high-throughput API for a cryptocurrency trading platform. For
this platform, time is extremely important because microseconds count when
processing high-volume trade orders. For communicating with the API, you want
to choose the verb that is fastest for read-only operations.
What verb should you choose for retrieving trade orders with the API server?
**Answer: a. GET**
GET is the fastest and most appropriate verb for read-only operations because it is designed specifically for retrieving data. It is lightweight, cacheable, and does not modify server state, making it ideal for high-throughput systems where speed is critical. Other verbs like POST, UPDATE, or DELETE are not suitable as they imply modifying data or performing non-read operations.


2. You work for a Customer Relationship Management CRM company. The
company's clients gain CRM access through a RESTful API. The CRM allows
clients to add contact information for customers, prospects, and related persons
(e.g., virtual assistants or marketing directors). You want to choose an
appropriate API request path so clients can easily retrieve information for a
single contact while also being flexible for future software changes.
**Answer: b. /contacts/{contact_id}**
This path is the most flexible and scalable because it uses a generic `/contacts` resource, which can represent any type of contact (customers, prospects, or related persons). Using `{contact_id}` allows retrieving a single contact efficiently, and it avoids hardcoding specific types (e.g., customers) into the path, making it future-proof for changes.


3. You work for a large social media network, and you've been tasked with error
handling for the API. You're trying to decide on an appropriate error code for
authentication failures based on non-existent users and incorrect passwords.
You want to balance security against brute force attacks with providing
descriptive and true error codes.
Which HTTP error code(s) should you use to keep the system secure and still
report that an error occurred?
**Answer: d. 401 if the user doesn't exist or if the password is wrong.**
Using a single error code (401 Unauthorized) for both cases prevents attackers from distinguishing between non-existent users and incorrect passwords, enhancing security against brute force attacks. It also adheres to RESTful API best practices by indicating an authentication failure without revealing specific details.


4. You're writing documentation for requesting information about a given user in
your system. Your system uses UUIDS (universally unique identifiers) as user
identifiers. In your documentation, you want to show an example.
True or false: You should put a fake UUID into the example code (instead of
just the text "UUID") as a placeholder.
**Answer: a. TRUE**
Using a **fake example UUID** (like `123e4567-e89b-12d3-a456-426614174000` or the standard example `00000000-0000-0000-0000-000000000000`) in your code examples helps show the correct format. Since, UUIDs are designed to be unique across both time and space, fake ones won’t interfere with real systems. To stay safe: use simple test IDs like the all-zero UUID, and add a note like `# Replace with a real UUID` to remind users this is just an example. Using realistic examples makes the documentation easier to understand and clearer. When managed correctly, it also helps reduce the associated risks.


5. You're building code to handle errors issued from a remote API server. The
response may or may not have an error.
How much work should your method, handleErrors(response), handle?
**Answer: b. Check for the presence of an error. If it exists, throw an exception with the error.**
Throwing an exception forces immediate error handling, stopping the program from continuing with invalid data and aligning with fail-fast principles. This simplifies debugging by surfacing issues early and preventing silent failures. Option a (e.g., returning a default value) risks ignored errors, while option c (redundantly setting error properties) adds unnecessary complexity—exceptions inherently capture error context, making extra steps redundant.


6. You have two classes: a database driver and an email driver. Both classes need
to set errors so that your front-end interface displays any errors that transpire
on your platform.
Which way should you implement this error handling?
**Answer: b. Make a trait to handle errors so it'll collect errors in any class that uses it.**
Using a trait centralizes error-handling logic, promoting code reuse and consistency across classes. Option **a** (writing the same code in both classes) leads to duplication and maintenance challenges, while option **c** (driver-based error provider) adds unnecessary complexity by introducing an additional layer. A trait is the most efficient and scalable solution.


7. You need to name the private method in your class that handles looping through
eCommerce products to collect and parse data. That data gets stored in an array
and set as a class property.
Which of the following should you use to name your method?
**Answer: c. parseDataForProducts()**
This name is concise and clearly describes the method's purpose: parsing data for products. Option **a** is too verbose, **b** omits the key detail of parsing, and **d** is unnecessarily long by including implementation details (setting an array). A good method name should be descriptive yet succinct, focusing on the "what" rather than the "how."


8. There are multiple places in your codebase that need to access the database. To
access the database, you need to supply credentials. You want to balance
security with useability.
What strategy should you use to store and access these credentials?
**Answer: d. Put them in a .env file, load data from it into a configuration system, then request the credentials from a database service provider.**
This approach balances security and usability by storing credentials in a `.env` file (not committed to version control) and centralizing access through a configuration system and service provider. Option **a** is insecure (hardcoding credentials), **b** is better but still exposes credentials in a file, and **c** lacks the security of environment variables. Option **d** is the most secure and maintainable solution.