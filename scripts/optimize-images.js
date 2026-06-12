import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const heroSource = path.join(root, "static/images/technical-web-support-hero.png");
const heroOutputDir = path.join(root, "static/images");

const heroVariants = [
  { width: 640, jpegQuality: 78, webpQuality: 72 },
  { width: 960, jpegQuality: 78, webpQuality: 74 },
  { width: 1280, jpegQuality: 78, webpQuality: 76 }
];

async function fileMtime(filePath) {
  try {
    return (await stat(filePath)).mtimeMs;
  } catch {
    return 0;
  }
}

async function needsUpdate(sourcePath, outputPath) {
  const outputTime = await fileMtime(outputPath);
  if (!outputTime) return true;
  return (await fileMtime(sourcePath)) > outputTime;
}

async function writeVariant({ sourcePath, outputPath, width, format, quality }) {
  if (!(await needsUpdate(sourcePath, outputPath))) {
    return { outputPath, status: "current" };
  }

  const pipeline = sharp(sourcePath).rotate().resize({
    width,
    withoutEnlargement: true
  });

  if (format === "jpeg") {
    await pipeline
      .jpeg({
        quality,
        mozjpeg: true,
        progressive: true
      })
      .toFile(outputPath);
  }

  if (format === "webp") {
    await pipeline
      .webp({
        quality,
        effort: 6
      })
      .toFile(outputPath);
  }

  return { outputPath, status: "optimized" };
}

async function optimizeHero() {
  await mkdir(heroOutputDir, { recursive: true });

  const jobs = heroVariants.flatMap(({ width, jpegQuality, webpQuality }) => [
    writeVariant({
      sourcePath: heroSource,
      outputPath: path.join(heroOutputDir, `technical-web-support-hero-${width}.jpg`),
      width,
      format: "jpeg",
      quality: jpegQuality
    }),
    writeVariant({
      sourcePath: heroSource,
      outputPath: path.join(heroOutputDir, `technical-web-support-hero-${width}.webp`),
      width,
      format: "webp",
      quality: webpQuality
    })
  ]);

  return Promise.all(jobs);
}

const results = await optimizeHero();
const optimized = results.filter((result) => result.status === "optimized");

if (optimized.length) {
  console.log(`Optimized ${optimized.length} responsive hero image assets.`);
} else {
  console.log("Responsive hero image assets are already optimized.");
}
