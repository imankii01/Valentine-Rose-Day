/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { Calendar, Heart, Image, Mail, Music } from "https://esm.sh/lucide-react@latest";
import { nanoid } from "https://esm.sh/nanoid@4.0.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import React, { useEffect, useRef, useState } from "https://esm.sh/react@18.2.0";

// Enhanced Templates with better categorization
const LOVE_TEMPLATES = [
  {
    id: "romantic-classic",
    name: "Romantic Classic",
    description: "Elegant design with beautiful animations and love counter",
    previewImage: "https://maxm-imggenurl.web.val.run/romantic-classic",
    features: ["Love Counter", "Music Player", "Photo Gallery", "Love Letter"],
  },
  {
    id: "modern-story",
    name: "Modern Love Story",
    description: "Contemporary design with timeline and story features",
    previewImage: "https://maxm-imggenurl.web.val.run/modern-story",
    features: ["Timeline View", "Story Cards", "Photo Grid", "Music Integration"],
  },
  {
    id: "vintage-romance",
    name: "Vintage Romance",
    description: "Nostalgic design with romantic elements and memories",
    previewImage: "https://maxm-imggenurl.web.val.run/vintage-romance",
    features: ["Memory Wall", "Love Journal", "Classic Design", "Photo Album"],
  },
];
// Utility function to convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
// Enhanced Floating Hearts Animation
const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHeart = () => {
      const heart = {
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 20 + 10}px`,
        duration: `${Math.random() * 3 + 3}s`,
        delay: `${Math.random() * 2}s`,
      };

      setHearts(prev => [...prev, heart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, parseFloat(heart.duration) * 1000);
    };

    const interval = setInterval(generateHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-500"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animation: `float ${heart.duration} ease-in infinite`,
            animationDelay: heart.delay,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

// Sample Preview Component
const SamplePreview = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-6 mb-12">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Preview Our Templates</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-pink-50 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Love Counter
            </h3>
            <div className="text-2xl text-center text-pink-500">
              365 Days of Love ❤️
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Love Letter
            </h3>
            <button
              onClick={() => setShowLetter(!showLetter)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              {showLetter ? "Hide Letter" : "Read Letter"}
            </button>
            {showLetter && (
              <p className="mt-4 text-gray-700">
                My dearest love, every moment with you feels like a beautiful dream...
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-pink-50 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Photo Memories
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <div
                  key={num}
                  className="bg-pink-200 h-20 rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Our Song
            </h3>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              {isPlaying ? "🎵 Pause" : "🎶 Play"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feedback Form Component
const FeedbackSection = () => (
  <div className="bg-white/80 rounded-xl shadow-lg p-6 text-center mt-12">
    <h2 className="text-3xl font-bold text-pink-700 mb-4">Share Your Love 💌</h2>
    <p className="text-gray-600 mb-6">Help us make your love story even more special</p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeQfJ6vC7QLMk34Z_vh5Cs1pJ3BGhSu60b8r97vSe6GrmGW3w/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition"
    >
      Give Feedback
    </a>
  </div>
);

const extractYoutubeThumbnail = (url: string) => {
  try {
    const videoId = url.split("v=")[1]?.split("&")[0]
      || url.split("youtu.be/")[1]?.split("?")[0];
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : null;
  } catch (error) {
    console.error("Invalid YouTube URL", error);
    return null;
  }
};
// Main App Component
function App() {
  const [view, setView] = useState("home");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    partnerName: "",
    startDate: "",
    loveLetter: "",
    musicUrl: "",
    musicThumbnail: "",
    images: [],
  });
  const [generatedUrl, setGeneratedUrl] = useState(null);
  const musicUrlRef = useRef(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setView("create");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMusicUrlBlur = async () => {
    if (musicUrlRef.current?.value) {
      try {
        const thumbnail = extractYoutubeThumbnail(musicUrlRef.current.value);
        if (thumbnail) {
          setFormData(prev => ({
            ...prev,
            musicUrl: musicUrlRef.current.value,
            musicThumbnail: thumbnail,
          }));
        }
      } catch (error) {
        console.error("Error extracting thumbnail", error);
      }
    }
  };
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 6) {
      alert("Maximum 6 images allowed");
      return;
    }

    try {
      const base64Images = await Promise.all(files.map(fileToBase64));

      setFormData(prev => ({
        ...prev,
        images: base64Images,
      }));
    } catch (error) {
      console.error("Image upload error", error);
      alert("Failed to upload images");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const shareableId = nanoid(12);
    setLoading(true);
    try {
      const response = await fetch("/api/love-template", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          shareableId,
          template: selectedTemplate.id,
        }),
      });

      const data = await response.json();
      setGeneratedUrl(`/love/${data.shareableId}`);
      setView("success");
    } catch (error) {
      console.error("Error creating love story:", error);
      alert("Failed to create your love story. Please try again.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Render Home View with enhanced landing page
  const renderHomeView = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center text-pink-800 mb-6">
        Create Your Eternal Love Story 💑
      </h1>
      <p className="text-xl text-center text-gray-700 mb-12">
        Express your love in a unique and beautiful way
      </p>

      <SamplePreview />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {LOVE_TEMPLATES.map(template => (
          <div
            key={template.id}
            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => handleTemplateSelect(template)}
          >
            <img
              src={template.previewImage}
              alt={template.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-pink-700 mb-2">
              {template.name}
            </h3>
            <p className="text-gray-600 mb-4">{template.description}</p>
            <div className="flex flex-wrap gap-2">
              {template.features.map(feature => (
                <span
                  key={feature}
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <FeedbackSection />
    </div>
  );
  // Render Create View
  const renderCreateView = () => (
    <div className="container mx-auto px-4 py-8">
      <FloatingHearts />
      <h2 className="text-3xl font-bold text-center text-pink-800 mb-6">
        Create Your Love Story: {selectedTemplate.name}
      </h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-pink-700 mb-2">Partner's Name</label>
          <input
            type="text"
            name="partnerName"
            value={formData.partnerName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-pink-500"
            placeholder="Enter your partner's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-700 mb-2">Relationship Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-pink-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-700 mb-2">Love Letter</label>
          <textarea
            name="loveLetter"
            value={formData.loveLetter}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-pink-500"
            placeholder="Write a heartfelt message to your partner"
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-700 mb-2">Our Special Song (YouTube URL)</label>
          <input
            type="url"
            name="musicUrl"
            ref={musicUrlRef}
            onBlur={handleMusicUrlBlur}
            className="w-full px-3 py-2 border rounded-md focus:outline-pink-500"
            placeholder="Paste YouTube link of your special song"
          />
          {formData.musicThumbnail && (
            <img
              src={formData.musicThumbnail}
              alt="Song Thumbnail"
              className="mt-2 w-full h-32 object-cover rounded-md"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block text-pink-700 mb-2">Upload Memories (Max 6)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded-md focus:outline-pink-500"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Memory ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Love Story"}
        </button>
      </form>
    </div>
  );

  // Render Success View
  const renderSuccessView = () => (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-4xl font-bold text-pink-800 mb-6">
        Love Story Created Successfully! 🎉
      </h2>
      <div className="bg-white max-w-xl mx-auto p-8 rounded-lg shadow-lg">
        <p className="text-xl text-gray-700 mb-4">
          Your unique love story is now live!
        </p>
        {generatedUrl && (
          <div className="mb-6">
            <input
              type="text"
              readOnly
              value={`https://${window.location.host}${generatedUrl}`}
              className="w-full px-3 py-2 border rounded-md text-center"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(`https://${window.location.host}${generatedUrl}`);
                alert("Link copied to clipboard!");
              }}
              className="mt-2 w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
            >
              Copy Shareable Link
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 relative">
      <FloatingHearts />
      {view === "home" && renderHomeView()}
      {view === "create" && renderCreateView()}
      {view === "success" && renderSuccessView()}
    </div>
  );
}

