// app/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
 { id: "gallery", label: "Gallery" },
  { id: "shows", label: "Shows" },
  { id: "covers", label: "Covers" },
  { id: "contact", label: "Contact" },
];

const upcomingShows = [
  {
    date: "Dec 14, 2025",
    venue: "Blue Note Jazz Club",
    city: "New York, USA",
    note: "Late-night set",
  },
  {
    date: "Jan 03, 2026",
    venue: "Sunset Lounge",
    city: "Paris, France",
    note: "Trio performance",
  },
];

const tracks = [
  {
    title: "Midnight Brass",
    description: "Smoky ballad featuring muted trumpet and piano.",
  },
  {
    title: "City Lights",
    description: "Upbeat tune inspired by late-night gigs.",
  },
];

const videos = [
  {
    title: "Live at Blue Note",
    description: "Excerpt from the late-night trio set.",
    embedUrl: "https://www.youtube.com/embed/2O9dQ4OibuY",
  },
  {
    title: "Studio Session – City Lights",
    description: "Recording session from the latest EP.",
    embedUrl: "https://www.youtube.com/embed/eJMBApC44U8",
  },
  {
    title: "Festival Performance",
    description: "Highlights from the summer jazz festival.",
    embedUrl: "https://www.youtube.com/embed/llLoccyPIEw",
  },
];
const mediaItems = [
  {
    type: "image" as const,
    src: "/media/img2.JPEG",
    title: "Live on stage",
    description: "Club performance – downtown set.",
  },
  {
    type: "image" as const,
    src: "/media/img3.jpeg",
    title:  "Trumpet solo",
    description: "Promo shoot for recent shows.",
  },
   {
    type: "image" as const,
    src: "/media/img4.jpeg",
    title:  "Trumpet solo",
    description: "Promo shoot for recent shows.",
  },
  {
    type: "image" as const,
    src: "/media/img5.jpeg",
    title:  "Trumpet solo",
    description: "Promo shoot for recent shows.",
  },
   {
    type: "image" as const,
    src: "/media/img6.jpeg",
    title:  "Trumpet solo",
    description: "Promo shoot for recent shows.",
  },
  {
    type: "video" as const,
    src: "/media/video2.mov",
    poster: "/images/img1.JPEG", 
    title: "Trumpet solo",
    description: "Excerpt from a recent solo session.",
  },

];

