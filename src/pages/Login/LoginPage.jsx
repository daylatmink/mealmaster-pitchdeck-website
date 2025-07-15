import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/auth/loginUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: username, password }),
            });

            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("token", data.accessToken); // lưu token nếu cần
                setStatus("✅ Đăng nhập thành công");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setStatus("❌ " + (data.message || "Lỗi đăng nhập"));
            }
        } catch (err) {
            setStatus("❌ Lỗi kết nối tới máy chủ");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tên đăng nhập"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
            />
            <button type="submit">Đăng nhập</button>
            <p>{status}</p>
        </form>
    );
}
