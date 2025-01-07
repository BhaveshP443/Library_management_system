Go to the link for the UI-Preview: [frontend/README.md](https://github.com/BhaveshP443/assignment/blob/main/frontend/README.md)

## How to run the project
1. Clone the repository
```
git clone https://github.com/BhaveshP443/assignment.git
```
2. Open the terminal and navigate to the project directory
```
cd assignment
```
3. Go to `backend` directory and install dependencies
```
cd backend
npm install
```


5. Run the following command to start the server
```
npm start
```
## How to run the Client
1. Go to the `frontend` directory and install the dependencies
```
cd frontend
npm install
```
```
REACT_APP_API_URI=http://localhost:5000/api
```
(Note: the URI should end with `/api`. Else The below modification needs to be done on the `backend/server.js`)
```
app.use('/api/books', bookRoutes);  //replace these /api with your URI trailer

app.use('/api/borrowers', borrowerRoutes);  //replace these /api with your URI trailer

app.use('/api/authors', authorRoutes);  //replace these /api wwith your URI trailer

app.use('/api/counts', countRoutes);    //replace these /api wwith your URI trailer
```
3. Run the following command to start the client
```
npm start
```
4. Open the browser and navigate to `http://localhost:3000/` to view the client

# Note:
 - Run the server before running the client(else the client will not fetch data until the server is running)
 - the `npm start` command will start the server using nodemon. To change the behaviour, change the `start` script in `package.json` file in the `backend` directory
 - The project is still under development and hence the Demo UI or the video may not be exact same as the current UI

# Contributed by:
 - Bhavesh Patidar [(github/BhaveshP443)](https://github.com/BhaveshP443)
