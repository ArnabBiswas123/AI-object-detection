import ObjectDetection from "@/components/ObjectDetection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl  md:text-4xl lg:text-6xl tracking-tighter md:px-6 text-center">
        OBJECT DETECTION SYSTEM
      </h1>
      <ObjectDetection></ObjectDetection>
    </main>
  );
}
