// Return HTML for register
// TODO: add the authentication Feature 5 as well as a class for login
export default function Register() {
  return (
    <div class="option">
      <h1 class="heading">Sign Up for Our Email List!</h1>

      <h2>Register</h2>

      <form action="action_page.php">
        <p>Please fill in this form to create an account.</p>
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

        <label for="password-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeat-password"
          id="repeat-password"
          required
        />
        <hr />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
