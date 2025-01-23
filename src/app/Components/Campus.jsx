import { Play } from "lucide-react";

export default function Campus() {
  return (
    <section className="py-16 bg-[#3F3D8C] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Campus</h2>
            <p className="mb-6 text-white/80">
              Lorem ipsum dolor sit amet consectetur. Urna aliquam penatibus
              tempus feugiat donec cursus vel convallis. Mi tristique et sed
              ante diam magna. Elit tempus in vivamus luctus sed a egestas
              condimentum lorem. Nisl a etiam volutpat nunc tempus interdum leo
              enim.
            </p>
            <p className="mb-8 text-white/80">
              Lorem ipsum dolor sit amet consectetur. Urna aliquam penatibus
              tempus feugiat donec cursus vel convallis.
            </p>
            <button className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition flex items-center gap-2">
              Read More
              <span className="text-xl">→</span>
            </button>
          </div>

          <div className="relative">
            {/* <img src="/images/dots.svg" alt="dots" className="" /> */}
            <img src="/images/4.jpg" alt="Campus Life" className="rounded-xl" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <Play className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
