import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/auth/registerUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, displayName, phoneNumber }),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus("✅ Đăng ký thành công! Chuyển về trang đăng nhập...");
                setTimeout(() => {
                    navigate("/loginUser");
                }, 3000);
            } else {
                setStatus("❌ " + (data.message || "Lỗi đăng ký"));
            }
        } catch (err) {
            setStatus("❌ Lỗi kết nối tới máy chủ");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Tên hiển thị"
                required
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                required
            />
            <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Số điện thoại"
                required
            />
            <button type="submit">Đăng ký</button>
            <p>{status}</p>
        </form>
    );
}
