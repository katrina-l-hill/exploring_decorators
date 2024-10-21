Add the following to this `README.md` file:  
  * A short report explaining your design decisions and any challenges faced.
  * Documentation: Clear and concise documentation on how to run your application.

# Report
The `SimpleLogger` decorator was applied to the class to log whenever the class is instantiated. This design helps track the creation of instances, making it useful for debugging or analytics. The `constructor.name` is logged to provide clarity on which class was instantiated.

Challenges faced include implementing the `ReadOnly` decorator because ensuring that hte decorated property truly became immutable was difficult. JavaScript’s default behavior for getters needed careful management to make sure the property could not be reassigned. In `LogMethod`, it was crucial to preserve the original functionality of the method while adding logging functionality. Managing TypeScript's strict type requirements posed some challenges, especially in ensuring the decorators adhered to the expected types (e.g., `PropertyDescriptor`, `target` typing).

## How to Run
- Open DevMatch or a desktop IDE
- Clone repo: https://git.devmatch.xyz/aed3c4e1-db6d-4189-8d38-7ff1467f804f.git