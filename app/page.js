"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/videos")
      .then(res => res.json())
      .then(data => {
        setVideos(data.list || []);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>🌙 MoonTV</h1>

      {loading && <p style={{ textAlign: "center" }}>加载中...</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }}>
        {videos.map((v) => (
          <a
            key={v.vod_id}
            href={v.vod_play_url}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div style={{
              background: "#1a1a1a",
              borderRadius: 10,
              overflow: "hidden"
            }}>
              <img
                src={v.vod_pic}
                style={{ width: "100%", aspectRatio: 2 / 3, objectFit: "cover" }}
                alt=""
              />
              <div style={{ padding: 10 }}>
                <p style={{ margin: 0, fontSize: 14 }}>{v.vod_name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
