// app/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "music", label: "Music" },
  { id: "shows", label: "Shows" },
  { id: "gallery", label: "Gallery" },
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

const galleryImages = [
  {
    src: "/images/trumpet-1.jpg",
    alt: "Trumpet player on stage",
  },
  {
    src: "/images/trumpet-2.jpg",
    alt: "Close-up of trumpet",
  },
  {
    src: "/images/trumpet-3.jpg",
    alt: "Jazz band performing live",
  },
];

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
    <div className="min-h-screen flex flex-col bg-linear-to-b from-black via-zinc-950 to-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-[0.25em] uppercase text-sm">
            JOHN DOE
          </div>
          <div className="hidden gap-6 text-xs md:flex tracking-widest uppercase">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className={`transition-colors ${
                  activeSection === s.id
                    ? "text-amber-400"
                    : "text-zinc-300 hover:text-amber-300"
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
            className="hidden rounded-full border border-amber-500 px-4 py-2 text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black md:inline-block"
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
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
              Trumpet Player • Composer
            </p>
            <h1 className="text-4xl font-light tracking-wide md:text-6xl">
              JOHN <span className="font-semibold">DOE</span>
            </h1>
            <p className="max-w-xl text-sm text-zinc-300 md:text-base">
              A modern trumpet voice rooted in classic jazz tradition. From
              intimate clubs to festival stages, John weaves lyrical lines,
              deep grooves, and cinematic soundscapes.
            </p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest">
              <button
                onClick={() => handleNavClick("music")}
                className="rounded-full bg-amber-500 px-5 py-2 text-black hover:bg-amber-400"
              >
                Listen
              </button>
              <button
                onClick={() => handleNavClick("shows")}
                className="rounded-full border border-zinc-600 px-5 py-2 hover:border-amber-400 hover:text-amber-300"
              >
                Live Dates
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-400">
              <span>Follow</span>
              <div className="flex gap-3">
                <Link href="#" className="hover:text-amber-300">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-amber-300">
                  YouTube
                </Link>
                <Link href="#" className="hover:text-amber-300">
                  Spotify
                </Link>
              </div>
            </div>
          </div>

          {/* HERO IMAGE / SIDE PANEL */}
          <div className="mt-10 flex-1 md:mt-0">
            <div className="relative h-[360px] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              {/* Replace with your friend’s real photo */}
              <div className="absolute inset-0 bg-[url('/images/trumpet-hero.jpg')] bg-cover bg-center opacity-80" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 space-y-1 text-xs uppercase tracking-[0.2em] text-zinc-200">
                <p className="text-[10px] text-zinc-400">Upcoming show</p>
                <p className="font-semibold">LIVE @ BLUE NOTE</p>
                <p className="text-[11px]">Dec 14 • New York</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-zinc-800 py-16">
          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-amber-300">
                About
              </h2>
              <p className="mt-4 text-2xl font-light tracking-wide">
                A trumpet story written in smoky rooms and late-night sessions.
              </p>
              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                John Doe is a trumpet player and composer whose sound blends
                classic jazz, contemporary harmony, and cinematic textures.
                Having performed in clubs and festivals across Europe and the
                US, his music balances lyricism with fearless improvisation.
              </p>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Whether in a stripped-down trio or a full ensemble, John&apos;s
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

        {/* MUSIC */}
        <section id="music" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Music
              </h2>
              <p className="mt-3 text-2xl font-light tracking-wide">
                Tracks & recordings.
              </p>
            </div>
            {/* You can add “Listen on Spotify” button */}
            <Link
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-amber-300 underline underline-offset-4"
            >
              Open on Spotify
            </Link>
          </div>

          {/* Replace this with embeds (Spotify, SoundCloud, etc.) */}
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">{track.title}</p>
                    <p className="mt-1 text-xs text-zinc-400">
                      {track.description}
                    </p>
                  </div>
                  <button className="rounded-full border border-zinc-600 px-3 py-1 text-[11px] uppercase tracking-[0.2em] hover:border-amber-400 hover:text-amber-300">
                    Play
                  </button>
                </div>
                <div className="mt-4 h-[3px] w-full rounded-full bg-zinc-800">
                  <div className="h-full w-1/3 rounded-full bg-amber-500" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SHOWS */}
        <section id="shows" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Live Shows
              </h2>
              <p className="mt-3 text-2xl font-light tracking-wide">
                Upcoming performances.
              </p>
            </div>
            <p className="text-xs text-zinc-400 uppercase tracking-[0.2em]">
              More dates coming soon
            </p>
          </div>

          <div className="space-y-4 text-sm">
            {upcomingShows.map((show) => (
              <div
                key={show.date + show.venue}
                className="grid items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/40 px-4 py-3 md:grid-cols-[120px,1fr,1fr]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
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

        {/* GALLERY */}
        <section id="gallery" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Gallery
              </h2>
              <p className="mt-3 text-2xl font-light tracking-wide">
                Moments on and off stage.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className="relative h-52 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900"
              >
                {/* Replace with next/image if you want */}
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.2em] text-zinc-200">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-zinc-800 py-16 mb-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-amber-300">
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
                    className="underline underline-offset-4 hover:text-amber-300"
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
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="Booking / Collaboration / Press..."
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded border border-zinc-700 bg-black px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="Tell us about the event, dates, and location..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-amber-400"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </div>
  );
}
