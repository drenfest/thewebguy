import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { servicePages, skillPages, locationPages, blogPosts } from "../src/lib/data/content.js";
import { staticHeroImages, serviceHeroImage, skillHeroImage, locationHeroImage, blogHeroImage } from "../src/lib/data/hero-images.js";

const root = process.cwd();
const heroSource = path.join(root, "static/images/technical-web-support-hero.png");
const heroOutputDir = path.join(root, "static/images");
const pageHeroSourceDir = path.join(root, "static/images/heroes");

const heroVariants = [
  { width: 640, jpegQuality: 78, webpQuality: 72 },
  { width: 960, jpegQuality: 78, webpQuality: 74 },
  { width: 1280, jpegQuality: 78, webpQuality: 76 }
];
const requiredVariantFiles = heroVariants.flatMap(({ width }) => [`${width}.jpg`, `${width}.webp`]);

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

async function fileExists(filePath) {
  return (await fileMtime(filePath)) > 0;
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

async function optimizePageHeroes() {
  await mkdir(pageHeroSourceDir, { recursive: true });

  const files = await readdir(pageHeroSourceDir);
  const sourceFiles = files.filter((file) => /-source\.(png|jpe?g|webp)$/i.test(file));

  const jobs = sourceFiles.flatMap((file) => {
    const sourcePath = path.join(pageHeroSourceDir, file);
    const slug = file.replace(/-source\.(png|jpe?g|webp)$/i, "");

    return heroVariants.flatMap(({ width, jpegQuality, webpQuality }) => [
      writeVariant({
        sourcePath,
        outputPath: path.join(pageHeroSourceDir, `${slug}-${width}.jpg`),
        width,
        format: "jpeg",
        quality: jpegQuality
      }),
      writeVariant({
        sourcePath,
        outputPath: path.join(pageHeroSourceDir, `${slug}-${width}.webp`),
        width,
        format: "webp",
        quality: webpQuality
      })
    ]);
  });

  return Promise.all(jobs);
}

async function validateHeroAssets() {
  const heroConfigs = [
    ...Object.entries(staticHeroImages).map(([key, image]) => ({ label: `static:${key}`, image })),
    ...servicePages.map((service) => ({ label: `service:${service.slug}`, image: serviceHeroImage(service) })),
    ...skillPages.map((skill) => ({ label: `skill:${skill.slug}`, image: skillHeroImage(skill) })),
    ...locationPages.map((location) => ({ label: `location:${location.slug}`, image: locationHeroImage(location) })),
    ...blogPosts.map((post) => ({ label: `blog:${post.slug}`, image: blogHeroImage(post) }))
  ];

  const missing = [];

  for (const { label, image } of heroConfigs) {
    for (const variantFile of requiredVariantFiles) {
      const assetPath = path.join(root, "static", image.basePath.replace(/^\//, ""), `${image.slug}-${variantFile}`);

      if (!(await fileExists(assetPath))) {
        missing.push(`${label} -> ${image.basePath}/${image.slug}-${variantFile}`);
      }
    }
  }

  if (missing.length) {
    throw new Error(`Missing responsive hero image assets:\n${missing.join("\n")}`);
  }
}

const results = [...await optimizeHero(), ...await optimizePageHeroes()];
const optimized = results.filter((result) => result.status === "optimized");

if (optimized.length) {
  console.log(`Optimized ${optimized.length} responsive hero image assets.`);
} else {
  console.log("Responsive hero image assets are already optimized.");
}

await validateHeroAssets();
console.log("Validated responsive hero image assets.");