function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className="relative rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-6 md:px-6 md:py-8">
      {/* Main content */}
      <div className="grid items-start gap-6 md:grid-cols-[2fr,1fr]">
        {/* Video */}
        <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
          <iframe
            src={currentVideo.embedUrl}
            title={currentVideo.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* For local video files instead of YouTube, replace iframe with:
          <video
            src="/videos/my-video.mp4"
            controls
            className="h-full w-full object-cover"
          />
          */}
        </div>

        {/* Info + list */}
        <div className="flex h-full flex-col justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b36666]">
              {currentIndex + 1} / {videos.length}
            </p>
            <h3 className="mt-2 text-lg font-medium">{currentVideo.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">
              {currentVideo.description}
            </p>
          </div>

          <div className="space-y-2 text-xs text-zinc-400">
            <p className="uppercase tracking-[0.2em] text-zinc-500">
              Other videos
            </p>
            <div className="space-y-1">
              {videos.map((video, index) => (
                <button
                  key={video.title}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex w-full items-center justify-between rounded-md px-2 py-1 text-left transition ${
                    index === currentIndex
                      ? "bg-[#b36666]/15 text-[#b36666]"
                      : "hover:bg-zinc-800/70"
                  }`}
                >
                  <span className="truncate">{video.title}</span>
                  <span className="ml-2 text-[10px] uppercase tracking-[0.2em]">
                    {index === currentIndex ? "Now" : "Play"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-black/70 text-zinc-200 hover:border-[#b36666] hover:text-[#b36666] md:left-4"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-black/70 text-zinc-200 hover:border-[#b36666] hover:text-[#b36666] md:right-4"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-black via-zinc-950 to-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold uppercase tracking-[0.25em]">
            Collins OBiora
          </div>
          <div className="hidden gap-6 text-xs uppercase tracking-widest md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className={`transition-colors ${
                  activeSection === s.id
                    ? "text-[#800000]"
                    : "text-zinc-300 hover:text-[#b36666]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="hidden rounded-full border border-[#800000] px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#b36666] hover:text-black md:inline-block"
          >
            Book Now
          </Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        {/* HERO */}
        <section
          id="home"
          className="flex min-h-[80vh] flex-col items-center justify-center gap-8 py-16 md:flex-row"
        >
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b36666]">
              Trumpet Player
            </p>
            <h1 className="text-4xl font-light tracking-wide md:text-6xl">
              COLLINS <span className="font-semibold">OBIORA</span>
            </h1>
            <p className="max-w-xl text-sm text-zinc-300 md:text-base">
              A modern trumpet voice rooted in classic jazz tradition. From
              intimate clubs to festival stages, Collins weaves lyrical lines,
              deep grooves, and cinematic soundscapes.
            </p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest">
              <button
                onClick={() => handleNavClick("music")}
                className="rounded-full bg-[#b36666] px-5 py-2 text-black hover:bg-[#b36666]"
              >
                Listen
              </button>
              <button
                onClick={() => handleNavClick("shows")}
                className="rounded-full border border-zinc-600 px-5 py-2 hover:border-[#800000] hover:text-[#b36666]"
              >
                Live Dates
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-400">
              <span>Follow</span>
              <div className="flex gap-3">
                <Link href="#" className="hover:text-[#b36666]">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-[#b36666]">
                  YouTube
                </Link>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-10 flex-1 md:mt-0">
            <div className="relative h-[360px] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <div className="absolute inset-0 bg-[url('/images/img1.JPEG')] bg-cover bg-center opacity-80" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-zinc-800 py-16">
          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#b36666]">
                About
              </h2>
              <p className="mt-4 text-2xl font-light tracking-wide">
                A trumpet story written in smoky rooms and late-night sessions.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                Collins OBiora is a trumpet player and composer whose sound
                blends classic jazz, contemporary harmony, and cinematic
                textures. Having performed in clubs and festivals across Europe
                and the US, his music balances lyricism with fearless
                improvisation.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Whether in a stripped-down trio or a full ensemble, Collins&apos;s
                horn carries a distinctive voice—warm, expressive, and deeply
                melodic.
              </p>
            </div>
            <div className="space-y-4 text-sm text-zinc-300">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Highlights
                </h3>
                <ul className="mt-3 space-y-1 text-xs">
                  <li>• Performed at major jazz festivals in 5+ countries</li>
                  <li>• Collaborations with vocalists, big bands, and DJs</li>
                  <li>• Studio sessions for film, ads, and game soundtracks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Genre
                </h3>
                <p className="mt-2 text-xs">Jazz • Nu-Jazz • Cinematic</p>
              </div>
            </div>
          </div>
        </section>

        {/*Gallery */}
      {/* GALLERY */}
<section id="gallery" className="border-t border-zinc-800 py-16">
  <div className="mb-8 flex items-end justify-between">
    <div>
      <h2 className="text-xs uppercase tracking-[0.3em] text-[#b36666]">
        Gallery
      </h2>
      <p className="mt-3 text-2xl font-light tracking-wide">
        Images & live moments.
      </p>
    </div>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    {mediaItems.map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900"
      >
        {/* IMAGE */}
        {item.type === "image" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.title}
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* VIDEO */}
        {item.type === "video" && (
          <video
            src={item.src}
            poster={item.poster}
            controls
            className="h-56 w-full object-cover"
          />
        )}

        {/* Overlay text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-zinc-200">
          <p className="truncate">{item.title}</p>
          <p className="mt-1 text-[10px] normal-case tracking-normal text-zinc-400">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* SHOWS */}
        <section id="shows" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#b36666]">
                Live Shows
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            {upcomingShows.map((show) => (
              <div
                key={show.date + show.venue}
                className="grid items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/40 px-4 py-3 md:grid-cols-[120px,1fr,1fr]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b36666]">
                  {show.date}
                </p>
                <p className="text-sm">
                  {show.venue}
                  <span className="block text-xs text-zinc-400">
                    {show.city}
                  </span>
                </p>
                <p className="text-xs text-zinc-400 md:text-right">
                  {show.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEOS */}
        <section id="covers" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#b36666]">
                Covers
              </h2>
             
            </div>
          </div>
          <VideoSlider />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mb-12 border-t border-zinc-800 py-16"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#b36666]">
                Contact
              </h2>
              <p className="mt-3 text-2xl font-light tracking-wide">
                Booking & inquiries.
              </p>
              <p className="mt-4 text-sm text-zinc-300">
                For tours, private events, studio sessions or collaborations,
                please reach out using the form. A management contact can
                replace this later if needed.
              </p>
              <div className="mt-6 space-y-1 text-sm text-zinc-300">
                <p>
                  Management:{" "}
                  <a
                    href="mailto:booking@example.com"
                    className="underline underline-offset-4 hover:text-[#b36666]"
                  >
                    booking@example.com
                  </a>
                </p>
                <p>Based in: New York, USA</p>
              </div>
            </div>

            <form className="space-y-4 text-sm">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:bg-[#b36666]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:bg-[#b36666]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:bg-[#b36666]"
                  placeholder="Booking / Collaboration / Press..."
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:bg-[#b36666]"
                  placeholder="Tell us about the event, dates, and location..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#b36666] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-[#b36666]"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Collins Obiora. All rights reserved.
      </footer>
    </div>
  );
}
