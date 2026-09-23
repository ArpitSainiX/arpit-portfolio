"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { githubStats, profile } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

function useLocalClock(timeZone: string) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const time = useLocalClock(githubStats.timeZone);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs uppercase tracking-widest text-accent"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
        >
          Let&rsquo;s build something worth <span className="italic text-accent">shipping.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 max-w-lg text-text-dim"
        >
          Have a role, a project, or just a good problem to solve? My inbox is open — drop
          a line below, or reach me directly. I reply within 24 hours.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-14 border-t border-border pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.form
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-dim">
                  Your name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="w-full border-b border-border bg-transparent px-1 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-1.5 text-xs text-accent">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-dim">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full border-b border-border bg-transparent px-1 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-accent">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-dim">
                What are you building?
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="w-full resize-none border-b border-border bg-transparent px-1 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                placeholder="Tell me about the project…"
              />
              {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message.message}</p>}
            </div>

            <input
              {...register("company")}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <button
              type="submit"
              disabled={status === "loading"}
              data-cursor-hover
              className="mt-8 flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "loading" ? "Sending…" : "Send message"}
              <Send size={14} />
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-accent">Sent. I&rsquo;ll reply within 24 hours.</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-text-dim">
                {errorMsg}{" "}
                <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
                  Email me directly
                </a>
                .
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-dim">
              Or reach me directly
            </p>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="block break-all font-display text-2xl text-text transition-colors hover:text-accent sm:text-3xl"
            >
              {profile.email}
            </a>

            <div className="mt-8 space-y-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group flex items-center justify-between border-b border-border pb-3 text-sm"
              >
                <span className="flex items-center gap-3 text-text-dim">
                  <FaLinkedin size={16} />
                  LinkedIn
                </span>
                <span className="flex items-center gap-1.5 text-text transition-colors group-hover:text-accent">
                  {profile.linkedinHandle}
                  <ArrowUpRight size={13} />
                </span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group flex items-center justify-between border-b border-border pb-3 text-sm"
              >
                <span className="flex items-center gap-3 text-text-dim">
                  <FaGithub size={16} />
                  GitHub
                </span>
                <span className="flex items-center gap-1.5 text-text transition-colors group-hover:text-accent">
                  {profile.githubHandle}
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <p className="text-text-dim">Local time · {githubStats.timeZoneLabel}</p>
                <p className="mt-1 text-text">{time ?? "--:--:--"}</p>
              </div>
              <div>
                <p className="text-text-dim">Availability</p>
                <p className="mt-1 text-accent">Freelance &amp; full-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
