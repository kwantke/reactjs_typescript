import useInput from "./hooks/useInput";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "./util/validation";

export default function App() {
  const {
    value: email,
    handleValueChange: handleEmailChange,
    error: emailError,
  } = useInput("", validateEmail);
  const {
    value: password,
    handleValueChange: handlePasswordChange,
    error: passwordError,
  } = useInput("", validatePassword);
  const {
    value: name,
    handleValueChange: handleNameChange,
    error: nameError,
  } = useInput("", validateName);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password, name });
    if (emailError) {
      alert(emailError);
      return;
    }

    if (passwordError) {
      alert(passwordError);
      return;
    }

    if (nameError) {
      alert(nameError);
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p>{emailError}</p>}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p>{passwordError}</p>}
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        {nameError && <p>{nameError}</p>}
        <button type="submit">제출</button>
      </form>
    </>
  );
}
