export default function LoginStatus({
  isLoggedIn,
  handleLogIn,
  handleLogout,
}: {
  isLoggedIn: boolean;
  handleLogIn: () => void;
  handleLogout: () => void;
}) {
  if (isLoggedIn) {
    return (
      <>
        <p>환영합니다. 사용자!</p>
        <button onClick={handleLogout}>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <p>로그인이 필요합니다.</p>
      <button onClick={handleLogIn}>로그인</button>
    </>
  );
}
