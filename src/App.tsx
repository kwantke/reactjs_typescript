// ✅ 1️⃣ UserProfile 컴포넌트 구현
interface UserProfileProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

function UserProfile({ name, age, isAdmin }: UserProfileProps) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>{isAdmin ? "관리자 계정" : "일반 사용자"}</p>
    </div>
  );
}

// ✅ 2️⃣ UserProfile 컴포넌트 사용
export default function App() {
  return (
    <div>
      <h1>사용자 목록</h1>
      <UserProfile name="Alice" age={30} isAdmin={true} />
      <UserProfile name="Bob" age={25} isAdmin={false} />
    </div>
  );
}
