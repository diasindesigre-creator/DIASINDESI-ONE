export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg,#1565C0,#42A5F5)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: 420,
          background: "#fff",
          borderRadius: 16,
          padding: 40,
          boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1565C0",
            marginBottom: 5,
          }}
        >
          DIASINDESI ONE
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 30,
          }}
        >
          Service • ERP • CRM • POS
        </p>

        <input
          type="text"
          placeholder="Όνομα χρήστη"
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Κωδικός"
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
            boxSizing: "border-box",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: 14,
            background: "#1565C0",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Σύνδεση
        </button>
      </div>
    </main>
  );
}