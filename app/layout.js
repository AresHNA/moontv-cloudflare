export const metadata = {
  title: "MoonTV 影视",
  description": "免费在线影视"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, background: "#121212", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