// Client-side rendering
function client() {
  createRoot(document.getElementById("root")).render(<App />);
}
if (typeof document !== "undefined") { client(); }

// Server response handling different routes
export default async function server(request: Request): Promise<Response> {
  const { sqlite } = await import("https://esm.town/v/stevekrouse/sqlite");
  const KEY = new URL(import.meta.url).pathname.split("/").at(-1);
  const SCHEMA_VERSION = 3;

  // Initialize Love Templates Table
  await sqlite.execute(`
    CREATE TABLE IF NOT EXISTS ${KEY}_love_templates_${SCHEMA_VERSION} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      shareable_id TEXT UNIQUE NOT NULL,
      partner_name TEXT NOT NULL,
      start_date TEXT NOT NULL,
      love_letter TEXT NOT NULL,
      music_url TEXT,
      music_thumbnail TEXT,
      template_type TEXT NOT NULL,
      images TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const url = new URL(request.url);

  // API: Create Love Template
  if (url.pathname === "/api/love-template" && request.method === "POST") {
    try {
      const payload = await request.json();
      const {
        partnerName,
        startDate,
        loveLetter,
        musicUrl,
        musicThumbnail,
        images,
        shareableId,
        template,
      } = payload;

      await sqlite.execute(
        `
        INSERT INTO ${KEY}_love_templates_${SCHEMA_VERSION} 
        (shareable_id, partner_name, start_date, love_letter, music_url, music_thumbnail, template_type, images) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
        [
          shareableId,
          partnerName,
          startDate,
          loveLetter,
          musicUrl || "",
          musicThumbnail || "",
          template,
          JSON.stringify(images),
        ],
      );

      return Response.json({
        message: "Love template created successfully",
        shareableId,
      });
    } catch (error) {
      console.error("Error creating love template:", error);
      return Response.json({ error: "Failed to create love template" }, { status: 500 });
    }
  }

  // API: Get Love Template
  if (url.pathname.startsWith("/love/")) {
    const shareableId = url.pathname.split("/").pop();

    try {
      const result = await sqlite.execute(
        `
        SELECT * FROM ${KEY}_love_templates_${SCHEMA_VERSION} 
        WHERE shareable_id = ?
      `,
        [shareableId],
      );

      if (result.rows.length === 0) {
        return new Response("Love Website Not Found", { status: 404 });
      }

      const websiteData = result.rows[0];
      const parsedImages = JSON.parse(websiteData.images);

      return new Response(
        `
  <html>
    <head>
      <title>${websiteData.partner_name}'s Love Story</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        /* Keyframes for Floating Hearts */
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
        }

        /* Floating Hearts */
        .heart {
          position: absolute;
          font-size: 1.5rem;
          color: #ff4d6d;
          animation: float 6s linear infinite;
        }

        /* Fade-in Animation */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Glassmorphism Effect */
        .glass {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body class="bg-gradient-to-br from-pink-100 to-pink-300 min-h-screen flex justify-center items-center px-4 relative">

      <!-- Floating Hearts -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
        ${
          Array(15).fill(0).map(() => `
          <div class="heart" style="
            left: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 3 + 3}s;
          ">❤️</div>
        `).join("")
        }
      </div>

      <!-- Main Content -->
      <div class="glass max-w-2xl w-full p-8 text-center fade-in">
        
        <h1 class="text-4xl font-extrabold text-pink-700">💖 ${websiteData.partner_name}'s Love Story 💖</h1>
        <p class="text-lg mt-2 text-gray-700">Together Since: <span class="font-bold">${websiteData.start_date}</span></p>

        <!-- Love Counter -->
        <div class="mt-4 text-pink-800 text-2xl font-semibold bg-white p-4 rounded-lg shadow-md inline-block" id="love-counter"></div>

        <!-- Our Song -->
        ${
          websiteData.music_thumbnail
            ? `
            <div class="mt-6 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center fade-in">
              <h2 class="text-2xl font-semibold text-pink-700">Our Song 🎶</h2>
              <img src="${websiteData.music_thumbnail}" class="w-full max-w-md rounded-lg shadow-md mt-2 transition-transform hover:scale-105" />
              <a href="${websiteData.music_url}" target="_blank" class="bg-pink-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-pink-600 transition">
                ▶ Listen Now
              </a>
            </div>
            `
            : ""
        }

        <!-- Love Letter -->
        <div class="mt-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500 fade-in">
          <h2 class="text-2xl font-semibold text-pink-700">Love Letter 💌</h2>
          <p class="text-gray-700 mt-2">${websiteData.love_letter}</p>
        </div>

        <!-- Memory Gallery -->
        ${
          parsedImages.length > 0
            ? `
            <div class="mt-6 fade-in">
              <h2 class="text-2xl font-semibold text-pink-700">Our Memories 📸</h2>
              <div class="grid grid-cols-3 gap-4 mt-4">
                ${
              parsedImages.map(img => `
                  <div class="overflow-hidden rounded-lg shadow-md">
                    <img src="${img}" class="w-full h-32 object-cover transition-transform hover:scale-110" />
                  </div>
                `).join("")
            }
              </div>
            </div>
            `
            : ""
        }
      </div>

      <script>
        // Love Counter
        const startDate = new Date("${websiteData.start_date}");
        const today = new Date();
        const difference = today - startDate;
        const days = Math.floor(difference / (1000 * 3600 * 24));
        document.getElementById("love-counter").innerText = "Days of Love: " + days + " ❤️";
      </script>

    </body>
  </html>
  `,
        {
          headers: { "Content-Type": "text/html" },
        },
      );
    } catch (error) {
      console.error("Error fetching love template:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }

  // Default homepage
  return new Response(
    `
    <html>
      <head>
        <title>Love Express</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
          body { 
            background: linear-gradient(135deg, #ffc0cb, #ff69b4); 
            min-height: 100vh;
            overflow-x: hidden;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script src="https://esm.town/v/std/catch"></script>
        <script type="module" src="${import.meta.url}"></script>
      </body>
    </html>
  `,
    {
      headers: { "Content-Type": "text/html" },
    },
  );
}