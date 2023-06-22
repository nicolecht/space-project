# space-project

> The start to modeling the solar system

Calculate the circumference of the sun

## Features

- 👌&nbsp; Calculating Pi to increasing accuracy e.g. 3, 3.1, 3.14, 3.141, 3.1415... etc.
- 📦&nbsp; Server will store the most accurate Pi value after calculating the next decimal precision
- ⚙️&nbsp; Server will respond with the most accurate Pi value via a HTTP Get request
- 🎨&nbsp; Webapp displays server's current known value of Pi and the sun's diameter (diameter value referenced from wikipedia)
- 🪄&nbsp; Webapp calculates and displays the circumference of the sun
- 🚀&nbsp; Bonus: Webapp has an animated illustration of the earth revolving around the sun (Please hover the sun to see additional figures)

## 🚀 Usage

### Git clone and install dependencies

1. Setup frontend

```sh
# Open frontend folder
cd frontend

# Install dependencies
npm install

# Start React App 
npm start
```

2. Setup backend

```sh
# Start another terminal / terminal tab

# Open backend folder
cd backend

# Start NodeJS Server 
node server.js
```

## Thoughts behind the solution

1. Pi was calculated using the Gregory-Leibniz Series (a relatively easy formula to understand).
2. The Gregory-Leibniz Series requires many loops to make it as accurate as possible. Hence, I used a while loop that runs perpetuity and added a setTimeout to allow for other events to be processed.
3. In order to store the most accurate value, I only saved the latest calculated Pi value when it has a new decimal precision.
4. The decimal precision was determined by comparing the latest Pi value and the previous Pi value up to a certain decimal precision. I compared these two values using the getNthDecimal function to remove the extra decimals after a certain number of decimals.
5. If it's the same number, then a new decimal precision has been found, the most accurate Pi value is updated, and the while loop will proceed to find the next decimal precision.

## 📖 Room for improvements

1. There must be a better way or a JavaScript function to replace the getNthDecimal function 
2. Shouldn't use setTimeout in the calculatePi function as it adds delay
3. Frontend should reflect immediately without refreshing the webpage when the server stores a new Pi value

## 🔗 Links
- 📘 [Reference for Calculating PI using the Gregory-Leibniz Series](https://www.wikihow.com/Calculate-Pi#:~:text=Use%20the%20formula.,result%20should%20be%20roughly%203.14)