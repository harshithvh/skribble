# skribble

## Key Features

- Create and join whiteboard sessions.<br>
- Drawing functionality with color and brush size options.<br>
- Revert/repeat actions for seamless user experience.<br>
- Real-time cursor movements for connected users.<br>
- Save whiteboard content as images or PDFs.

## Technologies Used

1. React for front-end development.

2. WebSocket, Node Express for back-end development.

3. Keycloak via Docker for secure user authentication.

4. Konva.js for drawing capabilities.

5. Bootstrap 5.0 for a clean and fluidic layout.

## Setting up the Project

### Keycloak setup

1. Run this Docker commaand to set up Keycloak on your local system

```
docker run -p 8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.0.7 start-dev
```

2. Set up the account with the following configuration

```
Keycloak({
  url: "http://localhost:8080",
  realm: "XXXXXX",
  clientId: "XXXXXX",
});

```

3. Use the Keycloak public key in the `.env` file from your `XXXXX` realm.

4. Go to `http:localhost:8080` to verify the setup.

5. Refer to this [Keycloak documentation](https://www.keycloak.org/getting-started/getting-started-docker) incase of any setup error.

## Frontend & Backend setup

1. Run this command in your local computer to clone the repo.

```
git clone https://github.com/harshithvh/skribble.git
```

2. Open the folder with an IDE (VSCode preferred)

3. Open the terminal and run `cd client` and then `npm ci` to install the dependencies for the front-end

4. Then, open another terminal and run `cd server` and then `npm ci` to install the dependencies for the backend-end

5. Run `npm run dev` in the client directory and `npm start` in the server directory

6. Go to `http://localhost:5173`