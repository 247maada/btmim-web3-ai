export default function Footer() {
  return (
    <footer style={{
      marginTop: "60px",
      padding: "25px",
      textAlign: "center",
      background: "#000",
      color: "#fff",
      borderTop: "1px solid #333"
    }}>
      © {new Date().getFullYear()} BTMIM Web3 AI Systems  
    </footer>
  );
}
