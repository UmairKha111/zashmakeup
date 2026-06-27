import React from "react";
import { brandInfo, highlights } from "../data/cmsData";
import { CheckCircle2, Award, Sparkles, Heart, Users, MessageSquare, Instagram, ExternalLink } from "lucide-react";

interface InstagramWidgetProps {
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

export default function InstagramWidget({ onSelectCategory, activeCategory }: InstagramWidgetProps) {
  return (
    <div className="bg-stone-50 border border-stone-200/50 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm" id="instagram-widget">
      {/* Upper Profile Area */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
        {/* Profile Picture */}
        <div className="relative group">
          <div className="absolute inset-0 bg-stone-950 rounded-full -m-1.5 p-[2px] animate-pulse group-hover:scale-105 transition-transform duration-300" />
          <img
            src={brandInfo.stats.find(s => s.label === "Certified") ? "/src/assets/images/zash_profile_1782466186499.jpg" : "https://picsum.photos/200"}
            alt={brandInfo.name}
            className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white bg-white"
            referrerPolicy="no-referrer"
            id="profile-img"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
            <h2 className="text-xl md:text-2xl font-sans font-extrabold text-stone-950 tracking-tight" id="instagram-title">
              zash_mockup_mua_from_alighar
            </h2>
            <div className="flex justify-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-950 border border-stone-200">
                @zashmockupmua
              </span>
              <CheckCircle2 className="w-5 h-5 text-stone-950 fill-stone-950 shrink-0 self-center" />
            </div>
          </div>

          {/* Followers Stats Bar */}
          <div className="flex justify-center md:justify-start gap-8 py-1 border-y border-stone-200/50 text-stone-600 text-sm font-semibold">
            <div>
              <span className="font-extrabold text-stone-950">38</span> posts
            </div>
            <div>
              <span className="font-extrabold text-stone-950">691</span> followers
            </div>
            <div>
              <span className="font-extrabold text-stone-950">56</span> following
            </div>
          </div>

          {/* Bio Details */}
          <div className="text-xs sm:text-sm text-stone-700 space-y-1.5 leading-relaxed font-semibold">
            <div className="font-extrabold text-stone-950 flex items-center justify-center md:justify-start gap-1">
              <span>Artist</span>
              <Sparkles className="w-3.5 h-3.5 text-stone-950" />
            </div>
            <p className="flex items-center justify-center md:justify-start gap-2 text-stone-600">
              <Award className="w-4 h-4 text-stone-950 shrink-0" />
              <span>certified from VLCC</span>
            </p>
            <p className="text-stone-500">makeup artist & bridal stylist</p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-stone-600">
              <Sparkles className="w-4 h-4 text-stone-950 shrink-0" />
              <span>5+ years experience</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-stone-600">
              <Users className="w-4 h-4 text-stone-950 shrink-0" />
              <span>300+ brides transformation</span>
            </p>
            <p className="font-extrabold text-stone-950">soft glam / HD look specialist</p>
            <p className="text-stone-500 italic">DM, Brides for a custom package</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            <a
              href={brandInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-stone-800 transition-all duration-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
              id="follow-btn"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
            <a
              href={brandInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-stone-300 text-stone-950 bg-white hover:bg-stone-50 transition-all duration-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
              id="message-btn"
            >
              <MessageSquare className="w-4 h-4 text-stone-950" />
              Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Highlights Circular Reels (Navigation triggers) */}
      <div className="mt-10 pt-6 border-t border-stone-200/60">
        <h3 className="text-xs font-bold text-stone-400 tracking-wider uppercase mb-5 text-center md:text-left">
          Explore Look Highlights
        </h3>
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start items-center">
          {highlights.map((highlight) => {
            const isSelected = activeCategory === highlight.id;
            return (
              <button
                key={highlight.id}
                onClick={() => onSelectCategory?.(highlight.id)}
                className="flex flex-col items-center gap-2 group focus:outline-none"
                id={`highlight-btn-${highlight.id}`}
              >
                <div className="relative">
                  {/* Circular Border */}
                  <div
                    className={`absolute inset-0 rounded-full -m-1 p-[2px] transition duration-300 ${
                      isSelected
                        ? "bg-black scale-105"
                        : "bg-stone-200 group-hover:bg-stone-400"
                    }`}
                  />
                  {/* Thumbnail Image */}
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-white bg-white"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span
                  className={`text-[10px] tracking-widest uppercase transition ${
                    isSelected ? "text-stone-950 font-extrabold" : "text-stone-500 group-hover:text-stone-950"
                  }`}
                >
                  {highlight.title.toLowerCase()}
                </span>
              </button>
            );
          })}

          {/* Static Highlight Representing 'Wow' from screenshot */}
          <div className="flex flex-col items-center gap-2 group opacity-85" id="highlight-wow">
            <div className="relative">
              <div className="absolute inset-0 rounded-full -m-1 p-[2px] bg-stone-200" />
              <img
                src="/src/assets/images/zash_profile_1782466186499.jpg"
                alt="Wow"
                className="relative w-16 h-16 rounded-full object-cover border-2 border-white bg-white"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] tracking-widest text-stone-400 uppercase">
              wow
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
