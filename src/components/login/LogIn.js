// function to return the html for login
export default function LogIn() {
  return ( <div class="login">
    <h1 class="heading">Sign In to Your Account!</h1>
    <div class="option">
      <form action="action_page.php">
        <div>
          <h2>Login</h2>
          <p>Please enter your account information.</p>
          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          <br />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            required
          />
          <br />
          <hr />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>);
}
